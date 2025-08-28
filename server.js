const express = require('express');
const path = require('path');
const cors = require('cors');
const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'https://seekon-ai-platform.herokuapp.com'],
  credentials: true
}));
app.use(express.json());

// Initialize Google Sheets API
const auth = new GoogleAuth({
  credentials: process.env.GOOGLE_SERVICE_ACCOUNT_KEY ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY) : require('./google-service-account.json'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

// Initialize email transporter
const createTransporter = () => {
  // Try Hostinger SMTP first
  if (process.env.HOSTINGER_USER && process.env.HOSTINGER_PASS) {
    return nodemailer.createTransport({
      host: process.env.HOSTINGER_HOST,
      port: parseInt(process.env.HOSTINGER_PORT),
      secure: true, // SSL
      auth: {
        user: process.env.HOSTINGER_USER,
        pass: process.env.HOSTINGER_PASS
      }
    });
  }
  
  // Fallback to Gmail
  if (process.env.GMAIL_USER && process.env.GMAIL_PASS && process.env.GMAIL_PASS !== 'your_app_password_here') {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });
  }
  return null;
};

// Email sending function optimized for Heroku
const sendNotificationEmail = async (subject, htmlContent, formData) => {
  // Try SendGrid (Heroku add-on auto-configures SENDGRID_API_KEY)
  const sendgridKey = process.env.SENDGRID_API_KEY || process.env.SENDGRID_PASSWORD;
  
  if (sendgridKey && sendgridKey !== 'your_sendgrid_api_key_here' && sendgridKey !== 'placeholder_for_heroku' && !sendgridKey.includes('${')) {
    sgMail.setApiKey(sendgridKey);
    
    try {
      // Determine recipient based on email type
      let recipientEmail = 'paul@seekon.ai'; // Your main inbox
      let fromEmail = 'noreply@seekon.ai';
      
      // Route different form types to different addresses
      if (subject.includes('TRANSFORMATION LEAD')) {
        recipientEmail = 'sales@seekon.ai';
        fromEmail = 'sales@seekon.ai';
      } else if (subject.includes('CONSULTATION REQUEST')) {
        recipientEmail = 'infoai@seekon.ai';  // Testing if this email exists
        fromEmail = 'noreply@seekon.ai';
      } else if (subject.includes('CONTACT FORM')) {
        recipientEmail = 'contact@seekon.ai';
        fromEmail = 'contact@seekon.ai';
      }

      const msg = {
        to: recipientEmail,
        from: {
          email: fromEmail,
          name: 'SeekON AI Platform'
        },
        subject: subject,
        html: htmlContent,
        replyTo: formData.email || fromEmail,
        trackingSettings: {
          clickTracking: { enable: true },
          openTracking: { enable: true }
        }
      };

      const result = await sgMail.send(msg);
      console.log('✅ Email sent via SendGrid (Heroku) successfully');
      return { success: true, messageId: result[0].headers['x-message-id'], provider: 'SendGrid-Heroku' };
    } catch (error) {
      console.error('❌ SendGrid email failed:', error.response?.body || error.message);
    }
  }

  // Fallback to Gmail SMTP
  const transporter = createTransporter();
  
  if (!transporter) {
    console.log('⚠️ No email service configured - need SendGrid API key or Gmail App Password');
    return { success: false, message: 'Email not configured' };
  }

  try {
    // Gmail fallback routing  
    let recipientEmail = 'paul@seekon.ai';
    if (subject.includes('TRANSFORMATION LEAD')) {
      recipientEmail = 'sales@seekon.ai';
    } else if (subject.includes('CONSULTATION REQUEST')) {
      recipientEmail = 'infoai@seekon.ai';  // Testing if this email exists
    } else if (subject.includes('CONTACT FORM')) {
      recipientEmail = 'contact@seekon.ai';
    }

    const fromEmail = process.env.HOSTINGER_USER || process.env.GMAIL_USER;
    const mailOptions = {
      from: `"SeekON AI" <${fromEmail}>`,
      to: recipientEmail,
      subject: subject,
      html: htmlContent,
      text: htmlContent.replace(/<[^>]*>/g, ''), // Add plain text version
      replyTo: formData.email || fromEmail
    };

    const result = await transporter.sendMail(mailOptions);
    const provider = process.env.HOSTINGER_USER ? 'Hostinger' : 'Gmail';
    console.log(`✅ Email sent via ${provider} successfully:`, result.messageId);
    return { success: true, messageId: result.messageId, provider: provider };
  } catch (error) {
    console.error('❌ Gmail email sending failed:', error.message);
    return { success: false, error: error.message };
  }
};

