import { useState } from 'react';
import styles from './FareTable.module.css';

const FARES = [
  { from: 'Nairobi', to: 'Thika', distance: '45 km', bus: 200, express: 280, cargo: 150 },
  { from: 'Nairobi', to: 'Nyeri', distance: '156 km', bus: 550, express: 750, cargo: 400 },
  { from: 'Nairobi', to: 'Nanyuki', distance: '195 km', bus: 700, express: 950, cargo: 500 },
  { from: 'Nairobi', to: 'Rumuruti', distance: '230 km', bus: 850, express: 1150, cargo: 600 },
  { from: 'Nairobi', to: 'Maralal', distance: '350 km', bus: 1200, express: 1600, cargo: 900 },
  { from: 'Maralal', to: 'Baragoi', distance: '90 km', bus: 400, express: 550, cargo: 300 },
  { from: 'Maralal', to: 'Isiolo', distance: '180 km', bus: 700, express: 950, cargo: 500 },
  { from: 'Maralal', to: 'Nyahururu', distance: '120 km', bus: 500, express: 680, cargo: 380 },
  { from: 'Maralal', to: 'Nakuru', distance: '280 km', bus: 1000, express: 1350, cargo: 750 },
  { from: 'Nyeri', to: 'Nanyuki', distance: '50 km', bus: 200, express: 300, cargo: 150 },
  { from: 'Nanyuki', to: 'Isiolo', distance: '90 km', bus: 350, express: 480, cargo: 260 },
];

export default function FareTable() {
  const [filter, setFilter] = useState('');
  const [type, setType] = useState('all');

  const filtered = FARES.filter(f =>
    (f.from.toLowerCase().includes(filter.toLowerCase()) ||
     f.to.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="🔍 Search origin or destination..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className={styles.search}
        />
        <div className={styles.tabs}>
          {['all', 'bus', 'express', 'cargo'].map(t => (
            <button
              key={t}
              className={`${styles.tab} ${type === t ? styles.activeTab : ''}`}
              onClick={() => setType(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.notice}>
        <span>📢</span>
        <span>Fares effective February 2025. Subject to change. Children under 3 travel FREE. Student discount: 10% with valid ID.</span>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Distance</th>
              {(type === 'all' || type === 'bus') && <th>🚌 Regular Bus<br /><small>(KES)</small></th>}
              {(type === 'all' || type === 'express') && <th>⚡ Express<br /><small>(KES)</small></th>}
              {(type === 'all' || type === 'cargo') && <th>📦 Cargo/kg<br /><small>(KES)</small></th>}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((fare, i) => (
              <tr key={i} className={i % 2 === 0 ? styles.even : ''}>
                <td><strong>{fare.from}</strong></td>
                <td>{fare.to}</td>
                <td className={styles.dist}>{fare.distance}</td>
                {(type === 'all' || type === 'bus') && <td className={styles.price}>KES {fare.bus.toLocaleString()}</td>}
                {(type === 'all' || type === 'express') && <td className={styles.price}><span className={styles.expressBadge}>KES {fare.express.toLocaleString()}</span></td>}
                {(type === 'all' || type === 'cargo') && <td className={styles.price}>KES {fare.cargo.toLocaleString()}</td>}
                <td>
                  <a href="/booking" className={styles.bookBtn}>Book</a>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="7" className={styles.noResults}>No routes found for "{filter}"</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
