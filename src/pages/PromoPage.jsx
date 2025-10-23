import React from 'react';
import { dataPromo } from '../data/promo.js';
import PromoCard from '../components/PromoCard.jsx';
import PageHero from '../components/PageHero.jsx';

const PromoPage = () => {
  return (
    <div className="bg-white min-h-[70vh]">
      <PageHero
        title="Promo Spesial"
        subtitle="Nikmati berbagai penawaran dan keuntungan spesial dari Bank AKP."
        breadcrumbs="Beranda | Promo"
      />

      {/* Konten Grid Promo */}
      <div className="container mx-auto px-6 py-20">
        {dataPromo.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataPromo.map((promo) => (
              <PromoCard
                key={promo.id}
                id={promo.id}
                imageUrl={promo.imageUrl}
                title={promo.title}
                kategori={promo.kategori}
                summary={promo.summary}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Saat ini belum ada promo yang tersedia.
          </p>
        )}
      </div>
    </div>
  );
};

export default PromoPage;