import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

const TEAM = [
  { name: 'James Lemaalo', role: 'Chairman, Board of Directors', since: 'Since 2010' },
  { name: 'Mary Wanjiku', role: 'Chief Executive Officer', since: 'Since 2015' },
  { name: 'Samuel Lopeyok', role: 'Operations Manager', since: 'Since 2012' },
  { name: 'Grace Auma', role: 'Finance Director', since: 'Since 2018' },
  { name: 'David Mungai', role: 'Fleet Manager', since: 'Since 2016' },
  { name: 'Fatuma Abdi', role: 'Customer Relations Manager', since: 'Since 2020' },
];

const MILESTONES = [
  { year: '1998', event: 'Founded by 12 transport entrepreneurs from Samburu County' },
  { year: '2002', event: 'Received official SACCO registration from government' },
  { year: '2006', event: 'Expanded fleet from 3 to 8 buses' },
  { year: '2010', event: 'Launched Samburu-Nakuru route' },
  { year: '2015', event: 'Introduced online booking and M-Pesa payments' },
  { year: '2019', event: 'Won Northern Kenya Best Transport Award' },
  { year: '2022', event: 'Fleet modernisation — added 4 new coaches' },
  { year: '2025', event: 'Serving 50,000+ passengers annually' },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>About Maralal Safaris</h1>
        <p>A community-owned transport cooperative proudly serving northern Kenya since 1998.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / About Us
      </nav>

      {/* Mission */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard} style={{ borderColor: '#8B0000' }}>
              <div className={styles.missionIcon}>🎯</div>
              <h3>Our Mission</h3>
              <p>To provide safe, reliable, affordable, and dignified transport services that connect communities across northern Kenya while empowering members through cooperative ownership.</p>
            </div>
            <div className={styles.missionCard} style={{ borderColor: '#FFD700' }}>
              <div className={styles.missionIcon}>🔭</div>
              <h3>Our Vision</h3>
              <p>To be East Africa's most trusted community transport SACCO, known for excellence in service, safety standards, and positive social impact in the communities we serve.</p>
            </div>
            <div className={styles.missionCard} style={{ borderColor: '#1a6b3c' }}>
              <div className={styles.missionIcon}>💎</div>
              <h3>Our Values</h3>
              <p>Safety first. Community ownership. Transparency. Environmental responsibility. Innovation in service delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <div className="sectionTag" style={{ display: 'inline-block', background: 'rgba(139,0,0,0.1)', color: '#8B0000', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.8rem', fontFamily: 'monospace' }}>Our Story</div>
              <h2 className="section-title">Born From Community Need</h2>
              <div className="gold-divider"></div>
              <p>In 1998, twelve transport entrepreneurs from Samburu County came together with a shared vision: to provide their communities with reliable, dignified transport that they could call their own. What started as three aging buses serving the Nairobi-Maralal route has grown into a fleet of 12 modern coaches carrying over 50,000 passengers annually.</p>
              <p style={{ marginTop: '1rem', color: '#666' }}>As a SACCO (Savings and Credit Cooperative), our members own the business. Every fare paid goes back into improving services, maintaining vehicles, and creating jobs in the communities we serve. We are not just a bus company — we are a movement.</p>
              <p style={{ marginTop: '1rem', color: '#666' }}>Today, we employ over 80 staff directly and support hundreds more through cargo and related services. We are proud partners of the communities of Samburu County and the many towns along our routes.</p>
            </div>

            <div className={styles.timeline}>
              <h3>Our Journey</h3>
              {MILESTONES.map((m, i) => (
                <div key={i} className={styles.milestone}>
                  <div className={styles.milestoneYear}>{m.year}</div>
                  <div className={styles.milestoneLine}></div>
                  <div className={styles.milestoneText}>{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.teamSection}>
        <div className="container">
          <h2 className="section-title text-center">Leadership Team</h2>
          <div className="gold-divider" style={{ margin: '1rem auto 2.5rem' }}></div>
          <div className={styles.teamGrid}>
            {TEAM.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{member.name.split(' ').map(n => n[0]).join('')}</div>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.since}>{member.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className={styles.awards}>
        <div className="container">
          <h2 className="section-title text-center" style={{ color: 'white' }}>Recognition & Certifications</h2>
          <div className="gold-divider" style={{ margin: '1rem auto 2rem' }}></div>
          <div className={styles.awardsGrid}>
            {[
              { icon: '🏆', title: 'Best Transport SACCO', body: 'Northern Kenya, 2019 & 2022' },
              { icon: '✅', title: 'NTSA Certified', body: 'All vehicles fully licensed and inspected' },
              { icon: '🌍', title: 'ISO 9001:2015', body: 'Quality Management Certification' },
              { icon: '🚌', title: 'SafeBoda Safety Partner', body: 'Passenger Safety Excellence Award 2023' },
            ].map((a, i) => (
              <div key={i} className={styles.awardCard}>
                <div className={styles.awardIcon}>{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
