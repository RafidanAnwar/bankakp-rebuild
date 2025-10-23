import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dataLowongan } from '../data/lowongan.js';

const LowonganDetail = () => {
  const { id } = useParams();
  const lowongan = dataLowongan.find(item => item.id === parseInt(id));

  if (!lowongan) {
    return (
      <div className="container mx-auto px-6 py-20 text-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">404 - Lowongan Tidak Ditemukan</h1>
        {/* GANTI bg-blue-600 -> bg-orange-400 */}
        <Link
          to="/lowongan"
          className="bg-orange-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-orange-500 transition-colors"
        >
          Kembali ke Daftar Lowongan
        </Link>
      </div>
    );
  }

  // GANTI text-green-500 -> text-teal-500
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* GANTI text-blue-600 -> text-teal-600 */}
        <Link 
          to="/lowongan" 
          className="text-teal-600 hover:text-teal-800 mb-8 inline-block"
        >
          &larr; Kembali ke Daftar Lowongan
        </Link>
        
        <span className="text-sm font-semibold text-gray-500">{lowongan.type} - {lowongan.location}</span>
        <h1 className="text-4xl font-bold text-gray-900 my-2">
          {lowongan.title}
        </h1>
        
        <div className="prose prose-lg max-w-none mt-8">
          <h3 className="font-bold">Deskripsi Pekerjaan</h3>
          <p>{lowongan.summary}</p>
          
          <h3 className="font-bold mt-6">Tanggung Jawab Utama</h3>
          <ul className="list-none p-0">
            {lowongan.responsibilities.map((item, index) => (
              <li key={index} className="flex items-start mb-2">
                <CheckIcon /> <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <h3 className="font-bold mt-6">Kualifikasi</h3>
          <ul className="list-none p-0">
            {lowongan.qualifications.map((item, index) => (
              <li key={index} className="flex items-start mb-2">
                <CheckIcon /> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-10" />

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Cara Melamar
        </h3>
        <p className="text-gray-700">
          Kirimkan CV terbaru dan surat lamaran Anda ke email 
          {/* GANTI text-blue-600 -> text-teal-600 */}
          <a href="mailto:hrd@bankakp.co.id" className="text-teal-600 font-medium hover:underline">
            hrd@bankakp.co.id
          </a> dengan subjek email: <strong>{lowongan.title}</strong>.
        </p>

      </div>
    </div>
  );
};

export default LowonganDetail;