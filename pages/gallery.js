import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';

// We'll assume images are placed in public/gallery/ with these filenames
// (you can rename them later — just keep names consistent)
const GALLERY_ITEMS = [
  { 
    title: 'Samburu Sunset Journey', 
    category: 'routes', 
    image: '/gallery/samburu.jpeg', 
    desc: 'Express bus on the Maralal highway at sunset' 
  },
  { 
    title: 'Nairobi Terminal', 
    category: 'terminals', 
    image: '/gallery/nairobiterminal.jpeg', 
    desc: 'Our main terminal at Ronald Ngala Street' 
  },
  { 
    title: 'Nyahururu Departure', 
    category: 'terminals', 
    image: '/gallery/nyahururdeparture.jpeg', 
    desc: 'Passengers arriving at Maralal terminus' 
  },
  { 
    title: 'Samburu Express', 
    category: 'fleet', 
    image: '/gallery/samburu-express.jpeg', 
    desc: 'Our flagship express coach on the highway' 
  },
  { 
    title: 'Shuttle', 
    category: 'routes', 
    image: '/gallery/shuttle.jpeg', 
    desc: 'Route passing through Mount Kenya corridor' 
  },
  { 
    title: 'Cargo Loading', 
    category: 'cargo', 
    image: '/gallery/image1.jpeg', 
    desc: 'Cargo being loaded at Nairobi terminal' 
  },
  { 
    title: 'Happy Passengers', 
    category: 'people', 
    image: '/gallery/image2.jpeg', 
    desc: 'Satisfied passengers at journey\'s end' 
  },
  { 
    title: 'Northern Pioneer', 
    category: 'fleet', 
    image: '/gallery/image3.jpeg', 
    desc: 'Our rural-ready coach for northern routes' 
  },
  { 
    title: 'Safety Inspection', 
    category: 'fleet', 
    image: '/gallery/image4.jpeg', 
    desc: 'Pre-trip mechanical inspection in progress' 
  },
  { 
    title: 'Nanyuki Stop', 
    category: 'routes', 
    image: '/gallery/image5.jpeg', 
    desc: 'Passengers boarding at Nanyuki junction' 
  },
  { 
    title: 'SACCO Ceremony', 
    category: 'events', 
    image: '/gallery/image6.jpeg', 
    desc: 'Annual SACCO member meeting and awards' 
  },
  { 
    title: 'Crew Team', 
    category: 'people', 
    image: '/gallery/image7.jpeg', 
    desc: 'Our dedicated drivers and crew team' 
  },
];

const CATEGORIES = ['all', 'fleet', 'routes', 'terminals', 'cargo', 'people', 'events'];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(g => g.category === filter);

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
                <div className={styles.galleryImageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={i < 6} // optional: load first few images faster
                  />
                </div>

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
            
            <div className={styles.lightboxImageWrapper}>
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="(max-width: 1200px) 100vw, 90vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            <h2>{selected.title}</h2>
            <p>{selected.desc}</p>
            <span className={styles.lbCategory}>{selected.category}</span>
          </div>
        </div>
      )}
    </>
  );
}