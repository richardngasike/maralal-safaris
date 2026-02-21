import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Safety.module.css';

export default function Safety() {
  return (
    <>
      <Head>
        <title>Safety Policy | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>Safety First</h1>
        <p>Safety is not a priority at Maralal Safaris — it is our core value.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / Safety Policy
      </nav>

      <section className="section">
        <div className="container">
          <div className={styles.safetyContent}>
            <div className={styles.safetyMain}>
              <h2 className="section-title">Our Safety Commitment</h2>
              <div className="gold-divider"></div>
              <p>At Maralal Safaris SACCO, passenger and staff safety is the single most important consideration in everything we do. We operate in compliance with the National Transport and Safety Authority (NTSA) regulations and go beyond minimum standards.</p>

              <h3>Driver Standards</h3>
              <ul className={styles.policyList}>
                <li>All drivers hold valid NTSA professional driving licenses (PSV)</li>
                <li>Mandatory annual medical fitness certificates</li>
                <li>Zero tolerance alcohol and drug policy — random testing conducted</li>
                <li>Maximum continuous driving limit: 5 hours (then mandatory rest break)</li>
                <li>Defensive driving training every 2 years</li>
                <li>Drivers cannot accept payment — cashless protocol on board</li>
              </ul>

              <h3>Vehicle Safety</h3>
              <ul className={styles.policyList}>
                <li>Full NTSA vehicle inspection bi-annually</li>
                <li>Internal mechanical inspection before every trip</li>
                <li>GPS tracking on all vehicles — live monitored from head office</li>
                <li>Speed governors: maximum 100 km/h on highways</li>
                <li>Fire extinguishers in engine compartment, passenger cabin, and driver area</li>
                <li>Emergency exit hammers fitted in all windows</li>
                <li>First aid kits maintained and checked monthly</li>
              </ul>

              <h3>Passenger Responsibilities</h3>
              <ul className={styles.policyList}>
                <li>Remain seated when the bus is in motion</li>
                <li>Seatbelts must be worn at all times where fitted</li>
                <li>No standing passengers on express coaches</li>
                <li>No alcohol, smoking, or illegal substances on board</li>
                <li>Cooperate with driver and crew instructions</li>
              </ul>

              <h3>Emergency Procedures</h3>
              <p>In an emergency, passengers should:</p>
              <ol className={styles.emergencyList}>
                <li>Remain calm and follow crew instructions</li>
                <li>Use window hammers to break glass if exits are blocked</li>
                <li>Proceed to the nearest emergency exit</li>
                <li>Call <strong>999</strong> (Police) or <strong>0800 723 007</strong> (NTSA emergency line)</li>
                <li>Contact us at <strong>+254 700 123 456</strong></li>
              </ol>
            </div>

            <div className={styles.safetySidebar}>
              <div className={styles.certCard}>
                <h3>Our Certifications</h3>
                <div className={styles.cert}><span>✅</span> NTSA PSV License</div>
                <div className={styles.cert}><span>✅</span> ISO 9001:2015</div>
                <div className={styles.cert}><span>✅</span> SafeBoda Partner</div>
                <div className={styles.cert}><span>✅</span> Kenya Insurance</div>
              </div>
              <div className={styles.emergencyCard}>
                <h3>🚨 Emergency Contacts</h3>
                <div className={styles.emergContact}>
                  <strong>Maralal Safaris 24hr</strong>
                  <a href="tel:+254700123456">+254 700 123 456</a>
                </div>
                <div className={styles.emergContact}>
                  <strong>Kenya Police</strong>
                  <a href="tel:999">999</a>
                </div>
                <div className={styles.emergContact}>
                  <strong>NTSA Emergency</strong>
                  <a href="tel:0800723007">0800 723 007</a>
                </div>
                <div className={styles.emergContact}>
                  <strong>Ambulance</strong>
                  <a href="tel:0800 723 253">0800 723 253</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
