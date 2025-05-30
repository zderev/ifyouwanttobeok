import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-item">ABOUT</div>
        <div className="nav-item">LINEUP</div>
        <div className="nav-item">TICKETS</div>
      </nav>

      {/* Main Content */}
      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="title">ПРОМПРОЕЗД</h1>
          <div className="subtitle">ELECTRONIC MUSIC EVENT</div>
          <div className="date">15.03.2024 / MOSCOW</div>
          
          <div className="hero-details">
            <div className="venue">WAREHOUSE 23</div>
            <div className="time">22:00 — 06:00</div>
          </div>
        </section>

        {/* Lineup */}
        <section className="lineup">
          <h2 className="section-title">LINEUP</h2>
          <div className="artists">
            <div className="artist main-artist">NINA KRAVIZ</div>
            <div className="artist">JEFF MILLS</div>
            <div className="artist">BEN KLOCK</div>
            <div className="artist">HELENA HAUFF</div>
            <div className="artist">SURGEON</div>
            <div className="artist">DASHA RUSH</div>
          </div>
        </section>

        {/* Info */}
        <section className="info">
          <div className="info-grid">
            <div className="info-block">
              <div className="info-title">LOCATION</div>
              <div className="info-text">
                Warehouse 23<br/>
                Промышленная ул., 15<br/>
                Москва
              </div>
            </div>
            
            <div className="info-block">
              <div className="info-title">TICKETS</div>
              <div className="info-text">
                Early Bird: 2500₽<br/>
                Regular: 3500₽<br/>
                Door: 4500₽
              </div>
            </div>
            
            <div className="info-block">
              <div className="info-title">AGE</div>
              <div className="info-text">
                21+<br/>
                ID Required
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <button className="buy-button">BUY TICKETS</button>
          <div className="contact">INFO@PROMPROEZD.RU</div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <span>INSTAGRAM</span>
          <span>TELEGRAM</span>
          <span>SOUNDCLOUD</span>
        </div>
        <div className="copyright">© 2024 ПРОМПРОЕЗД</div>
      </footer>
    </div>
  )
}

export default App
