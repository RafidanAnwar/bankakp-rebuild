import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-white px-6 py-20">
      <div className="text-center">
        {/* GANTI text-blue-600 -> text-teal-600 */}
        <h1 className="text-9xl font-bold text-teal-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mt-6 text-lg leading-7 text-gray-600">
          Maaf, kami tidak dapat menemukan halaman yang Anda cari.
        </p>
        <div className="mt-10">
          {/* GANTI bg-blue-600 -> bg-orange-400 (Tombol CTA) */}
          <Link
            to="/"
            className="inline-block bg-orange-400 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-orange-500 transition-colors"
          >
            &larr; Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;