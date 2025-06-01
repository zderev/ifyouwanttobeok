import './App.css'
import TelegramIcon from './TelegramIcon'

function App() {
  return (
    <div className="app">
      {/* Main Content */}
      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          {/* Visual Snow Effect */}
          <div className="visual-snow"></div>
          
          <h1 className="title">ПРОМПРОЕЗД</h1>
          <div className="tagline">тупик, в который <span className="tagline-highlight">хочется въебаться</span></div>
          <div className="subtitle">ELECTRONIC MUSIC EVENT</div>
          <div className="date">08.06.2025</div>
          <div className="venue">Начало в 20:00 </div>
          {/*<div className="hero-details">*/}
          {/*  <div className="venue">Начало в 20:00 </div>*/}
          {/*  <div className="time"></div>*/}
          {/*</div>*/}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="https://t.me/zderev" target="_blank" rel="noopener noreferrer">
            <TelegramIcon />
          </a>
        </div>
        {/* <div className="copyright">© 2024 ПРОМПРОЕЗД</div> */}
      </footer>
    </div>
  )
}

export default App
