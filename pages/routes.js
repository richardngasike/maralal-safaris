import Head from 'next/head';
import Link from 'next/link';
import RouteMap from '../components/RouteMap';
import styles from '../styles/Routes.module.css';

const ROUTES_DETAIL = [
  {
    id: 1,
    from: 'Nairobi',
    to: 'Maralal',
    color: '#8B0000',
    duration: '6–8 hrs',
    distance: '350 km',
    departures: 8,
    minFare: 1200,
    stops: ['Thika', 'Nyeri', 'Nanyuki', 'Rumuruti'],
    description: 'Our flagship route connecting Nairobi to the capital of Samburu County. Passes through Mount Kenya\'s scenic foothills and the savanna.',
    highlights: ['Scenic Mount Kenya views', 'Stops at Nyeri market', 'Express option available']
  },
  {
    id: 2,
    from: 'Maralal',
    to: 'Nakuru',
    color: '#1a6b3c',
    duration: '5–7 hrs',
    distance: '280 km',
    departures: 5,
    minFare: 1000,
    stops: ['Nyahururu'],
    description: 'Connects Samburu to the industrial city of Nakuru in the Rift Valley. Beautiful Aberdare escarpment scenery.',
    highlights: ['Aberdare views', 'Via Nyahururu Falls', 'Direct service available']
  },
  {
    id: 3,
    from: 'Nairobi',
    to: 'Nanyuki',
    color: '#b87333',
    duration: '3–4 hrs',
    distance: '195 km',
    departures: 10,
    minFare: 700,
    stops: ['Thika', 'Nyeri'],
    description: 'Fast connection to the gateway town of Mt Kenya. Popular with hikers and tourists visiting the region.',
    highlights: ['A2 highway all the way', 'Connects to Samburu extensions', 'Frequent departures']
  },
  {
    id: 4,
    from: 'Maralal',
    to: 'Isiolo',
    color: '#4a6b8a',
    duration: '4–5 hrs',
    distance: '180 km',
    departures: 4,
    minFare: 700,
    stops: ['Wamba', 'Archer\'s Post'],
    description: 'Serving the nomadic communities of north Kenya, this route crosses through wildlife-rich terrain.',
    highlights: ['Wildlife spotting', 'Serves remote communities', 'Cargo-friendly']
  }
];

export default function Routes() {
  return (
    <>
      <Head>
        <title>Routes | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>Our Routes</h1>
        <p>Connecting communities across Northern Kenya — reliable, safe, and on schedule.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / Routes
      </nav>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Route Network Map</h2>
          <p className="section-subtitle">Interactive overview of all our operating routes</p>
          <div className="gold-divider"></div>
          <RouteMap />
        </div>
      </section>

      <section className={styles.routesSection}>
        <div className="container">
          <h2 className="section-title text-center">All Routes</h2>
          <div className="gold-divider" style={{ margin: '1rem auto 2.5rem' }}></div>
          <div className={styles.routesGrid}>
            {ROUTES_DETAIL.map(route => (
              <div key={route.id} className={styles.routeCard} style={{ '--route-color': route.color }}>
                <div className={styles.routeHeader}>
                  <div>
                    <h3>{route.from} → {route.to}</h3>
                    <div className={styles.routeMeta}>
                      <span>🕐 {route.duration}</span>
                      <span>📏 {route.distance}</span>
                      <span>🚌 {route.departures} daily</span>
                    </div>
                  </div>
                  <div className={styles.routeFare}>
                    <span>From</span>
                    <strong>KES {route.minFare.toLocaleString()}</strong>
                  </div>
                </div>

                <p className={styles.routeDesc}>{route.description}</p>

                <div className={styles.routeStops}>
                  <span className={styles.stopsLabel}>Via:</span>
                  {route.stops.map((s, i) => (
                    <span key={i} className={styles.stopChip}>{s}</span>
                  ))}
                </div>

                <ul className={styles.highlights}>
                  {route.highlights.map((h, i) => (
                    <li key={i}>✓ {h}</li>
                  ))}
                </ul>

                <div className={styles.routeActions}>
                  <Link href="/booking" className={styles.bookBtn}>Book This Route</Link>
                  <Link href="/schedule" className={styles.scheduleBtn}>View Schedule</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>🏁 Terminals</h3>
              <div className={styles.terminal}>
                <strong>Nairobi Terminal</strong>
                <p>Intercity Bus Terminal, Ronald Ngala Street, Nairobi CBD</p>
                <p>Tel: +254 700 123 456</p>
              </div>
              <div className={styles.terminal}>
                <strong>Maralal Terminal</strong>
                <p>Maralal Main Bus Terminus, Samburu County</p>
                <p>Tel: +254 733 456 789</p>
              </div>
              <div className={styles.terminal}>
                <strong>Nakuru Office</strong>
                <p>Nakuru Bus Station, George Morara Road</p>
                <p>Tel: +254 722 789 012</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3>📋 Travel Guidelines</h3>
              <ul className={styles.guideList}>
                <li>Arrive at the terminal <strong>30 minutes</strong> before departure</li>
                <li>Carry a valid <strong>National ID or Passport</strong></li>
                <li>Maximum <strong>30kg</strong> luggage per passenger (express)</li>
                <li>Children under 3 travel <strong>FREE</strong></li>
                <li>No smoking, alcohol, or illegal items on board</li>
                <li>Pets must be transported in approved carriers</li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3>📞 Need Help?</h3>
              <p style={{ color: '#555', marginBottom: '1rem', fontSize: '0.9rem' }}>Our support team is available every day from 5:00 AM to 10:00 PM EAT.</p>
              <div className={styles.contactItems}>
                <div>📞 +254 700 123 456</div>
                <div>📱 WhatsApp: +254 733 456 789</div>
                <div>✉️ routes@maralalsafaris.co.ke</div>
              </div>
              <Link href="/contact" className={styles.contactBtn}>Contact Support</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
