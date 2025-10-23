import React from 'react';

/**
 * PENTING:
 * Ganti imgSrc di bawah ini dengan path ke gambar ikon ilustrasi Anda.
 * Saya sarankan Anda membuat 3 gambar (misal: keamanan.png, waktu.png, layanan.png)
 * dan menyimpannya di folder `public/icons/`.
 */

// Komponen Card Baru
const WhyUsCard = ({ imgSrc, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    {/* Gunakan <img> untuk ikon ilustrasi baru Anda */}
    <img 
      src={imgSrc} 
      alt={title} 
      className="h-28 w-28 mx-auto mb-6" // Sesuaikan ukuran (h-28) jika perlu
    />
    <h3 className="text-xl font-bold text-teal-600 mb-3 uppercase">
      {title}
    </h3>
    <p className="text-gray-600 text-sm">
      {description}
    </p>
  </div>
);

const WhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Judul Baru dengan Underline */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Mengapa Harus Kami?
        </h2>
        {/* Underline Dua Warna */}
        <div className="flex justify-center items-center mb-12">
          <span className="w-16 h-1 bg-teal-500"></span>
          <span className="w-8 h-1 bg-orange-400 ml-1"></span>
        </div>
        
        {/* Grid untuk Card */}
        <div className="grid md:grid-cols-3 gap-8">
          <WhyUsCard
            imgSrc="keamanan.png" // GANTI DENGAN GAMBAR ANDA
            title="KEAMANAN"
            description="Tenang dengan penjaminan LPS. Sehingga uang anda akan aman, kami memberikan keamanan semaksimal mungkin untuk aset anda."
          />
          <WhyUsCard
            imgSrc="waktu.png" // GANTI DENGAN GAMBAR ANDA
            title="WAKTU"
            description="Kami memberikan proses Cepat dan Mudah untuk anda agar kebutuhan mendesak anda ataupun hal lain dapat terpenuhi segera."
          />
          <WhyUsCard
            imgSrc="layanan.png" // GANTI DENGAN GAMBAR ANDA
            title="LAYANAN"
            description="Pelayanan yang kami berikan memudahkan anda dalam melakukan aktivitas perbankan secara nyaman dan memuaskan setiap saat."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;