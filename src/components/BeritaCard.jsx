import React from 'react';
import { Link } from 'react-router-dom';

const BeritaCard = ({ id, imageUrl, title, date, kategori }) => (
  <Link 
    to={`/berita/${id}`}
    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
  >
    <div className="overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      {/* GANTI text-blue-600 -> text-teal-600 */}
      <span className="text-sm font-semibold text-teal-600 mb-2">{kategori}</span>
      {/* GANTI group-hover:text-blue-700 -> group-hover:text-teal-700 */}
      <h4 className="font-bold text-lg text-gray-900 mb-3 flex-grow group-hover:text-teal-700 transition-colors">
        {title}
      </h4>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  </Link>
);

export default BeritaCard;