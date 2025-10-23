import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { semuaBerita } from '../data/berita';

const BeritaDetail = () => {
  const { id } = useParams();
  const berita = semuaBerita.find(item => item.id === parseInt(id));

  if (!berita) {
    return (
      <div className="container mx-auto px-6 py-20 text-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">404 - Berita Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-8">
          Maaf, artikel berita yang Anda cari tidak dapat ditemukan.
        </p>
        {/* GANTI bg-blue-600 -> bg-orange-400 (Tombol CTA) */}
        <Link
          to="/berita"
          className="bg-orange-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-orange-500 transition-colors"
        >
          Kembali ke Daftar Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* GANTI text-blue-600 -> text-teal-600 */}
        <Link 
          to="/berita" 
          className="text-teal-600 hover:text-teal-800 mb-8 inline-block"
        >
          &larr; Kembali ke Daftar Berita
        </Link>
        
        {/* GANTI text-blue-600 -> text-teal-600 */}
        <span className="text-sm font-semibold text-teal-600 mb-2 block">
          {berita.kategori}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {berita.title}
        </h1>
        <p className="text-gray-500 text-md mb-6">
          Dipublikasikan pada {berita.date}
        </p>

        <img 
          src={berita.imageUrl} 
          alt={berita.title} 
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8"
        />

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: berita.content }}
        />
      </div>
    </div>
  );
};

export default BeritaDetail;