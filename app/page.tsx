export default function Home() {
  const services = [
    { n: "01", title: "Private Aviation", label: "Charter · Worldwide", image: "/images/private-aviation.jpg" },
    { n: "02", title: "Luxury Stays", label: "Hotels · Villas · Residences", image: "/images/luxury-stays.jpg" },
    { n: "03", title: "Chauffeur Services", label: "Your drive, your way", image: "/images/chauffeur.jpg" },
    { n: "04", title: "Meet & Assist", label: "Arrival · Departure", image: "/images/meet-assist.jpg" },
    { n: "05", title: "Dining & Lifestyle", label: "Reservations · Experiences", image: "/images/dining.jpg" },
    { n: "06", title: "Personal Support", label: "Every detail, discreetly handled", image: "/images/butler.jpg" },
  ];

  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="AM Concierge home">
            <img src="/images/am-logo.png" alt="AM - The Art of Movement" />
          </a>
          <div className="navLinks">
            <a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a>
          </div>
          <a className="navCta" href="mailto:am@amconcierge.co">Make a request</a>
        </nav>
        <div className="heroImage" aria-hidden="true" /><div className="heroVeil" aria-hidden="true" />
        <div className="heroContent">
          <p className="eyebrow">Private concierge · Worldwide</p>
          <h1>The world,<br /><em>beautifully arranged.</em></h1>
          <p className="heroCopy">Bespoke travel, private aviation and lifestyle support—handled with precision, discretion and a distinctly personal touch.</p>
          <div className="heroActions">
            <a className="button buttonGold" href="mailto:am@amconcierge.co">Begin your journey</a>
            <a className="textLink" href="#services">Explore our world <span>↘</span></a>
          </div>
        </div>
        <div className="heroFoot"><span>Personal</span><i /><span>Discreet</span><i /><span>Worldwide</span></div>
      </section>

      <section className="intro" id="about">
        <div className="sectionMark"><span>01</span><span>About AM</span></div>
        <div className="introCopy">
          <p className="kicker">The art of movement</p>
          <h2>Life should feel<br /><em>effortless.</em></h2>
          <div className="introBody">
            <p>AM is a private concierge and lifestyle service created for clients who value seamless arrangements, discretion and personal attention.</p>
            <p>From worldwide travel and private aviation to accommodation, transportation, dining and personal support, every detail is carefully coordinated around you.</p>
          </div>
        </div>
        <figure className="introImage">
          <img src="/images/lifestyle.jpg" alt="A private concierge preparing a tailored guest experience" />
          <figcaption><span>AM</span> Thoughtful service, without boundaries</figcaption>
        </figure>
      </section>

      <section className="services" id="services">
        <div className="sectionHeading">
          <div className="sectionMark light"><span>02</span><span>Our services</span></div>
          <div><p className="kicker">Curated around you</p><h2>One world.<br /><em>One trusted partner.</em></h2></div>
          <p className="sectionLead">Whatever the destination or request, AM connects the right people, places and details into one seamless experience.</p>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <img src={service.image} alt="" />
              <div className="cardShade" />
              <div className="cardTop"><span>{service.n}</span><span>↗</span></div>
              <div className="cardCopy"><p>{service.label}</p><h3>{service.title}</h3></div>
            </article>
          ))}
        </div>
        <div className="additionalServices" aria-label="Additional services">
          <span>Commercial flights</span><i /><span>Visa assistance</span><i /><span>Rail bookings</span><i /><span>Personal security</span><i /><span>24/7 support</span>
        </div>
      </section>

      <section className="promise">
        <img src="/images/support.jpg" alt="AM Concierge's 24-hour personal support" />
        <div className="promiseShade" />
        <div className="promiseContent">
          <p className="kicker">Wherever you are</p>
          <blockquote>“The luxury is not having more.<br />It is having <em>everything handled.</em>”</blockquote>
          <div className="promisePoints"><span>Private</span><i /><span>Precise</span><i /><span>Always present</span></div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="sectionMark"><span>03</span><span>Our approach</span></div>
        <div className="approachHead"><p className="kicker">Simple by design</p><h2>Consider it<br /><em>already done.</em></h2></div>
        <div className="steps">
          <article><span>01</span><h3>Tell us what you need</h3><p>Share a destination, an idea or simply the outcome you have in mind.</p></article>
          <article><span>02</span><h3>We curate every detail</h3><p>Your dedicated concierge coordinates the right options around your preferences.</p></article>
          <article><span>03</span><h3>You simply enjoy</h3><p>From first confirmation to final arrival, we stay quietly by your side.</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactLogo"><img src="/images/am-logo.png" alt="AM - The Art of Movement" /></div>
        <div className="contactMain">
          <p className="kicker">Private concierge, wherever you are</p>
          <h2>Where shall we<br /><em>begin?</em></h2>
          <a className="contactButton" href="mailto:am@amconcierge.co"><span>Make a private request</span><b>↗</b></a>
        </div>
        <div className="contactDetails">
          <div><span>Email</span><a href="mailto:am@amconcierge.co">am@amconcierge.co</a></div>
          <div><span>Instagram</span><a href="https://instagram.com/amconcierge" target="_blank" rel="noreferrer">@amconcierge ↗</a></div>
          <div><span>WhatsApp</span><p>@amconcierge</p></div>
        </div>
        <footer><span>© 2026 AM Concierge</span><span>Personal · Discreet · Worldwide</span><a href="#home">Back to top ↑</a></footer>
      </section>
    </main>
  );
}
