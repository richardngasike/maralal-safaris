import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Membership.module.css';

export default function Membership() {
  const [applied, setApplied] = useState(false);

  return (
    <>
      <Head>
        <title>SACCO Membership | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>Join the SACCO</h1>
        <p>Become a member-owner of Maralal Safaris. Share in profits, vote on decisions, grow together.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / SACCO Membership
      </nav>

      <section className="section">
        <div className="container">
          <div className={styles.introGrid}>
            <div>
              <h2 className="section-title">Why Join Our SACCO?</h2>
              <div className="gold-divider"></div>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                Maralal Safaris SACCO is a member-owned cooperative. As a member, you don't just ride our buses — you own a piece of the company. Members enjoy dividends, voting rights, savings schemes, and loans.
              </p>
            </div>
            <div className={styles.statsBox}>
              <div className={styles.memberStat}>
                <strong>240+</strong>
                <span>Active Members</span>
              </div>
              <div className={styles.memberStat}>
                <strong>KES 18M</strong>
                <span>Total Assets</span>
              </div>
              <div className={styles.memberStat}>
                <strong>12%</strong>
                <span>Avg Dividend (2024)</span>
              </div>
            </div>
          </div>

          <div className={styles.benefitsGrid}>
            {[
              { icon: '💰', title: 'Annual Dividends', desc: 'Share in SACCO profits distributed annually based on your shareholding.' },
              { icon: '🗳️', title: 'Voting Rights', desc: 'One member, one vote. Have your say in how the SACCO is run.' },
              { icon: '💳', title: 'SACCO Loans', desc: 'Access affordable loans at 1% monthly interest, secured by your savings.' },
              { icon: '🎫', title: 'Travel Discounts', desc: 'Members enjoy 15% discount on all regular bus fares.' },
              { icon: '📈', title: 'Savings Growth', desc: 'Your savings earn 8% interest per annum, higher than most banks.' },
              { icon: '🤝', title: 'Community', desc: 'Be part of a network of transport entrepreneurs across northern Kenya.' },
            ].map((b, i) => (
              <div key={i} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.joinSection}>
        <div className="container">
          <div className={styles.joinGrid}>
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#FFD700', marginBottom: '0.5rem' }}>Membership Requirements</h2>
              <div style={{ width: 60, height: 4, background: '#FFD700', marginBottom: '1.5rem', borderRadius: 2 }}></div>
              <ul className={styles.requireList}>
                <li>Kenyan citizen aged 18 or above</li>
                <li>Valid National ID or Passport</li>
                <li>Registration fee: <strong>KES 1,000</strong> (one-time)</li>
                <li>Minimum shares: <strong>KES 5,000</strong></li>
                <li>Monthly contributions: <strong>from KES 500</strong></li>
                <li>Two passport photos</li>
                <li>Completed application form</li>
              </ul>
              <div style={{ marginTop: '1.5rem', color: '#aab', fontSize: '0.85rem' }}>
                📋 Applications are reviewed monthly. Approved members receive their membership certificate within 30 days.
              </div>
            </div>
            <div>
              {applied ? (
                <div className={styles.successCard}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3>Application Received!</h3>
                  <p>We will contact you at your provided number within 5 business days. Welcome to the Maralal Safaris family!</p>
                </div>
              ) : (
                <div className={styles.applyForm}>
                  <h3>Apply for Membership</h3>
                  <input type="text" placeholder="Full Name *" className={styles.input} />
                  <input type="tel" placeholder="Phone Number *" className={styles.input} />
                  <input type="email" placeholder="Email Address" className={styles.input} />
                  <input type="text" placeholder="National ID Number *" className={styles.input} />
                  <input type="text" placeholder="County of Residence *" className={styles.input} />
                  <select className={styles.input}>
                    <option value="">Interested in contributing...</option>
                    <option>KES 500/month</option>
                    <option>KES 1,000/month</option>
                    <option>KES 2,000/month</option>
                    <option>KES 5,000+/month</option>
                  </select>
                  <button className={styles.applyBtn} onClick={() => setApplied(true)}>
                    Submit Application →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
