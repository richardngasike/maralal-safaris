import Head from 'next/head';
import Link from 'next/link';
import BookingForm from '../components/BookingForm';
import styles from '../styles/Booking.module.css';

export default function Booking() {
  return (
    <>
      <Head>
        <title>Book a Ticket | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>Book Your Journey</h1>
        <p>Reserve your seat in minutes. Secure payment via M-Pesa or card.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / Book a Ticket
      </nav>

      <section className="section" style={{ background: '#f5f5f0' }}>
        <div className="container">
          <div className={styles.bookingLayout}>
            <div className={styles.bookingMain}>
              <BookingForm />
            </div>
            <div className={styles.bookingSidebar}>
              <div className={styles.sideCard}>
                <h3> Secure Booking</h3>
                <p>Your personal data is protected with 256-bit SSL encryption.</p>
              </div>
              <div className={styles.sideCard}>
                <h3>📱 M-Pesa Payment</h3>
                <p>Pay via M-Pesa Paybill: <strong>123456</strong><br />Account: Your booking reference</p>
              </div>
              <div className={styles.sideCard}>
                <h3>📞 Need Help?</h3>
                <p>Call <strong>+254 700 123 456</strong><br />or WhatsApp us for booking assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
