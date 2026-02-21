import { useEffect, useRef } from 'react';
import styles from './RouteMap.module.css';

const ROUTES = [
  {
    id: 1,
    name: 'Nairobi → Maralal',
    color: '#8B0000',
    stops: [
      { name: 'Nairobi CBD', lat: -1.2864, lng: 36.8172, major: true },
      { name: 'Thika', lat: -1.0332, lng: 37.0693, major: false },
      { name: 'Nyeri', lat: -0.4208, lng: 36.9470, major: true },
      { name: 'Nanyuki', lat: 0.0133, lng: 37.0770, major: true },
      { name: 'Rumuruti', lat: 0.2673, lng: 36.5350, major: false },
      { name: 'Maralal', lat: 1.0986, lng: 36.7013, major: true },
    ]
  },
  {
    id: 2,
    name: 'Samburu → Nakuru',
    color: '#1a6b3c',
    stops: [
      { name: 'Maralal', lat: 1.0986, lng: 36.7013, major: true },
      { name: 'Baragoi', lat: 1.7853, lng: 36.7916, major: false },
      { name: 'Wamba', lat: 0.9590, lng: 37.3205, major: false },
      { name: 'Isiolo', lat: 0.3556, lng: 37.5822, major: true },
      { name: 'Nyahururu', lat: 0.0280, lng: 36.3633, major: true },
      { name: 'Nakuru', lat: -0.3031, lng: 36.0800, major: true },
    ]
  }
];

export default function RouteMap() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mapPlaceholder}>
        <div className={styles.mapOverlay}>
          <h3 className={styles.mapTitle}>🗺️ Route Network Map</h3>
          <div className={styles.routeLegend}>
            {ROUTES.map(route => (
              <div key={route.id} className={styles.legendItem}>
                <span className={styles.legendLine} style={{ background: route.color }}></span>
                <span>{route.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SVG Kenya map approximation */}
        <svg className={styles.mapSvg} viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
          {/* Kenya outline background */}
          <defs>
            <radialGradient id="mapBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1a3a2a" />
              <stop offset="100%" stopColor="#0d1f18" />
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill="url(#mapBg)" rx="12" />

          {/* Grid lines */}
          {[0,1,2,3,4].map(i => (
            <line key={`h${i}`} x1="0" y1={i*125} x2="400" y2={i*125} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          ))}
          {[0,1,2,3,4].map(i => (
            <line key={`v${i}`} x1={i*100} y1="0" x2={i*100} y2="500" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          ))}

          {/* Route 1: Nairobi to Maralal */}
          <polyline
            points="200,420 205,360 200,280 205,230 180,180 175,100"
            fill="none"
            stroke="#8B0000"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8,4"
          />

          {/* Route 2: Maralal to Nakuru */}
          <polyline
            points="175,100 200,70 220,110 250,180 170,250 130,320"
            fill="none"
            stroke="#1a6b3c"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8,4"
          />

          {/* Route 1 stops */}
          {[
            { x: 200, y: 420, name: 'Nairobi', major: true },
            { x: 205, y: 360, name: 'Thika', major: false },
            { x: 200, y: 280, name: 'Nyeri', major: true },
            { x: 205, y: 230, name: 'Nanyuki', major: true },
            { x: 180, y: 180, name: 'Rumuruti', major: false },
            { x: 175, y: 100, name: 'Maralal', major: true },
          ].map((stop, i) => (
            <g key={`r1-${i}`}>
              <circle cx={stop.x} cy={stop.y} r={stop.major ? 8 : 5} fill={stop.major ? '#FFD700' : '#cc8888'} stroke="white" strokeWidth="2" />
              <text x={stop.x + 12} y={stop.y + 4} fill="white" fontSize={stop.major ? '11' : '9'} fontFamily="Georgia">{stop.name}</text>
            </g>
          ))}

          {/* Route 2 stops */}
          {[
            { x: 200, y: 70, name: 'Baragoi', major: false },
            { x: 220, y: 110, name: 'Wamba', major: false },
            { x: 250, y: 180, name: 'Isiolo', major: true },
            { x: 170, y: 250, name: 'Nyahururu', major: true },
            { x: 130, y: 320, name: 'Nakuru', major: true },
          ].map((stop, i) => (
            <g key={`r2-${i}`}>
              <circle cx={stop.x} cy={stop.y} r={stop.major ? 8 : 5} fill={stop.major ? '#50fa7b' : '#88cc88'} stroke="white" strokeWidth="2" />
              <text x={stop.x + 12} y={stop.y + 4} fill="white" fontSize={stop.major ? '11' : '9'} fontFamily="Georgia">{stop.name}</text>
            </g>
          ))}

          {/* Compass */}
          <g transform="translate(365, 40)">
            <circle cx="0" cy="0" r="18" fill="rgba(0,0,0,0.5)" stroke="rgba(255,215,0,0.4)" strokeWidth="1" />
            <text x="0" y="-6" textAnchor="middle" fill="#FFD700" fontSize="9" fontWeight="bold">N</text>
            <polygon points="0,-14 -3,-2 3,-2" fill="#FFD700" />
          </g>
        </svg>
      </div>

      <div className={styles.routeCards}>
        {ROUTES.map(route => (
          <div key={route.id} className={styles.routeCard} style={{ borderColor: route.color }}>
            <h4 style={{ color: route.color }}>{route.name}</h4>
            <div className={styles.stops}>
              {route.stops.map((stop, i) => (
                <div key={i} className={styles.stop}>
                  <div className={`${styles.dot} ${stop.major ? styles.majorDot : ''}`} style={{ background: stop.major ? route.color : '#ccc' }}></div>
                  <span className={stop.major ? styles.majorStop : ''}>{stop.name}</span>
                  {i < route.stops.length - 1 && <div className={styles.line} style={{ background: route.color + '44' }}></div>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
