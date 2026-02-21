import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>Our team is available 7 days a week. We're here to help with bookings, cargo, and queries.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / Contact
      </nav>

      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>

            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <div className="gold-divider"></div>

              <div className={styles.infoBlocks}>
                <div className={styles.infoBlock}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <h4>Head Office</h4>
                    <p>Intercity Bus Terminal, Ronald Ngala Street<br />Nairobi CBD, Kenya</p>
                  </div>
                </div>
                <div className={styles.infoBlock}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <h4>Maralal Office</h4>
                    <p>Main Bus Terminus, Maralal<br />Samburu County, Kenya</p>
                  </div>
                </div>
                <div className={styles.infoBlock}>
                  <div className={styles.infoIcon}>📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+254 700 123 456 (Main)<br />+254 733 456 789 (Maralal)<br />+254 722 789 012 (Nakuru)</p>
                  </div>
                </div>
                <div className={styles.infoBlock}>
                  <div className={styles.infoIcon}>✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>info@maralalsafaris.co.ke<br />bookings@maralalsafaris.co.ke<br />cargo@maralalsafaris.co.ke</p>
                  </div>
                </div>
                <div className={styles.infoBlock}>
                  <div className={styles.infoIcon}>🕐</div>
                  <div>
                    <h4>Operating Hours</h4>
                    <p>Monday – Sunday: 5:00 AM – 10:00 PM EAT</p>
                  </div>
                </div>
                <div className={styles.infoBlock}>
                  <div className={styles.infoIcon}>💬</div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+254 700 123 456<br />(Instant responses during business hours)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <h2>Send Us a Message</h2>
              <div className="gold-divider"></div>

              {sent ? (
                <div className={styles.successMsg}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will respond within 24 hours.</p>
                  <button onClick={() => setSent(false)} className={styles.newMsgBtn}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <label>Full Name *</label>
                      <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your full name" />
                    </div>
                    <div className={styles.field}>
                      <label>Phone Number</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="07XX XXX XXX" />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label>Email Address *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
                  </div>
                  <div className={styles.field}>
                    <label>Subject *</label>
                    <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}>
                      <option value="">Select subject...</option>
                      <option>Booking Inquiry</option>
                      <option>Cargo Services</option>
                      <option>Lost & Found</option>
                      <option>Complaint</option>
                      <option>SACCO Membership</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label>Message *</label>
                    <textarea required rows="5" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn}>Send Message 📨</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className={styles.mapSection}>
        <div className={styles.mapEmbed}>
          <div className={styles.mapInner}>
            <div className={styles.mapPin}>📍</div>
            <h3>Nairobi Intercity Terminal</h3>
            <p>Ronald Ngala Street, Nairobi CBD</p>
            <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.5rem' }}>Open in Google Maps for directions</p>
          </div>
        </div>
      </section>
    </>
  );
}