// API endpoint to add email to Google Sheet with rate limiting
app.post('/api/add-email', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const spreadsheetId = process.env.REACT_APP_SPREADSHEET_ID;
    const timestamp = new Date().toISOString();
    
    // First, check existing usage count for this email
    console.log('Checking email usage count for:', email);
    
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:C'
    });
    
    const rows = existingData.data.values || [];
    const emailCount = rows.filter(row => row[0] && row[0].toLowerCase() === email.toLowerCase()).length;
    
    console.log(`Email ${email} has been used ${emailCount} times`);
    
    // Check if email has exceeded 5 uses
    if (emailCount >= 5) {
      console.log(`Rate limit exceeded for email: ${email}`);
      return res.status(429).json({ 
        error: 'Rate limit exceeded',
        message: `This email has already been used ${emailCount} times. Maximum 5 uses allowed.`,
        usageCount: emailCount,
        maxUsage: 5
      });
    }
    
    // If under limit, add new entry
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:C',
      valueInputOption: 'RAW',
      resource: {
        values: [[email, timestamp, 'Free Evaluation Request']]
      }
    });

    console.log(`Email added to Google Sheet: ${email} (usage count: ${emailCount + 1})`);
    
    res.json({ 
      success: true, 
      data: { 
        email, 
        timestamp, 
        stored: 'google_sheet',
        usageCount: emailCount + 1,
        remainingUses: 4 - emailCount,
        note: `Email successfully added to Google Sheet. Usage: ${emailCount + 1}/5` 
      } 
    });

  } catch (error) {
    console.error('Error adding email to Google Sheet:', error);
    res.status(500).json({ 
      error: 'Failed to add email to Google Sheet',
      details: error.message 
    });
  }
});

