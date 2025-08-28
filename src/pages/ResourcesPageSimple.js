import React from 'react';

const ResourcesPageSimple = () => {
  console.log('ResourcesPageSimple is rendering'); // Debug log
  const resources = [
    {
      id: 1,
      title: "AI Search Guide",
      description: "Complete guide to AI-powered search optimization.",
      icon: "🛰️"
    },
    {
      id: 2,
      title: "Technical Documentation", 
      description: "In-depth technical implementation guide.",
      icon: "📊"
    }
  ];

  const handleClick = (resource) => {
    const content = `
      <html>
        <head><title>${resource.title}</title></head>
        <body style="font-family: Arial; padding: 40px; max-width: 800px; margin: 0 auto;">
          <h1 style="color: #E9424E;">${resource.title}</h1>
          <p>${resource.description}</p>
          <p>This is a sample document showing how the download functionality works.</p>
          <button onclick="window.print()" style="background: #E9424E; color: white; padding: 10px 20px; border: none; border-radius: 5px;">Print</button>
          <button onclick="window.close()" style="background: #666; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin-left: 10px;">Close</button>
        </body>
      </html>
    `;
    
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.write(content);
    newWindow.document.close();
  };

  return (
    <div style={{ padding: '120px 20px', minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Basic test div */}
      <div style={{
        background: 'red',
        color: 'white', 
        padding: '20px',
        textAlign: 'center',
        fontSize: '24px',
        margin: '20px 0'
      }}>
        RESOURCES PAGE IS LOADING - TEST
      </div>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem', color: '#E9424E' }}>
          Resources & Downloads
        </h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '2rem' 
        }}>
          {resources.map(resource => (
            <div 
              key={resource.id}
              onClick={() => handleClick(resource)}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                fontSize: '3rem',
                width: '80px',
                height: '80px',
                background: '#E9424E',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {resource.icon}
              </div>
              <div>
                <h3 style={{ color: '#2C3E50', marginBottom: '0.5rem' }}>
                  {resource.title}
                </h3>
                <p style={{ color: '#666', margin: '0' }}>
                  {resource.description}
                </p>
                <p style={{ color: '#E9424E', fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                  📄 Click to open PDF
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPageSimple;