import React from 'react';
import { dataProduk } from '../data/produk.jsx'; // Pastikan ekstensi .jsx
import ProductPageCard from '../components/ProductPageCard';

const Produk = () => {
  return (
    <div className="bg-gray-50 min-h-[70vh]">
      {/* BAGIAN HERO KUSTOM */}
      <div 
        className="relative pt-16 pb-24 md:pb-32 text-white overflow-hidden" 
        style={{
          // Gradien sesuai gambar referensi
          background: "linear-gradient(to right, #008080, #00B3B3)",
          // Pola background
          backgroundImage: `
            linear-gradient(to right, #008080, #00B3B3),
            url('data:image/svg+xml,%3Csvg width%3D%2240%22 height%3D%2240%22 viewBox%3D%220 0 40 40%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22%2300B3B3%22 fill-opacity%3D%220.4%22 fill-rule%3D%22evenodd%22%3E%3Cpath d%3D%22M0 40L40 0H20L0 20M40 40V20L20 40%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')
          `,
          backgroundBlendMode: 'multiply',
        }}
      >
        {/* Breadcrumbs */}
        <div className="container mx-auto px-6 mb-4 text-sm opacity-80">
          Beranda | Produk
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Produk <span className="text-orange-300">AKP</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl font-light">
            Tentukan Produk Pilihan Anda Sesuai Kebutuhan Anda dengan 
            solusi keuangan yang terpercaya dan inovatif
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-orange-400 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-500 transform hover:scale-105 transition-all duration-300">
              Jelajahi Produk
            </button>
            <button className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
              Informasi Lengkap
            </button>
          </div>
        </div>

        {/* Ikon panah ke bawah */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      {/* AKHIR BAGIAN HERO KUSTOM */}


      {/* Konten Daftar Produk */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {dataProduk.map((produk) => (
            <ProductPageCard
              key={produk.id}
              icon={produk.icon}
              title={produk.title}
              description={produk.description}
              benefits={produk.benefits}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produk;