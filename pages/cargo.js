import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Cargo.module.css';

export default function Cargo() {
  return (
    <>
      <Head>
        <title>Cargo Services | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>Cargo Services</h1>
        <p>Fast, reliable goods transport across all our routes. Track your cargo in real-time.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / Cargo Services
      </nav>

      <section className="section">
        <div className="container">
          <div className={styles.cargoGrid}>
            <div>
              <h2 className="section-title">Ship With Confidence</h2>
              <div className="gold-divider"></div>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Maralal Safaris SACCO offers dependable cargo transport services on all our passenger routes. Whether you're a trader, farmer, or business sending goods between Nairobi, Samburu, and Nakuru — we have you covered.
              </p>

              <div className={styles.cargoFeatures}>
                {[
                  { icon: '⚡', title: 'Same-Day Dispatch', desc: 'Goods sent on morning buses arrive by evening on most routes' },
                  { icon: '📱', title: 'SMS Tracking', desc: 'Receive SMS updates when cargo is dispatched and delivered' },
                  { icon: '🔒', title: 'Insured Goods', desc: 'Optional cargo insurance available at 1% of declared value' },
                  { icon: '🌡️', title: 'Perishables Accepted', desc: 'Refrigerated space available on selected routes' },
                ].map((f, i) => (
                  <div key={i} className={styles.cargoFeatureCard}>
                    <div className={styles.featureIcon}>{f.icon}</div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.cargoRates}>
              <h3>Cargo Rates (per kg)</h3>
              <table className={styles.ratesTable}>
                <thead>
                  <tr>
                    <th>Route</th>
                    <th>Standard</th>
                    <th>Express</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Nairobi – Maralal', 'KES 90', 'KES 130'],
                    ['Nairobi – Nanyuki', 'KES 50', 'KES 75'],
                    ['Maralal – Nakuru', 'KES 75', 'KES 110'],
                    ['Maralal – Isiolo', 'KES 50', 'KES 80'],
                    ['Maralal – Nyahururu', 'KES 55', 'KES 85'],
                  ].map(([route, std, exp], i) => (
                    <tr key={i}>
                      <td>{route}</td>
                      <td>{std}</td>
                      <td><span className={styles.expressRate}>{exp}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.rateNote}>Minimum charge: 1kg. Perishables: +20% surcharge. Items over 200kg: call for quote.</p>
              <Link href="/contact" className={styles.cargoContactBtn}>Get a Custom Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <div className="container">
          <h2 className="section-title text-center" style={{ color: 'white' }}>How It Works</h2>
          <div className="gold-divider" style={{ margin: '1rem auto 2.5rem' }}></div>
          <div className={styles.stepsGrid}>
            {[
              { num: '01', title: 'Drop Off', desc: 'Bring your goods to any of our terminals. We weigh, tag, and issue a receipt.' },
              { num: '02', title: 'We Transport', desc: 'Your cargo travels on the next scheduled bus on your route.' },
              { num: '03', title: 'Notifications', desc: 'SMS alerts sent to both sender and recipient at key stages.' },
              { num: '04', title: 'Collection', desc: 'Recipient collects at the destination terminal with receipt or ID.' },
            ].map((step, i) => (
              <div key={i} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
