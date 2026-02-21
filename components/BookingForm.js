import { useState } from 'react';
import styles from './BookingForm.module.css';

const ROUTES = [
  'Nairobi → Maralal (Express)',
  'Nairobi → Maralal (Regular)',
  'Nairobi → Nyeri',
  'Nairobi → Nanyuki',
  'Nairobi → Rumuruti',
  'Maralal → Nairobi (Express)',
  'Maralal → Nairobi (Regular)',
  'Maralal → Nakuru',
  'Maralal → Isiolo',
  'Maralal → Nyahururu',
];

const STEPS = ['Journey Details', 'Passenger Info', 'Confirmation'];

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    route: '',
    date: '',
    time: '',
    passengers: 1,
    type: 'one-way',
    name: '',
    phone: '',
    email: '',
    idNumber: '',
    luggage: 'none',
    payment: 'mpesa',
  });

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✅</div>
        <h2>Booking Confirmed!</h2>
        <p>Your booking reference is <strong>MRS-{Math.random().toString(36).substr(2,8).toUpperCase()}</strong></p>
        <p>A confirmation SMS will be sent to <strong>{form.phone}</strong></p>
        <p>Please arrive <strong>30 minutes</strong> before departure time.</p>
        <div className={styles.successDetails}>
          <div><span>Route:</span><span>{form.route}</span></div>
          <div><span>Date:</span><span>{form.date}</span></div>
          <div><span>Time:</span><span>{form.time}</span></div>
          <div><span>Passengers:</span><span>{form.passengers}</span></div>
          <div><span>Payment:</span><span>{form.payment === 'mpesa' ? 'M-Pesa' : 'Cash at Terminal'}</span></div>
        </div>
        <button className={styles.newBtn} onClick={() => { setSubmitted(false); setStep(0); setForm({ route: '', date: '', time: '', passengers: 1, type: 'one-way', name: '', phone: '', email: '', idNumber: '', luggage: 'none', payment: 'mpesa' }); }}>
          New Booking
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formWrapper}>
      <div className={styles.steps}>
        {STEPS.map((s, i) => (
          <div key={i} className={`${styles.step} ${i === step ? styles.activeStep : ''} ${i < step ? styles.doneStep : ''}`}>
            <div className={styles.stepNum}>{i < step ? '✓' : i + 1}</div>
            <span>{s}</span>
          </div>
        ))}
      </div>

      <div className={styles.form}>
        {step === 0 && (
          <div className={styles.fields}>
            <h3>Journey Details</h3>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Trip Type</label>
                <div className={styles.radioGroup}>
                  {['one-way', 'return'].map(t => (
                    <label key={t} className={`${styles.radio} ${form.type === t ? styles.radioActive : ''}`}>
                      <input type="radio" value={t} checked={form.type === t} onChange={e => update('type', e.target.value)} />
                      {t === 'one-way' ? '→ One Way' : '↔ Return'}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Route *</label>
                <select value={form.route} onChange={e => update('route', e.target.value)} required>
                  <option value="">Select Route...</option>
                  {ROUTES.map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Travel Date *</label>
                <input type="date" value={form.date} onChange={e => update('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]} required />
              </div>
              <div className={styles.field}>
                <label>Departure Time *</label>
                <select value={form.time} onChange={e => update('time', e.target.value)}>
                  <option value="">Select Time...</option>
                  {['05:30', '07:00', '09:30', '12:00', '14:30', '17:00', '20:00'].map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>No. of Passengers</label>
                <input type="number" min="1" max="15" value={form.passengers}
                  onChange={e => update('passengers', e.target.value)} />
              </div>
              <div className={styles.field}>
                <label>Luggage</label>
                <select value={form.luggage} onChange={e => update('luggage', e.target.value)}>
                  <option value="none">Hand luggage only</option>
                  <option value="small">Small bag (up to 10kg)</option>
                  <option value="large">Large bag (10–30kg)</option>
                  <option value="cargo">Heavy cargo (&gt;30kg)</option>
                </select>
              </div>
            </div>

            <button className={styles.nextBtn} onClick={() => form.route && form.date && form.time ? setStep(1) : alert('Please fill all required fields')}>
              Continue →
            </button>
          </div>
        )}

        {step === 1 && (
          <div className={styles.fields}>
            <h3>Passenger Information</h3>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Full Name *</label>
                <input type="text" placeholder="As on National ID" value={form.name}
                  onChange={e => update('name', e.target.value)} />
              </div>
              <div className={styles.field}>
                <label>Phone Number *</label>
                <input type="tel" placeholder="07XX XXX XXX" value={form.phone}
                  onChange={e => update('phone', e.target.value)} />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Email Address</label>
                <input type="email" placeholder="Optional" value={form.email}
                  onChange={e => update('email', e.target.value)} />
              </div>
              <div className={styles.field}>
                <label>National ID / Passport</label>
                <input type="text" placeholder="ID Number" value={form.idNumber}
                  onChange={e => update('idNumber', e.target.value)} />
              </div>
            </div>

            <div className={styles.field}>
              <label>Payment Method</label>
              <div className={styles.paymentMethods}>
                {[
                  { val: 'mpesa', label: '📱 M-Pesa' },
                  { val: 'cash', label: '💵 Cash at Terminal' },
                  { val: 'card', label: '💳 Debit Card' },
                ].map(p => (
                  <label key={p.val} className={`${styles.payOption} ${form.payment === p.val ? styles.payActive : ''}`}>
                    <input type="radio" value={p.val} checked={form.payment === p.val}
                      onChange={e => update('payment', e.target.value)} />
                    {p.label}
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.btnRow}>
              <button className={styles.backBtn} onClick={() => setStep(0)}>← Back</button>
              <button className={styles.nextBtn} onClick={() => form.name && form.phone ? setStep(2) : alert('Please fill your name and phone number')}>
                Review Booking →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className={styles.fields}>
            <h3>Confirm Your Booking</h3>
            <div className={styles.summary}>
              <div className={styles.summaryRow}><span>Route</span><strong>{form.route}</strong></div>
              <div className={styles.summaryRow}><span>Date</span><strong>{form.date}</strong></div>
              <div className={styles.summaryRow}><span>Time</span><strong>{form.time}</strong></div>
              <div className={styles.summaryRow}><span>Passengers</span><strong>{form.passengers}</strong></div>
              <div className={styles.summaryRow}><span>Trip Type</span><strong>{form.type === 'one-way' ? 'One Way' : 'Return'}</strong></div>
              <div className={styles.summaryRow}><span>Name</span><strong>{form.name}</strong></div>
              <div className={styles.summaryRow}><span>Phone</span><strong>{form.phone}</strong></div>
              <div className={styles.summaryRow}><span>Payment</span><strong>{form.payment === 'mpesa' ? 'M-Pesa' : form.payment === 'cash' ? 'Cash at Terminal' : 'Debit Card'}</strong></div>
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Estimated Total</span>
                <strong>KES {(1200 * form.passengers * (form.type === 'return' ? 1.85 : 1)).toLocaleString()}</strong>
              </div>
            </div>

            <div className={styles.terms}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to the <a href="/safety">terms and conditions</a>. Cancellations must be made 2 hours before departure.</label>
            </div>

            <div className={styles.btnRow}>
              <button className={styles.backBtn} onClick={() => setStep(1)}>← Back</button>
              <button className={styles.submitBtn} onClick={handleSubmit}>
                Confirm & Book 🎫
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
