import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dataPromo } from '../data/promo';

const PromoDetail = () => {
  const { id } = useParams();
  const promo = dataPromo.find(item => item.id === parseInt(id));

  if (!promo) {
    return (
      <div className="container mx-auto px-6 py-20 text-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">404 - Promo Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-8">
          Maaf, promo yang Anda cari tidak dapat ditemukan atau sudah berakhir.
        </p>
        <Link
          to="/promo"
          className="bg-orange-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-orange-500 transition-colors"
        >
          Lihat Promo Lainnya
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link 
          to="/promo" 
          className="text-teal-600 hover:text-teal-800 mb-8 inline-block"
        >
          ← Kembali ke Daftar Promo
        </Link>
        
        <span className="text-sm font-semibold text-teal-600 mb-2 block">
          {promo.kategori}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {promo.title}
        </h1>

        <img 
          src={promo.imageUrl} 
          alt={promo.title} 
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8"
        />

        {/* 'prose' dari tailwind akan otomatis menata HTML di 'content' */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: promo.content }}
        />
      </div>
    </div>
  );
};

export default PromoDetail;