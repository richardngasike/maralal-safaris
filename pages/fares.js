import Head from 'next/head';
import Link from 'next/link';
import FareTable from '../components/FareTable';
import styles from '../styles/Fares.module.css';

export default function Fares() {
  return (
    <>
      <Head>
        <title>Current Fares | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>Current Fares</h1>
        <p>Transparent, fair pricing across all our routes. No hidden charges.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / Fares
      </nav>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Fare Schedule 2025</h2>
          <div className="gold-divider"></div>
          <FareTable />
        </div>
      </section>

      <section className={styles.policySection}>
        <div className="container">
          <div className={styles.policyGrid}>
            <div className={styles.policyCard}>
              <h3>👶 Children Policy</h3>
              <ul>
                <li>Under 3 years: <strong>FREE</strong> (lap only)</li>
                <li>3–12 years: <strong>50% discount</strong></li>
                <li>13+ years: Full adult fare</li>
              </ul>
            </div>
            <div className={styles.policyCard}>
              <h3>🎓 Student Discount</h3>
              <ul>
                <li>University/College students: <strong>10% off</strong></li>
                <li>Valid student ID required at boarding</li>
                <li>Cannot combine with other offers</li>
              </ul>
            </div>
            <div className={styles.policyCard}>
              <h3>♿ Special Needs</h3>
              <ul>
                <li>PWD passengers: <strong>25% discount</strong></li>
                <li>Valid NCPWD card required</li>
                <li>Priority seating available</li>
              </ul>
            </div>
            <div className={styles.policyCard}>
              <h3>📦 Cargo Rates</h3>
              <ul>
                <li>Charged per kg as listed</li>
                <li>Items over 100kg: call for quote</li>
                <li>Perishables: +20% surcharge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
