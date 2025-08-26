
import { useState } from 'react';
import './App.css';

function App() {
  const [inputUrl, setInputUrl] = useState('http://localhost:8000/index.php/auth/dashboard/testing125');
  const [iframeUrl, setIframeUrl] = useState('http://localhost:8000/index.php/auth/dashboard/testing125');

  const handleSearch = () => {
    setIframeUrl(inputUrl);
  };

  return (
    <div className="modern-app-root">
      <nav className="modern-navbar">
        <span className="modern-navbar-title">Embed Iframe Modern UI</span>
      </nav>
      <main className="modern-main-content">
        <div className="modern-form-card">
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className="modern-input"
            placeholder="Enter URL to embed..."
          />
          <button className="modern-btn" onClick={handleSearch}>
            Load URL
          </button>
        </div>
        <div className="modern-iframe-wrapper">
          <iframe
            key={iframeUrl}
            src={iframeUrl}
            className="modern-iframe"
            allowFullScreen
            title="Dynamic Iframe"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
