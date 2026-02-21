import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Gallery.module.css';

const GALLERY_ITEMS = [
  { title: 'Samburu Sunset Journey', category: 'routes', emoji: '🌅', desc: 'Express bus on the Maralal highway at sunset' },
  { title: 'Nairobi Terminal', category: 'terminals', emoji: '🏙️', desc: 'Our main terminal at Ronald Ngala Street' },
  { title: 'Maralal Arrival', category: 'terminals', emoji: '🌿', desc: 'Passengers arriving at Maralal terminus' },
  { title: 'Samburu Express', category: 'fleet', emoji: '🚌', desc: 'Our flagship express coach on the highway' },
  { title: 'Mount Kenya Backdrop', category: 'routes', emoji: '🏔️', desc: 'Route passing through Mount Kenya corridor' },
  { title: 'Cargo Loading', category: 'cargo', emoji: '📦', desc: 'Cargo being loaded at Nairobi terminal' },
  { title: 'Happy Passengers', category: 'people', emoji: '😊', desc: 'Satisfied passengers at journey\'s end' },
  { title: 'Northern Pioneer', category: 'fleet', emoji: '🚌', desc: 'Our rural-ready coach for northern routes' },
  { title: 'Safety Inspection', category: 'fleet', emoji: '🔧', desc: 'Pre-trip mechanical inspection in progress' },
  { title: 'Nanyuki Stop', category: 'routes', emoji: '🌄', desc: 'Passengers boarding at Nanyuki junction' },
  { title: 'SACCO Ceremony', category: 'events', emoji: '🎉', desc: 'Annual SACCO member meeting and awards' },
  { title: 'Crew Team', category: 'people', emoji: '👷', desc: 'Our dedicated drivers and crew team' },
];

const CATEGORIES = ['all', 'fleet', 'routes', 'terminals', 'cargo', 'people', 'events'];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.category === filter);

  return (
    <>
      <Head>
        <title>Gallery | Maralal Safaris SACCO</title>
      </Head>

      <div className="page-hero">
        <h1>Gallery</h1>
        <p>Moments from the road — our people, places, and journeys.</p>
      </div>

      <nav className="breadcrumb">
        <Link href="/">Home</Link> / Gallery
      </nav>

      <section className="section" style={{ background: '#f5f5f0' }}>
        <div className="container">
          <div className={styles.filterBar}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className={styles.gallery}>
            {filtered.map((item, i) => (
              <div
                key={i}
                className={styles.galleryCard}
                onClick={() => setSelected(item)}
              >
                <div className={styles.galleryEmoji}>{item.emoji}</div>
                <div className={styles.galleryOverlay}>
                  <h3>{item.title}</h3>
                  <span>{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div className={styles.lightbox} onClick={() => setSelected(null)}>
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelected(null)}>✕</button>
            <div className={styles.lightboxEmoji}>{selected.emoji}</div>
            <h2>{selected.title}</h2>
            <p>{selected.desc}</p>
            <span className={styles.lbCategory}>{selected.category}</span>
          </div>
        </div>
      )}
    </>
  );
}
