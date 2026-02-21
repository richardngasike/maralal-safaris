import Head from 'next/head';
import Link from 'next/link';
import ScheduleBoard from '../components/ScheduleBoard';
import styles from '../styles/Schedule.module.css';

export default function Schedule() {
  return (
    <>
      <Head>
        <title>Schedule | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>Departure Schedule</h1>
        <p>Live departure times across all our routes. Plan your journey with confidence.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / Schedule
      </nav>

      <section className="section" style={{ background: '#0f1932', paddingBottom: '4rem' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: '#FFD700' }}>Live Departure Board</h2>
          <p className="section-subtitle" style={{ color: '#aab' }}>All times are East Africa Time (EAT / UTC+3)</p>
          <div className="gold-divider"></div>
          <ScheduleBoard />
        </div>
      </section>

      <section className={styles.tips}>
        <div className="container">
          <h2 className="section-title text-center">Travel Tips</h2>
          <div className="gold-divider" style={{ margin: '1rem auto 2rem' }}></div>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>⏰</div>
              <h3>Arrive Early</h3>
              <p>Arrive at the terminal at least 30 minutes before your scheduled departure to ensure smooth boarding.</p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>📱</div>
              <h3>Book in Advance</h3>
              <p>Weekend and holiday seats sell out fast. Reserve online or via M-Pesa at least 24 hours ahead.</p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🆔</div>
              <h3>Carry ID</h3>
              <p>All passengers must carry a valid National ID or passport for verification at boarding.</p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipIcon}>🌧️</div>
              <h3>Weather Delays</h3>
              <p>Northern routes may experience delays during heavy rains. We notify all booked passengers via SMS.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
