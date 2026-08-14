export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="AM Concierge home">
            <img src="/images/am-logo.png" alt="AM - The Art of Movement" />
          </a>
          <span className="navNote">Private concierge · Worldwide</span>
          <a className="navCta" href="mailto:am@amconcierge.co">Private request</a>
        </nav>
        <img className="poster" src="/images/am-simple-hero.jpg" alt="Everything handled - AM private concierge services" />
      </section>

      <section className="details" id="details">
        <div className="statement">
          <p className="eyebrow">At your service</p>
          <h1>Personal. Discreet.<br /><em>Worldwide.</em></h1>
        </div>
        <div className="contact" id="contact">
          <a href="mailto:am@amconcierge.co"><small>Email</small><span>am@amconcierge.co</span></a>
          <a href="https://instagram.com/amconcierge" target="_blank" rel="noreferrer"><small>Instagram</small><span>@amconcierge ↗</span></a>
          <a className="request" href="mailto:am@amconcierge.co">Make a private request <span>↗</span></a>
        </div>

        <footer><span>© 2026 AM Concierge</span><span>Riyadh · Worldwide</span><a href="#home">Top ↑</a></footer>
      </section>
    </main>
  );
}
