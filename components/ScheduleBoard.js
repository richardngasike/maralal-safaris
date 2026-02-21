import { useState } from 'react';
import styles from './ScheduleBoard.module.css';

const SCHEDULES = {
  nairobi_maralal: [
    { time: '05:30', type: 'Express', seats: 45, status: 'On Time', via: 'Nyeri, Nanyuki' },
    { time: '07:00', type: 'Regular', seats: 60, status: 'On Time', via: 'Thika, Nyeri, Nanyuki, Rumuruti' },
    { time: '09:30', type: 'Express', seats: 45, status: 'On Time', via: 'Nyeri, Nanyuki' },
    { time: '12:00', type: 'Regular', seats: 60, status: 'On Time', via: 'Thika, Nyeri, Nanyuki, Rumuruti' },
    { time: '14:30', type: 'Express', seats: 45, status: 'Filling Fast', via: 'Nyeri, Nanyuki' },
    { time: '17:00', type: 'Regular', seats: 60, status: 'On Time', via: 'Thika, Nyeri, Nanyuki, Rumuruti' },
    { time: '20:00', type: 'Night Express', seats: 45, status: 'On Time', via: 'Nyeri, Nanyuki' },
  ],
  maralal_nakuru: [
    { time: '06:00', type: 'Regular', seats: 60, status: 'On Time', via: 'Nyahururu' },
    { time: '08:00', type: 'Express', seats: 45, status: 'On Time', via: 'Nyahururu' },
    { time: '11:00', type: 'Regular', seats: 60, status: 'On Time', via: 'Wamba, Nyahururu' },
    { time: '14:00', type: 'Express', seats: 45, status: 'Filling Fast', via: 'Nyahururu' },
    { time: '18:00', type: 'Regular', seats: 60, status: 'On Time', via: 'Nyahururu' },
  ],
  maralal_nairobi: [
    { time: '05:00', type: 'Express', seats: 45, status: 'On Time', via: 'Nanyuki, Nyeri' },
    { time: '06:30', type: 'Regular', seats: 60, status: 'On Time', via: 'Rumuruti, Nanyuki, Nyeri, Thika' },
    { time: '09:00', type: 'Express', seats: 45, status: 'On Time', via: 'Nanyuki, Nyeri' },
    { time: '13:00', type: 'Regular', seats: 60, status: 'On Time', via: 'Rumuruti, Nanyuki, Nyeri, Thika' },
    { time: '16:00', type: 'Express', seats: 45, status: 'Filling Fast', via: 'Nanyuki, Nyeri' },
    { time: '19:00', type: 'Night Express', seats: 45, status: 'On Time', via: 'Nanyuki, Nyeri' },
  ],
};

const ROUTE_LABELS = {
  nairobi_maralal: 'Nairobi → Maralal',
  maralal_nakuru: 'Maralal → Nakuru',
  maralal_nairobi: 'Maralal → Nairobi',
};

function getStatusClass(status) {
  if (status === 'On Time') return 'statusGood';
  if (status === 'Filling Fast') return 'statusWarn';
  return 'statusBad';
}

export default function ScheduleBoard() {
  const [route, setRoute] = useState('nairobi_maralal');
  const [day, setDay] = useState('weekday');

  const schedules = SCHEDULES[route] || [];

  return (
    <div className={styles.board}>
      <div className={styles.boardHeader}>
        <div className={styles.departures}>🕐 DEPARTURE SCHEDULE</div>
        <div className={styles.ticker}>
          LIVE UPDATES &nbsp;•&nbsp; ALL TIMES EAT (UTC+3) &nbsp;•&nbsp; SUBJECT TO CHANGE &nbsp;•&nbsp; LIVE UPDATES
        </div>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <label>Route:</label>
          <select value={route} onChange={e => setRoute(e.target.value)} className={styles.select}>
            {Object.entries(ROUTE_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
        <div className={styles.filterGroup}>
          <label>Day:</label>
          <select value={day} onChange={e => setDay(e.target.value)} className={styles.select}>
            <option value="weekday">Weekday</option>
            <option value="weekend">Weekend</option>
            <option value="holiday">Public Holiday</option>
          </select>
        </div>
      </div>

      <div className={styles.rows}>
        <div className={styles.rowHeader}>
          <span>Time</span>
          <span>Type</span>
          <span>Via</span>
          <span>Capacity</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        {schedules.map((s, i) => (
          <div key={i} className={`${styles.row} ${i % 2 === 0 ? styles.rowAlt : ''}`}>
            <span className={styles.time}>{s.time}</span>
            <span>
              <span className={`${styles.typeBadge} ${s.type.includes('Express') ? styles.express : styles.regular}`}>
                {s.type}
              </span>
            </span>
            <span className={styles.via}>{s.via}</span>
            <span className={styles.seats}>
              <div className={styles.seatBar}>
                <div className={styles.seatFill} style={{ width: `${(s.seats / 60) * 100}%` }}></div>
              </div>
              {s.seats} seats
            </span>
            <span>
              <span className={`${styles.status} ${styles[getStatusClass(s.status)]}`}>
                {s.status}
              </span>
            </span>
            <span>
              <a href="/booking" className={styles.bookBtn}>Reserve</a>
            </span>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        ℹ️ Buses depart from <strong>Nairobi Intercity Bus Terminal, Ronald Ngala Street</strong> and <strong>Maralal Main Bus Terminus</strong>. Please arrive 30 minutes before departure.
      </div>
    </div>
  );
}
