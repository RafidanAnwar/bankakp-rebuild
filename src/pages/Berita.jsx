import React from 'react';
import { semuaBerita } from '../data/berita.js';
import BeritaCard from '../components/BeritaCard.jsx';
import PageHero from '../components/PageHero.jsx';

const Berita = () => {
  return (
    <div className="bg-white min-h-[70vh]">
      {/* Menggunakan PageHero */}
      <PageHero
        title="Berita & Publikasi"
        subtitle="Ikuti informasi dan kegiatan terbaru dari Bank AKP."
        breadcrumbs="Beranda | Berita"
      />

      {/* Konten Grid Berita */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {semuaBerita.map((berita) => (
            <BeritaCard
              key={berita.id}
              id={berita.id}
              imageUrl={berita.imageUrl}
              title={berita.title}
              date={berita.date}
              kategori={berita.kategori}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Berita;