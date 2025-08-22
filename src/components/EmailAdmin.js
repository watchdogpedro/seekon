import React, { useState, useEffect } from 'react';

const EmailAdmin = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    loadEmails();
  }, []);

  const loadEmails = () => {
    const storedEmails = JSON.parse(localStorage.getItem('seekon_emails') || '[]');
    setEmails(storedEmails.reverse()); // Show newest first
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Email', 'Timestamp', 'Source'],
      ...emails.map(item => [item.email, item.timestamp, item.source])
    ]
    .map(row => row.join(','))
    .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seekon-emails-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const clearEmails = () => {
    if (window.confirm('Are you sure you want to clear all stored emails?')) {
      localStorage.removeItem('seekon_emails');
      setEmails([]);
    }
  };

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '20px auto', 
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>📧 Email Leads ({emails.length})</h2>
        <div>
          <button 
            onClick={exportToCSV}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              marginRight: '10px',
              cursor: 'pointer'
            }}
          >
            📥 Export CSV
          </button>
          <button 
            onClick={loadEmails}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              marginRight: '10px',
              cursor: 'pointer'
            }}
          >
            🔄 Refresh
          </button>
          <button 
            onClick={clearEmails}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            🗑️ Clear All
          </button>
        </div>
      </div>

      {emails.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
          No emails captured yet. Submit an email through the audit tool to see it here.
        </p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            border: '1px solid #ddd'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Email</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Date & Time</th>
                <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Source</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((email, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>
                    {email.email}
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    {new Date(email.timestamp).toLocaleString()}
                  </td>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                    <span style={{
                      padding: '4px 8px',
                      backgroundColor: '#e3f2fd',
                      color: '#1976d2',
                      borderRadius: '12px',
                      fontSize: '12px'
                    }}>
                      {email.source}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ 
        marginTop: '20px', 
        padding: '15px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '5px',
        fontSize: '14px',
        color: '#666'
      }}>
        <strong>📝 Note:</strong> Emails are currently stored in browser localStorage. 
        Use "Export CSV" to download them and import into Google Sheets, or set up Google Forms integration for automatic sync.
      </div>
    </div>
  );
};

export default EmailAdmin;