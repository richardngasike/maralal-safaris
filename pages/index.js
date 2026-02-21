import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const STATS = [
  { num: '25+', label: 'Years of Service' },
  { num: '50,000+', label: 'Happy Passengers/Year' },
  { num: '12', label: 'Modern Buses' },
  { num: '8', label: 'Daily Departures' },
];
const FEATURES = [
  { icon: '🛡️', title: 'NTSA Certified', desc: 'All vehicles fully licensed and compliant with Kenya traffic regulations.' },
  { icon: '📱', title: 'M-Pesa Booking', desc: 'Book and pay conveniently via M-Pesa or at any of our terminals.' },
  { icon: '❄️', title: 'Air Conditioned', desc: 'Travel in comfort with climate-controlled express coaches.' },
  { icon: '📦', title: 'Cargo Services', desc: 'Reliable goods transport across all our routes at affordable rates.' },
  { icon: '🔌', title: 'Phone Charging', desc: 'Worried your phone is shutting down? dont worry Maralal Safaris git you sorted.' },
  { icon: '🛜', title: 'Free Wifi', desc: 'Enjoy strong WIFI connection making your journey amazing.' },
];
const TESTIMONIALS = [
  { name: 'Grace Wanjiru', role: 'Regular Commuter, Nyeri', text: 'I travel Nairobi-Nyeri every month and Maralal Safaris is the most reliable. Clean buses, friendly staff, always on time.' },
  { name: 'John Leitoro', role: 'Trader, Maralal', text: 'Their cargo service saved my business. Goods arrive safely and the rates are the best on this route.' },
  { name: 'Dr. Amina Hassan', role: 'Tourist, Samburu', text: 'Excellent service from Nairobi to Samburu. The journey was comfortable and the crew was professional.' },
];
const NEWS = [
  { date: 'Feb 2025', title: 'New Nakuru Route Launched', desc: 'We are excited to announce our expanded service now connecting Samburu to Nakuru directly.' },
  { date: 'Jan 2025', title: 'Fleet Upgrade Complete', desc: 'Three new modern 45-seater coaches have been added to our express fleet.' },
  { date: 'Dec 2024', title: 'Holiday Schedule 2024', desc: 'Special festive season departures added. Book early to secure your seat.' },
];

