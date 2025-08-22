const express = require('express');
const path = require('path');
const cors = require('cors');
const { GoogleAuth } = require('google-auth-library');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Google Sheets API
const auth = new GoogleAuth({
  credentials: process.env.GOOGLE_SERVICE_ACCOUNT_KEY ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY) : require('./google-service-account.json'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

const sheets = google.sheets({ version: 'v4', auth });

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