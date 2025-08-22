# Google Forms Setup Guide (Easier Alternative)

Since Google Sheets API requires OAuth2 authentication for write operations (which is complex), we'll use Google Forms instead. This automatically creates a Google Sheet with responses.

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com/)
2. Click "Blank" to create a new form
3. Title it "SEEKON Email Leads"

## Step 2: Add Email Field

1. Click on the question field
2. Change question to: "Email Address"
3. Change type to "Short answer"
4. Click "Required" toggle
5. Click "⋮" (three dots) → "Response validation"
6. Choose "Regular expression" → "Email address"

## Step 3: Get Form Submit URL

1. Click "Send" button (top right)
2. Click the link icon (🔗)
3. Copy the form URL - it looks like:
   `https://docs.google.com/forms/d/e/FORM_ID_HERE/viewform`
4. Convert it to submit URL by changing `/viewform` to `/formResponse`

## Step 4: Get Field Entry ID

1. Open your form in a new tab
2. Right-click on the email input field
3. Choose "Inspect Element"
4. Look for `name="entry.XXXXXXXXX"` - copy the numbers after "entry."

## Step 5: Update Code

I'll help you update the code with your Form ID and Entry ID.

## Step 6: View Responses

1. In your Google Form, click "Responses" tab
2. Click the Google Sheets icon to create a spreadsheet
3. All form submissions will automatically appear in this sheet!

## Benefits of Google Forms:
- ✅ No complex authentication needed
- ✅ Automatic spam protection
- ✅ Automatically creates Google Sheet
- ✅ Simple setup
- ✅ Free to use

Once you create the form, share the Form ID and Entry ID with me!