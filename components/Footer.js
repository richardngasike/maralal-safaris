import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // ← added imports
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#0f1932" />
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>Maralal Safaris SACCO</div>
            <p>
              Your trusted transport partner connecting Nairobi to Samburu and beyond since 1998. 
              Safety, comfort, and reliability on every journey.
            </p>

            <div className={styles.socials}>
              <a 
                href="https://facebook.com/maralalsafaris" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <FaFacebookF />
              </a>

              <a 
                href="https://twitter.com/maralalsafaris" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className={styles.socialLink}
              >
                <FaTwitter />
              </a>

              <a 
                href="https://wa.me/254727919990" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className={styles.socialLink}
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/routes">Routes & Map</Link>
            <Link href="/fares">Current Fares</Link>
            <Link href="/schedule">Schedule</Link>
            <Link href="/booking">Book a Ticket</Link>
            <Link href="/fleet">Our Fleet</Link>
          </div>

          <div className={styles.col}>
            <h4>Information</h4>
            <Link href="/about">About Us</Link>
            <Link href="/safety">Safety Policy</Link>
            <Link href="/cargo">Cargo Services</Link>
            <Link href="/membership">SACCO Membership</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <p>📍 Maralal Bus Terminal<br />Ronald Ngala St, Nairobi CBD</p>
            <p>📞 +254 727 919 990<br />+254 727 919 990</p>
            <p>✉️ info@maralalsafaris.co.ke</p>
            <p>🕐 Daily: 5:00AM – 10:00PM</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Maralal Safaris SACCO. All rights reserved.</p>
          <p>Licensed by NTSA Kenya</p>
        </div>
      </div>
    </footer>
  );
}