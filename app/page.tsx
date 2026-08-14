const services = [
  { code: "01", name: "Travel", detail: "Flights, rail and seamless journeys worldwide." },
  { code: "02", name: "Stays", detail: "Hotels, villas and residences selected around you." },
  { code: "03", name: "Private aviation", detail: "Charter arranged personally, from request to arrival." },
  { code: "04", name: "Transport", detail: "Chauffeur services, transfers and ground coordination." },
  { code: "05", name: "Dining", detail: "Reservations and private dining, wherever you are." },
  { code: "06", name: "Lifestyle", detail: "Personal requests and discreet support, day or night." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="AM Concierge home">
            <img src="/images/am-logo.png" alt="AM - The Art of Movement" />
          </a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="navCta" href="mailto:am@amconcierge.co">Private request</a>
        </nav>
        <img className="poster" src="/images/am-simple-hero.jpg" alt="Everything handled - travel, stays, private aviation, transport, dining and lifestyle" />
        <a className="scrollCue" href="#about">Discover AM <span>↓</span></a>
      </section>

      <section className="about" id="about">
        <div className="label"><span>01</span> About AM</div>
        <div className="aboutLead">
          <p className="eyebrow">Private concierge · Worldwide</p>
          <h1>One relationship.<br /><em>Every detail.</em></h1>
        </div>
        <div className="aboutCopy">
          <p>AM is a private concierge and lifestyle service created for clients who value seamless arrangements, discretion and personal attention.</p>
          <p>From worldwide travel and private aviation to accommodation, transportation, dining and personal support, every detail is carefully coordinated around you.</p>
        </div>
        <div className="principles" aria-label="AM principles">
          <span>Personal</span><i /><span>Discreet</span><i /><span>Worldwide</span>
        </div>
      </section>

      <section className="services" id="services">
        <header>
          <div className="label light"><span>02</span> Services</div>
          <div>
            <p className="eyebrow">At your service</p>
            <h2>From the everyday<br />to the exceptional.</h2>
          </div>
        </header>
        <div className="serviceGrid">
          {services.map((service) => (
            <article key={service.code}>
              <span>{service.code}</span>
              <h3>{service.name}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="label"><span>03</span> Contact</div>
        <div className="contactLead">
          <p className="eyebrow">Private concierge, wherever you are</p>
          <h2>How may we<br /><em>assist?</em></h2>
          <a className="request" href="mailto:am@amconcierge.co"><span>Make a private request</span><b>↗</b></a>
        </div>
        <address>
          <div><span>Email</span><a href="mailto:am@amconcierge.co">am@amconcierge.co</a></div>
          <div><span>Instagram</span><a href="https://instagram.com/amconcierge" target="_blank" rel="noreferrer">@amconcierge ↗</a></div>
          <div><span>WhatsApp</span><p>@amconcierge</p></div>
        </address>
        <footer><span>© 2026 AM Concierge</span><span>The art of movement</span><a href="#home">Back to top ↑</a></footer>
      </section>
    </main>
  );
}
