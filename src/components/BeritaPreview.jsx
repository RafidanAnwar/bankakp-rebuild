import React from 'react';
import { Link } from 'react-router-dom';
import { semuaBerita } from '../data/berita.js';
import BeritaCard from './BeritaCard.jsx';

const previewBerita = semuaBerita.slice(0, 3);

const BeritaPreview = () => {
  return (
    // GANTI bg-gray-50 -> bg-teal-50
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Berita Terbaru
          </h2>
          {/* GANTI text-blue-600 -> text-teal-600 */}
          <Link
            to="/berita"
            className="text-teal-600 hover:text-teal-800 font-semibold transition-colors"
          >
            Selengkapnya &gt;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewBerita.map((berita) => (
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
    </section>
  );
};

export default BeritaPreview;