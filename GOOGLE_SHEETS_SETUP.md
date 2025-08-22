# Google Sheets Setup Guide

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Rename it to "SEEKON Email Leads" or similar
4. In the first row, add these headers:
   - Column A: Email
   - Column B: Timestamp
   - Column C: Source
5. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 2: Enable Google Sheets API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

## Step 3: Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key

## Step 4: Make Spreadsheet Public (Read-Only)

1. Open your Google Spreadsheet
2. Click "Share" button
3. Change access to "Anyone with the link can view"
4. This allows the API to read/write to the sheet

## Step 5: Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values:
   ```
   REACT_APP_GOOGLE_SHEETS_API_KEY=your_actual_api_key_here
   REACT_APP_SPREADSHEET_ID=your_actual_spreadsheet_id_here
   ```

## Step 6: Test the Integration

1. Start your development server: `npm start`
2. Navigate to the audit tool page
3. Enter an email and submit
4. Check your Google Spreadsheet to see if the email was added

## Security Notes

- The API key will be visible in your client-side code
- For production, consider using a backend service to handle Google Sheets operations
- Make sure your spreadsheet permissions are set correctly
- Never commit your actual API keys to version control

## Troubleshooting

- If you get a 403 error, check that the Sheets API is enabled
- If you get a 400 error, verify the spreadsheet ID is correct
- Make sure the spreadsheet is publicly accessible with the link