// Transformation lead capture endpoint
app.post('/api/transformation-lead', async (req, res) => {
  try {
    const leadData = req.body;
    
    console.log('🚀 NEW TRANSFORMATION LEAD RECEIVED:', {
      company: leadData.company,
      email: leadData.email,
      goal: leadData.mainGoal,
      budget: leadData.budget,
      timestamp: leadData.timestamp
    });

    // Add to Google Sheets with fallback to main sheet if TransformationLeads doesn't exist
    const rows = [[
      leadData.timestamp,
      leadData.name,
      leadData.email,
      leadData.company,
      leadData.website || '',
      leadData.phone || '',
      leadData.currentTraffic || '',
      leadData.mainGoal || '',
      leadData.timeline || '',
      leadData.budget || '',
      leadData.additionalInfo || '',
      'TRANSFORMATION LEAD - ' + (leadData.source || 'SEEKON.AI Form')
    ]];

    try {
      // Try to write to TransformationLeads sheet first
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.REACT_APP_SPREADSHEET_ID,
        range: 'TransformationLeads!A:L',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: rows
        }
      });
      console.log('✅ Lead saved to TransformationLeads sheet successfully');
    } catch (sheetError) {
      console.log('⚠️ TransformationLeads sheet not found, trying main Sheet1...');
      // Fallback to main sheet if TransformationLeads doesn't exist
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.REACT_APP_SPREADSHEET_ID,
        range: 'Sheet1!A:L',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: rows
        }
      });
      console.log('✅ Lead saved to Sheet1 successfully as fallback');
    }

    // Send email notification
    const emailSubject = `🚀 NEW TRANSFORMATION LEAD - ${leadData.company}`;
    const emailContent = `
      <h2>New Transformation Lead Received</h2>
      <p><strong>Timestamp:</strong> ${leadData.timestamp}</p>
      <p><strong>Name:</strong> ${leadData.name}</p>
      <p><strong>Email:</strong> ${leadData.email}</p>
      <p><strong>Company:</strong> ${leadData.company}</p>
      <p><strong>Website:</strong> ${leadData.website || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${leadData.phone || 'Not provided'}</p>
      <p><strong>Current Traffic:</strong> ${leadData.currentTraffic || 'Not specified'}</p>
      <p><strong>Main Goal:</strong> ${leadData.mainGoal || 'Not specified'}</p>
      <p><strong>Timeline:</strong> ${leadData.timeline || 'Not specified'}</p>
      <p><strong>Budget:</strong> ${leadData.budget || 'Not specified'}</p>
      <p><strong>Additional Info:</strong> ${leadData.additionalInfo || 'None provided'}</p>
      <p><strong>Source:</strong> ${leadData.source || 'SEEKON.AI Form'}</p>
      <hr>
      <p><em>This lead has been automatically saved to Google Sheets.</em></p>
    `;

    const emailResult = await sendNotificationEmail(emailSubject, emailContent, leadData);
    console.log('📧 Email notification result:', emailResult.success ? 'Sent' : 'Failed');

    res.json({ 
      success: true, 
      message: 'Transformation request submitted successfully! We will contact you within 24 hours.',
      leadId: Date.now(),
      notification: 'Lead saved to Google Sheets - watchdogpedro@gmail.com will be notified',
      emailSent: emailResult.success
    });

  } catch (error) {
    console.error('❌ Error processing transformation lead:', error);
    console.error('Error details:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing request. Please try again or email watchdogpedro@gmail.com directly.',
      debug: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Consultation request endpoint
app.post('/api/consultation-request', async (req, res) => {
  try {
    const consultationData = req.body;
    
    console.log('📞 NEW CONSULTATION REQUEST RECEIVED:', {
      company: consultationData.companyName,
      name: consultationData.name,
      email: consultationData.email,
      phone: consultationData.phoneNumber,
      marketStudyOnly: consultationData.marketStudyOnly,
      timestamp: consultationData.timestamp
    });

    // Add to Google Sheets with fallback to main sheet
    const rows = [[
      consultationData.timestamp,
      consultationData.companyName || '',
      consultationData.name,
      consultationData.email,
      consultationData.phoneNumber,
      consultationData.projectInterest || '',
      consultationData.marketStudyOnly ? 'Yes' : 'No',
      'CONSULTATION REQUEST - ' + (consultationData.source || 'SEEKON.AI Consultation Form')
    ]];

    try {
      // Try ConsultationRequests sheet first
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.REACT_APP_SPREADSHEET_ID,
        range: 'ConsultationRequests!A:H',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: rows
        }
      });
      console.log('✅ Consultation request saved to ConsultationRequests sheet successfully');
    } catch (sheetError) {
      console.log('⚠️ ConsultationRequests sheet not found, trying main Sheet1...');
      // Fallback to main sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.REACT_APP_SPREADSHEET_ID,
        range: 'Sheet1!A:H',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: rows
        }
      });
      console.log('✅ Consultation request saved to Sheet1 successfully as fallback');
    }

    // Send email notification
    const emailSubject = `📞 NEW CONSULTATION REQUEST - ${consultationData.companyName || consultationData.name}`;
    const emailContent = `
      <h2>New Consultation Request Received</h2>
      <p><strong>Timestamp:</strong> ${consultationData.timestamp}</p>
      <p><strong>Company:</strong> ${consultationData.companyName || 'Not provided'}</p>
      <p><strong>Name:</strong> ${consultationData.name}</p>
      <p><strong>Email:</strong> ${consultationData.email}</p>
      <p><strong>Phone:</strong> ${consultationData.phoneNumber}</p>
      <p><strong>Project Interest:</strong> ${consultationData.projectInterest || 'Not specified'}</p>
      <p><strong>Market Study Only:</strong> ${consultationData.marketStudyOnly ? 'Yes' : 'No'}</p>
      <p><strong>Source:</strong> ${consultationData.source || 'SEEKON.AI Consultation Form'}</p>
      <hr>
      <p><em>This consultation request has been automatically saved to Google Sheets.</em></p>
    `;

    const emailResult = await sendNotificationEmail(emailSubject, emailContent, consultationData);
    console.log('📧 Email notification result:', emailResult.success ? 'Sent' : 'Failed');

    res.json({ 
      success: true, 
      message: 'Consultation request submitted successfully! We will contact you within 24 hours.',
      requestId: Date.now(),
      notification: 'Request saved to Google Sheets - watchdogpedro@gmail.com will be notified',
      emailSent: emailResult.success
    });

  } catch (error) {
    console.error('❌ Error processing consultation request:', error);
    console.error('Error details:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing request. Please try again or email watchdogpedro@gmail.com directly.',
      debug: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Contact form endpoint
app.post('/api/contact-form', async (req, res) => {
  try {
    const contactData = req.body;
    
    console.log('💬 NEW CONTACT FORM SUBMISSION RECEIVED:', {
      name: contactData.name,
      email: contactData.email,
      company: contactData.company,
      industry: contactData.industry,
      message: contactData.message?.substring(0, 100) + '...',
      timestamp: contactData.timestamp
    });

    // Add to Google Sheets with fallback to main sheet
    const rows = [[
      contactData.timestamp,
      contactData.name,
      contactData.email,
      contactData.company || '',
      contactData.industry || '',
      contactData.message || '',
      'CONTACT FORM - ' + (contactData.source || 'SEEKON.AI Contact Form')
    ]];

    try {
      // Try ContactForms sheet first
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.REACT_APP_SPREADSHEET_ID,
        range: 'ContactForms!A:G',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: rows
        }
      });
      console.log('✅ Contact form saved to ContactForms sheet successfully');
    } catch (sheetError) {
      console.log('⚠️ ContactForms sheet not found, trying main Sheet1...');
      // Fallback to main sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.REACT_APP_SPREADSHEET_ID,
        range: 'Sheet1!A:G',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: rows
        }
      });
      console.log('✅ Contact form saved to Sheet1 successfully as fallback');
    }

    // Send email notification
    const emailSubject = `💬 NEW CONTACT FORM - ${contactData.name} from ${contactData.company || 'Unknown Company'}`;
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Timestamp:</strong> ${contactData.timestamp}</p>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Company:</strong> ${contactData.company || 'Not provided'}</p>
      <p><strong>Industry:</strong> ${contactData.industry || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #f5f5f5; padding: 15px; border-left: 4px solid #667eea; margin: 10px 0;">
        ${(contactData.message || 'No message provided').replace(/\n/g, '<br>')}
      </div>
      <p><strong>Source:</strong> ${contactData.source || 'SEEKON.AI Contact Form'}</p>
      <hr>
      <p><em>This contact form has been automatically saved to Google Sheets.</em></p>
    `;

    const emailResult = await sendNotificationEmail(emailSubject, emailContent, contactData);
    console.log('📧 Email notification result:', emailResult.success ? 'Sent' : 'Failed');

    res.json({ 
      success: true, 
      message: 'Thanks for connecting! We will get right back to you within 24 hours.',
      submissionId: Date.now(),
      notification: 'Contact form saved to Google Sheets - watchdogpedro@gmail.com will be notified',
      emailSent: emailResult.success
    });

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    console.error('Error details:', error.response?.data || error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing your message. Please try again or email watchdogpedro@gmail.com directly.',
      debug: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Google Sheets API integration enabled');
});