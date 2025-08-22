// Direct Google Sheets API integration
export const addEmailToSheet = async (email, timestamp = new Date().toISOString()) => {
  try {
    console.log('Attempting to add email directly to Google Sheet:', email);
    
    // Store in localStorage as backup
    const existingEmails = JSON.parse(localStorage.getItem('seekon_emails') || '[]');
    existingEmails.push({
      email,
      timestamp,
      source: 'Free Evaluation Request'
    });
    localStorage.setItem('seekon_emails', JSON.stringify(existingEmails));
    
    // Submit to our backend API
    const response = await fetch('http://localhost:3001/api/add-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      if (response.status === 429) {
        // Rate limit exceeded
        throw new Error(`RATE_LIMIT: ${result.message || 'This email has been used too many times. Maximum 5 uses allowed.'}`);
      }
      throw new Error(result.error || 'Failed to add email to Google Sheet');
    }
    
    console.log('Successfully added email to Google Sheet');
    console.log('Email also stored locally as backup');
    
    return { 
      success: true, 
      data: { 
        email, 
        timestamp, 
        stored: 'google_sheet_and_local',
        note: 'Email added to Google Sheet and stored locally as backup.' 
      } 
    };
    
  } catch (error) {
    console.error('Error adding email to Google Sheet:', error);
    console.log('Email still stored locally as backup');
    
    return { 
      success: true, // Still return success since we have local backup
      data: { 
        email, 
        timestamp, 
        stored: 'local_only',
        note: 'Google Sheet submission failed, but email stored locally.' 
      } 
    };
  }
};