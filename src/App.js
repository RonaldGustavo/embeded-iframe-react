import { useState } from 'react';
import './App.css';

function App() {
  const [inputUrl, setInputUrl] = useState('http://localhost:8000/index.php/auth/dashboard/testing125');
  const [iframeUrl, setIframeUrl] = useState('http://localhost:8000/index.php/auth/dashboard/testing125');
  const [iframeUrlNoToken] = useState('http://localhost:8000/index.php/auth/dashboard');

  const handleClearCookies = () => {
    const cookies = document.cookie.split(";");
    // Ambil semua cookies

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
    console.log('All cookies cleared!');
  };

  const handleSearch = () => {
    handleClearCookies();
    setIframeUrl(inputUrl);
  };

  return (
    <div className="App" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', background: '#f1f1f1', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          style={{ flex: 1, padding: '8px', fontSize: '14px' }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Load URL
        </button>
      </div>
      <p>notes: jika: {iframeUrl} maka ke dashboard</p>
      <p>notes: jika: {iframeUrlNoToken} maka ke dashboard</p>

      <div style={{ flex: 1 }}>
        <iframe
          key={iframeUrl}
          src={iframeUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allowFullScreen
          title="Dynamic Iframe"
        />
      </div>
    </div>
  );
}

export default App;
