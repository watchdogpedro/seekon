// Test Google Sheets API connection
const GOOGLE_SHEETS_API_KEY = 'AIzaSyAwJaKgOd_kG2ZB-ImsfhZ78ki-wyI1WW0';
const SPREADSHEET_ID = '1kSeN46w0JB9JlJrfSDL4Sq1o0eG5ed8JCOBoGgDVU5w';

export const testSheetsConnection = async () => {
  try {
    // First, try to read the spreadsheet to test access
    const readUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:C1?key=${GOOGLE_SHEETS_API_KEY}`;
    
    console.log('Testing read access...');
    const readResponse = await fetch(readUrl);
    console.log('Read response status:', readResponse.status);
    
    if (!readResponse.ok) {
      const errorText = await readResponse.text();
      console.error('Read error:', errorText);
      return { success: false, error: `Read failed: ${errorText}` };
    }
    
    const readData = await readResponse.json();
    console.log('Read success:', readData);
    
    // Now try to append data
    const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_API_KEY}`;
    
    console.log('Testing write access...');
    const writeResponse = await fetch(appendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [['test@example.com', new Date().toISOString(), 'API Test']]
      })
    });
    
    console.log('Write response status:', writeResponse.status);
    
    if (!writeResponse.ok) {
      const errorText = await writeResponse.text();
      console.error('Write error:', errorText);
      return { success: false, error: `Write failed: ${errorText}` };
    }
    
    const writeData = await writeResponse.json();
    console.log('Write success:', writeData);
    
    return { success: true, message: 'Both read and write work!' };
    
  } catch (error) {
    console.error('Test error:', error);
    return { success: false, error: error.message };
  }
};