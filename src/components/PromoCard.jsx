import React from 'react';
import { Link } from 'react-router-dom';

const PromoCard = ({ id, imageUrl, title, kategori, summary }) => (
  <Link 
    to={`/promo/${id}`}
    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
  >
    <div className="overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" 
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <span className="text-sm font-semibold text-teal-600 mb-2">{kategori}</span>
      <h4 className="font-bold text-xl text-gray-900 mb-3 flex-grow group-hover:text-teal-700 transition-colors">
        {title}
      </h4>
      <p className="text-gray-600 text-sm mb-4">
        {summary}
      </p>
      <span className="text-orange-500 font-semibold mt-auto">
        Lihat Detail >
      </span>
    </div>
  </Link>
);

export default PromoCard;