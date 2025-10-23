import React from 'react';
import { Link } from 'react-router-dom';
import { dataPromo } from '../data/promo.js'; // 1. Impor data

const PromoHome = () => {
  // 2. Ambil promo pertama sebagai promo unggulan
  const featuredPromo = dataPromo[0];

  // 3. Tampilkan pesan jika tidak ada promo
  if (!featuredPromo) {
    return null; // Atau tampilkan komponen placeholder
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
          
          <div className="md:w-1/2">
            <div 
              className="h-64 md:h-full w-full bg-cover bg-center" 
              // 4. Gunakan data dinamis
              style={{ backgroundImage: `url('${featuredPromo.imageUrl}')` }}
            >
              <span className="sr-only">{featuredPromo.title}</span>
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-sm font-bold uppercase text-teal-600 mb-2">
              PROMO UNTUK ANDA
            </h2>
            {/* 5. Gunakan data dinamis */}
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {featuredPromo.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {featuredPromo.summary}
            </p>
            <div className="flex-shrink-0">
              {/* 6. Arahkan link ke halaman detail */}
              <Link
                to={`/promo/${featuredPromo.id}`}
                className="inline-block bg-orange-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-500 transition-colors"
              >
                Lihat Detail Promo
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PromoHome;