const HERO_SLIDES = [
  {
    image: '/bus1.jpeg',
    badge: '🌍 Serving Northern Kenya Since 1998',
    titleLine1: 'Welcome to',
    titleGold: 'Maralal Safaris',
    subtitle: 'Your trusted SACCO for safe, comfortable travel between Nairobi, Samburu County, and Nakuru. Over 25 years of reliable service.',
  },
  {
    image: '/image3.jpeg',
    badge: '🚌 Modern Fleet, Maximum Comfort',
    titleLine1: 'Travel in',
    titleGold: 'Style & Safety',
    subtitle: 'Experience Kenya\'s finest landscapes aboard our air-conditioned express coaches with Wi-Fi, phone charging, and a professional crew on every journey.',
  },
  {
    image: '/image2.jpeg',
    badge: '📦 Reliable Cargo & Passenger Services',
    titleLine1: 'Your Goods,',
    titleGold: 'Our Responsibility',
    subtitle: 'From personal parcels to business cargo — we deliver safely and affordably across all our routes, every single day.',
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((activeSlide + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  function handleSlideChange(index) {
    if (index === activeSlide) return;
    setFading(true);
    setTimeout(() => {
      setActiveSlide(index);
      setFading(false);
    }, 500);
  }

  const slide = HERO_SLIDES[activeSlide];

  return (
    <>
      <Head>
        <title>Maralal Safaris SACCO | Nairobi to Samburu & Nakuru</title>
        <meta name="description" content="Kenya's trusted bus service connecting Nairobi to Maralal Samburu and Nakuru. Book online, check schedules and fares." />
      </Head>

      {/* Hero */}
      <section className={styles.hero}>
        {/* Carousel backgrounds — all stacked, only active one visible */}
        <div className={styles.heroBg}>
          {HERO_SLIDES.map((s, i) => (
            <div
              key={i}
              className={`${styles.carouselSlide} ${i === activeSlide ? styles.carouselSlideActive : ''}`}
              style={{ backgroundImage: `url('${s.image}')` }}
            />
          ))}
          <div className={styles.heroBgOverlay}></div>
        </div>

        {/* Content — fades on slide change */}
        <div className={`${styles.heroContent} ${fading ? styles.heroContentFading : ''}`}>
          <div className={styles.heroBadge}>{slide.badge}</div>
          <h1 className={styles.heroTitle}>
            {slide.titleLine1}<br />
            <span className={styles.heroTitleGold}>{slide.titleGold}</span>
          </h1>
          <p className={styles.heroSubtitle}>{slide.subtitle}</p>

          <div className={styles.heroSearch}>
            <div className={styles.searchBox}>
              <div className={styles.searchField}>
                <label>From</label>
                <select defaultValue="">
                  <option value="" disabled>Nairobi CBD</option>
                  <option>Nairobi CBD</option>
                  <option>Maralal</option>
                  <option>Nakuru</option>
                </select>
              </div>
              <div className={styles.searchSwap}>⇄</div>
              <div className={styles.searchField}>
                <label>To</label>
                <select defaultValue="">
                  <option value="" disabled>Select destination...</option>
                  <option>Maralal</option>
                  <option>Nakuru</option>
                  <option>Nanyuki</option>
                  <option>Nyeri</option>
                  <option>Isiolo</option>
                </select>
              </div>
              <div className={styles.searchField}>
                <label>Date</label>
                <input type="date" />
              </div>
              <Link href="/booking" className={styles.searchBtn}>
                🔍 Search Buses
              </Link>
            </div>
          </div>

          <div className={styles.heroLinks}>
            <Link href="/schedule" className={styles.heroLinkPrimary}>View Schedule</Link>
            <Link href="/fares" className={styles.heroLinkSecondary}>Check Fares</Link>
            <Link href="/routes" className={styles.heroLinkSecondary}>Our Routes</Link>
          </div>
        </div>

        {/* Carousel controls */}
        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
          onClick={() => handleSlideChange((activeSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
          onClick={() => handleSlideChange((activeSlide + 1) % HERO_SLIDES.length)}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Dot indicators */}
        <div className={styles.carouselDots}>
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`${styles.carouselDot} ${i === activeSlide ? styles.carouselDotActive : ''}`}
              onClick={() => handleSlideChange(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className={styles.heroScroll}>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          {STATS.map((s, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className={`${styles.features} section`}>
        <div className="container">
          <div className="text-center">
            <div className={styles.sectionTag}>Why Choose Us</div>
            <h2 className="section-title">Travel With Confidence</h2>
            <div className="gold-divider" style={{ margin: '1rem auto 2rem' }}></div>
            <p className="section-subtitle">We are more than a bus service — we are your road family.</p>
          </div>
          <div className={styles.featuresGrid}>
            {FEATURES.map((f, i) => (
              <div key={i} className={`${styles.featureCard} card`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Highlight */}
      <section className={styles.routeHighlight}>
        <div className="container">
          <div className={styles.rhGrid}>
            <div className={styles.rhContent}>
              <div className={styles.sectionTag}>Popular Routes</div>
              <h2>Nairobi ↔ Maralal</h2>
              <div className="gold-divider"></div>
              <p>Our flagship route crosses through the beautiful landscapes of central Kenya into the heart of Samburu County. Experience breathtaking scenery on a journey of approximately 6–8 hours.</p>
              <ul className={styles.rhList}>
                <li>🗓️ <strong>8 departures daily</strong> from both ends</li>
                <li>💺 <strong>45 or 60 seat</strong> coaches available</li>
                <li>⚡ <strong>Express service</strong> in under 6 hours</li>
                <li>💰 <strong>From KES 1,200</strong> per adult</li>
              </ul>
              <Link href="/routes" className={styles.rhBtn}>Explore All Routes →</Link>
            </div>
            <div className={styles.rhMap}>
              <div className={styles.routeVisual}>
                <div className={styles.routeStop}>
                  <div className={styles.stopDot} style={{ background: '#FFD700' }}></div>
                  <div className={styles.stopInfo}>
                    <strong>Nairobi CBD</strong>
                    <span>Ronald Ngala St Terminal</span>
                  </div>
                </div>
                {['Thika', 'Nyeri', 'Nanyuki', 'Rumuruti'].map((stop, i) => (
                  <div key={i} className={styles.routeStop}>
                    <div className={styles.stopLine}></div>
                    <div className={styles.stopDot} style={{ background: '#cc8888', width: '10px', height: '10px' }}></div>
                    <div className={styles.stopInfo}>
                      <span style={{ color: '#888' }}>{stop}</span>
                    </div>
                  </div>
                ))}
                <div className={styles.routeStop}>
                  <div className={styles.stopLine}></div>
                  <div className={styles.stopDot} style={{ background: '#8B0000' }}></div>
                  <div className={styles.stopInfo}>
                    <strong style={{ color: '#8B0000' }}>Maralal</strong>
                    <span>Samburu County HQ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`${styles.testimonials} section`}>
        <div className="container">
          <div className="text-center">
            <div className={styles.sectionTag}>Testimonials</div>
            <h2 className="section-title">What Passengers Say</h2>
            <div className="gold-divider" style={{ margin: '1rem auto 2.5rem' }}></div>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.stars}>★★★★★</div>
                <p>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className={styles.news}>
        <div className="container">
          <div className="text-center">
            <div className={styles.sectionTagDark}>Latest News</div>
            <h2 className={styles.newsSectionTitle}>Updates & Announcements</h2>
            <div className="gold-divider" style={{ margin: '1rem auto 2.5rem' }}></div>
          </div>
          <div className={styles.newsGrid}>
            {NEWS.map((n, i) => (
              <div key={i} className={styles.newsCard}>
                <div className={styles.newsDate}>{n.date}</div>
                <h3>{n.title}</h3>
                <p>{n.desc}</p>
                <a href="#">Read more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready to Travel?</h2>
          <p>Book your seat today and enjoy a comfortable, safe journey across Kenya's finest landscapes.</p>
          <div className={styles.ctaBtns}>
            <Link href="/booking" className={styles.ctaBtn}>Book a Ticket Now 🎫</Link>
            <Link href="/contact" className={styles.ctaBtnOutline}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}