import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    // 1. Hapus kelas 'bg-gradient-to-r' dan tambahkan 'relative overflow-hidden'
    // 2. Tambahkan 'style' object untuk background baru
    <section 
      className="relative text-white overflow-hidden"
      style={{
        background: "linear-gradient(to right, #008080, #00B3B3)",
        backgroundImage: `
          linear-gradient(to right, #008080, #00B3B3),
          url('data:image/svg+xml,%3Csvg width%3D%2240%22 height%3D%2240%22 viewBox%3D%220 0 40 40%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22%2300B3B3%22 fill-opacity%3D%220.4%22 fill-rule%3D%22evenodd%22%3E%3Cpath d%3D%22M0 40L40 0H20L0 20M40 40V20L20 40%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')
        `,
        backgroundBlendMode: 'multiply',
      }}
    >
      {/* 3. Tambahkan 'relative z-10' agar konten di atas background */}
      <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Penuhi Kebutuhan Anda Sekarang
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
          Solusi finansial terpercaya untuk masyarakat Samarinda dan sekitarnya. 
          Kami hadir untuk membantu Anda tumbuh.
        </p>
        <div>
          {/* 4. Ganti style tombol agar lebih kontras */}
          <Link
            to="/produk"
            className="bg-orange-400 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-500 transform hover:scale-105 transition-all duration-300"
          >
            Lihat Produk Kami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;