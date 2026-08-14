const serviceGroups = [
  {
    number: "01",
    title: "Travel",
    note: "From departure to arrival",
    items: ["Commercial flights", "Private jet charter", "Train bookings", "Meet & assist", "Visa support"],
    image: "/images/private-aviation.jpg",
    alt: "Private aircraft prepared for departure",
  },
  {
    number: "02",
    title: "Stays",
    note: "Selected around you",
    items: ["Hotels", "Private villas", "Serviced residences", "Bespoke itineraries"],
    image: "/images/luxury-stays.jpg",
    alt: "Private residence overlooking the coast",
  },
  {
    number: "03",
    title: "On the ground",
    note: "Every movement coordinated",
    items: ["Chauffeur services", "Airport transfers", "Personal security", "Local arrangements"],
    image: "/images/chauffeur.jpg",
    alt: "Chauffeured car awaiting a guest",
  },
  {
    number: "04",
    title: "Lifestyle",
    note: "Personal requests, handled",
    items: ["Dining reservations", "Lifestyle requests", "Butler services", "24/7 personal support"],
    image: "/images/dining.jpg",
    alt: "Private dining setting prepared for guests",
  },
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
          <a className="navRequest" href="mailto:am@amconcierge.co">Private request <span>↗</span></a>
        </nav>

        <div className="heroImage" aria-hidden="true" />
        <div className="heroContent">
          <p className="overline">The art of movement · Worldwide</p>
          <h1>Private concierge,<br /><span>wherever you are.</span></h1>
          <p className="heroCopy">Seamless arrangements, discretion and personal attention—carefully coordinated around you.</p>
          <div className="heroActions">
            <a className="lineLink" href="mailto:am@amconcierge.co">Make a private request <span>↗</span></a>
            <a className="lineLink quiet" href="#services">View services <span>↓</span></a>
          </div>
        </div>
        <div className="heroFoot"><span>Riyadh</span><span className="accent">AM / 001</span><span>Worldwide</span></div>
      </section>

      <section className="manifesto" id="about">
        <div className="sectionLabel"><span>01</span> About AM</div>
        <div className="manifestoStatement">
          <p className="overline dark">Private by nature</p>
          <h2>Every detail,<br />considered <em>around you.</em></h2>
        </div>
        <div className="manifestoCopy">
          <p>AM is a private concierge and lifestyle service created for clients who value seamless arrangements, discretion and personal attention.</p>
          <p>From worldwide travel and private aviation to accommodation, transportation, dining, lifestyle requests and personal support, every detail is carefully coordinated around you.</p>
        </div>
        <div className="manifestoImage">
          <img src="/images/lifestyle.jpg" alt="Concierge preparing a private guest experience" />
          <div className="imageCaption"><span>Personal attention</span><span>Worldwide service</span></div>
        </div>
        <div className="signature"><span>AM</span><p>Personal.<br />Discreet.<br />Worldwide.</p></div>
      </section>

      <section className="serviceIndex" id="services">
        <header className="serviceHeader">
          <div className="sectionLabel inverse"><span>02</span> Services</div>
          <div><p className="overline">One point of contact</p><h2>A world of support,<br /><em>quietly connected.</em></h2></div>
          <p>Travel, stays, transport and personal requests brought together through one discreet relationship.</p>
        </header>

        <div className="serviceRows">
          {serviceGroups.map((service) => (
            <article className="serviceRow" key={service.number}>
              <div className="serviceNumber">{service.number}</div>
              <div className="serviceTitle"><h3>{service.title}</h3><p>{service.note}</p></div>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <figure><img src={service.image} alt={service.alt} /></figure>
            </article>
          ))}
        </div>
      </section>

      <section className="supportFeature">
        <div className="supportImage supportImageOne"><img src="/images/meet-assist.jpg" alt="Personal meet and assist on arrival" /></div>
        <div className="supportCopy">
          <div className="sectionLabel"><span>03</span> The AM way</div>
          <p className="overline dark">Present when it matters</p>
          <h2>One message.<br /><em>Everything in motion.</em></h2>
          <p>However simple or complex the request, AM remains a single, trusted point of contact—before, during and after every journey.</p>
          <a className="lineLink darkLink" href="mailto:am@amconcierge.co">Speak with AM <span>↗</span></a>
        </div>
        <div className="supportImage supportImageTwo"><img src="/images/security.jpg" alt="Discreet personal support for a private client" /></div>
      </section>

      <section className="values" aria-label="AM service principles">
        <article><span>01</span><h3>Personal</h3><p>Arrangements shaped around individual preferences, not a standard itinerary.</p></article>
        <article><span>02</span><h3>Discreet</h3><p>Quiet, considered coordination with privacy at the centre of every request.</p></article>
        <article><span>03</span><h3>Worldwide</h3><p>Support that travels with you, across destinations and time zones.</p></article>
      </section>

      <section className="contact" id="contact">
        <div className="contactBrand"><img src="/images/am-logo.png" alt="AM - The Art of Movement" /></div>
        <div className="contactLead">
          <p className="overline">Private concierge, wherever you are</p>
          <h2>How may we<br /><em>assist?</em></h2>
          <a className="contactRequest" href="mailto:am@amconcierge.co"><span>Make a private request</span><b>↗</b></a>
        </div>
        <address>
          <div><span>Email</span><a href="mailto:am@amconcierge.co">am@amconcierge.co</a></div>
          <div><span>Instagram</span><a href="https://instagram.com/amconcierge" target="_blank" rel="noreferrer">@amconcierge ↗</a></div>
          <div><span>WhatsApp</span><p>@amconcierge</p></div>
        </address>
        <footer><span>© 2026 AM Concierge</span><span>Personal · Discreet · Worldwide</span><a href="#home">Back to top ↑</a></footer>
      </section>
    </main>
  );
}
