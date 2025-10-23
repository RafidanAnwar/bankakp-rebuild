import React from 'react';
import { Link } from 'react-router-dom';
import { dataLowongan } from '../data/lowongan.js';
import PageHero from '../components/PageHero.jsx';

// Ikon tidak berubah (abu-abu)
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1 text-gray-500">
    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.757.433.62.62 0 00.28.14l.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1 text-gray-500">
    <path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.44A2.25 2.25 0 0012.25 3h-4.5A2.25 2.25 0 006 4.19v-.44zm-.188 1.56a.75.75 0 01.961.464l.003.007v.678A2.75 2.75 0 008.75 9h2.5A2.75 2.75 0 0014 6.456v-.678l.003-.007a.75.75 0 01.961-.464l2.092.748A2.75 2.75 0 0119 7.08v6.17a2.75 2.75 0 01-2.75 2.75H3.75A2.75 2.75 0 011 13.25V7.08a2.75 2.75 0 011.845-2.502l2.092-.748z" clipRule="evenodd" />
  </svg>
);

const Lowongan = () => {
  return (
    <div className="bg-white min-h-[70vh]">
      <PageHero
        title="Karir di Bank AKP"
        subtitle="Bergabunglah bersama kami dan tumbuh kembangkan potensi Anda."
        breadcrumbs="Beranda | Karir"
      />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Lowongan Tersedia
          </h2>
          
          <ul className="space-y-6">
            {dataLowongan.map((lowongan) => (
              <li key={lowongan.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <Link to={`/lowongan/${lowongan.id}`} className="group">
                  {/* GANTI text-blue-700 -> text-teal-700 */}
                  <h3 className="text-xl font-bold text-teal-700 group-hover:underline">
                    {lowongan.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600 mt-2 space-y-2 md:space-y-0 md:space-x-4">
                    <span className="flex items-center"><BriefcaseIcon /> {lowongan.type}</span>
                    <span className="flex items-center"><LocationIcon /> {lowongan.location}</span>
                  </div>
                  <p className="text-gray-700 mt-3">
                    {lowongan.summary}
                  </p>
                  {/* GANTI text-blue-600 -> text-teal-600 */}
                  <span className="text-teal-600 font-semibold mt-4 inline-block">
                    Lihat Detail &gt;
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {dataLowongan.length === 0 && (
            <p className="text-gray-600">
              Saat ini belum ada lowongan yang tersedia. Silakan cek kembali nanti.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lowongan;