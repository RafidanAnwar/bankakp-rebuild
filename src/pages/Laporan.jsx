import React from 'react';
import { dataLaporan } from '../data/laporan.js';
import PageHero from '../components/PageHero.jsx';

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const Laporan = () => {
  const groupedLaporan = dataLaporan.reduce((acc, laporan) => {
    const category = laporan.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(laporan);
    return acc;
  }, {});

  return (
    <div className="bg-white min-h-[70vh]">
      <PageHero
        title="Laporan & Publikasi"
        subtitle="Transparansi informasi keuangan dan tata kelola Bank AKP."
        breadcrumbs="Beranda | Laporan"
      />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          
          {Object.keys(groupedLaporan).map((category) => (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-300">
                {category}
              </h2>
              
              <ul className="space-y-4">
                {groupedLaporan[category].map((laporan) => (
                  // GANTI bg-gray-50 -> bg-teal-50
                  <li key={laporan.id} className="flex flex-col md:flex-row justify-between md:items-center bg-teal-50 p-6 rounded-lg shadow-sm border border-gray-200">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {laporan.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Dipublikasikan: {laporan.date}
                      </p>
                    </div>
                    {/* GANTI bg-blue-600 -> bg-teal-600 */}
                    <a
                      href={laporan.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-teal-600 text-white font-medium py-2 px-5 rounded-lg shadow-md hover:bg-teal-700 transition-colors mt-4 md:mt-0"
                    >
                      <DownloadIcon />
                      Lihat Laporan
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Laporan;