import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/routes', label: 'Routes' },
    { href: '/fares', label: 'Fares' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/booking', label: 'Book Ticket' },
    { href: '/fleet', label: 'Our Fleet' },
    { href: '/cargo', label: 'Cargo' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <span>📞 +254 727 919 990</span>
        <span>✉️ info@maralalsafaris.co.ke</span>
        <span>🕐 Mon–Sun: 5:00AM – 10:00PM</span>
      </div>
      <div className={styles.mainNav}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}></span>
          <div>
            <span className={styles.logoTitle}>Maralal Safaris</span>
            <span className={styles.logoSub}>SACCO — Est. 1998</span>
          </div>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${router.pathname === link.href ? styles.active : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booking" className={styles.bookBtn} onClick={() => setMenuOpen(false)}>
            Book Now
          </Link>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`}></span>
        </button>
      </div>
    </header>
  );
}
