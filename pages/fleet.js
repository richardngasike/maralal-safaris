import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Fleet.module.css';

const FLEET = [
  {
    name: 'Samburu Express',
    model: 'Scania Touring HD',
    year: 2022,
    seats: 45,
    ac: true,
    wifi: true,
    usb: true,
    type: 'express',
    routes: ['Nairobi – Maralal Express'],
    features: ['Reclining seats', 'Individual reading lights', 'Overhead bins', 'Onboard lavatory'],
  },
  {
    name: 'Nairobi Star',
    model: 'Yutong ZK6122H',
    year: 2021,
    seats: 60,
    ac: true,
    wifi: false,
    usb: true,
    type: 'regular',
    routes: ['Nairobi – Maralal Regular'],
    features: ['Comfortable seating', 'Large luggage hold', 'PA system'],
  },
  {
    name: 'Rift Valley Cruiser',
    model: 'Higer KLQ6129',
    year: 2023,
    seats: 45,
    ac: true,
    wifi: true,
    usb: true,
    type: 'express',
    routes: ['Maralal – Nakuru'],
    features: ['Panoramic windows', 'Reclining seats', 'USB charging ports'],
  },
  {
    name: 'Northern Pioneer',
    model: 'Rosa Bus MB',
    year: 2020,
    seats: 33,
    ac: true,
    wifi: false,
    usb: false,
    type: 'rural',
    routes: ['Maralal – Baragoi', 'Maralal – Isiolo'],
    features: ['4WD capability', 'High clearance', 'Extended cargo space'],
  },
  {
    name: 'Mount Kenya Rider',
    model: 'Yutong ZK6100',
    year: 2021,
    seats: 60,
    ac: true,
    wifi: false,
    usb: true,
    type: 'regular',
    routes: ['Nairobi – Nanyuki'],
    features: ['Standard seating', 'Luggage hold', 'Daily schedule'],
  },
  {
    name: 'Samburu Heritage',
    model: 'Scania K360IB',
    year: 2019,
    seats: 50,
    ac: true,
    wifi: false,
    usb: false,
    type: 'regular',
    routes: ['Nairobi – Maralal Regular', 'Reserve'],
    features: ['Reliable workhorse', 'Large hold for cargo'],
  },
];

export default function Fleet() {
  return (
    <>
      <Head>
        <title>Our Fleet | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>Our Fleet</h1>
        <p>12 modern, well-maintained coaches serving our routes. Safety and comfort are our priority.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / Our Fleet
      </nav>

      <section className="section" style={{ background: '#f5f5f0' }}>
        <div className="container">
          <h2 className="section-title">Our Vehicles</h2>
          <p className="section-subtitle">All vehicles undergo NTSA-mandated inspection every 6 months.</p>
          <div className="gold-divider"></div>
          <div className={styles.fleetGrid}>
            {FLEET.map((bus, i) => (
              <div key={i} className={`${styles.busCard} ${styles[bus.type]}`}>
                <div className={styles.busHeader}>
                  <div>
                    <h3>{bus.name}</h3>
                    <p className={styles.model}>{bus.model} ({bus.year})</p>
                  </div>
                  <span className={`${styles.typeBadge} ${styles['badge_' + bus.type]}`}>
                    {bus.type === 'express' ? '⚡ Express' : bus.type === 'rural' ? '🏔️ Rural' : '🚌 Regular'}
                  </span>
                </div>

                <div className={styles.busVisual}>
                  <div className={styles.busIllustration}>
                    <div className={styles.busBody}>
                      <div className={styles.busWindows}>
                        {Array.from({ length: 6 }).map((_, w) => (
                          <div key={w} className={styles.window}></div>
                        ))}
                      </div>
                      <div className={styles.busDoor}></div>
                    </div>
                    <div className={styles.busWheels}>
                      <div className={styles.wheel}></div>
                      <div className={styles.wheel}></div>
                    </div>
                  </div>
                </div>

                <div className={styles.busSpecs}>
                  <div className={styles.spec}>
                    <span>💺</span><span>{bus.seats} seats</span>
                  </div>
                  <div className={styles.spec}>
                    <span>{bus.ac ? '❄️' : '💨'}</span><span>A/C {bus.ac ? 'Yes' : 'No'}</span>
                  </div>
                  <div className={styles.spec}>
                    <span>{bus.wifi ? '📶' : '📵'}</span><span>WiFi {bus.wifi ? 'Yes' : 'No'}</span>
                  </div>
                  <div className={styles.spec}>
                    <span>{bus.usb ? '🔌' : '🔋'}</span><span>USB {bus.usb ? 'Yes' : 'No'}</span>
                  </div>
                </div>

                <div className={styles.busRoutes}>
                  <p className={styles.routeLabel}>Routes:</p>
                  {bus.routes.map((r, j) => (
                    <span key={j} className={styles.routeTag}>{r}</span>
                  ))}
                </div>

                <ul className={styles.busFeatList}>
                  {bus.features.map((f, j) => (
                    <li key={j}>✓ {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.safetySection}>
        <div className="container">
          <h2 className="section-title text-center" style={{ color: 'white' }}>Vehicle Safety Standards</h2>
          <div className="gold-divider" style={{ margin: '1rem auto 2.5rem' }}></div>
          <div className={styles.safetyGrid}>
            {[
              { icon: '🔧', title: 'Regular Servicing', desc: 'Every vehicle serviced every 10,000 km by certified mechanics.' },
              { icon: '🛡️', title: 'NTSA Inspection', desc: 'Bi-annual government vehicle inspection compliance.' },
              { icon: '📷', title: 'CCTV Cameras', desc: 'All express coaches fitted with onboard security cameras.' },
              { icon: '🚨', title: 'Speed Limiters', desc: 'GPS-tracked speed limiters capped at 100 km/h on highway.' },
              { icon: '🧯', title: 'Fire Extinguishers', desc: 'Multiple extinguishers placed in all vehicles.' },
              { icon: '💊', title: 'First Aid Kits', desc: 'Comprehensive first aid kits on every coach.' },
            ].map((s, i) => (
              <div key={i} className={styles.safetyCard}>
                <div className={styles.safetyIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
