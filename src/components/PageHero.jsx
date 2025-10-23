import React from 'react';

// Komponen ini akan menerima props: title, subtitle, dan breadcrumbs
const PageHero = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div 
      className="relative pt-16 pb-24 text-white overflow-hidden" 
      style={{
        // Gradien yang sama dengan halaman produk
        background: "linear-gradient(to right, #008080, #00B3B3)",
        // Pola background yang sama
        backgroundImage: `
          linear-gradient(to right, #008080, #00B3B3),
          url('data:image/svg+xml,%3Csvg width%3D%2240%22 height%3D%2240%22 viewBox%3D%220 0 40 40%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22%2300B3B3%22 fill-opacity%3D%220.4%22 fill-rule%3D%22evenodd%22%3E%3Cpath d%3D%22M0 40L40 0H20L0 20M40 40V20L20 40%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')
        `,
        backgroundBlendMode: 'multiply',
      }}
    >
      {/* Breadcrumbs (tampil jika ada) */}
      {breadcrumbs && (
        <div className="container mx-auto px-6 mb-4 text-sm opacity-80">
          {breadcrumbs}
        </div>
      )}

      {/* Konten Teks */}
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg max-w-2xl font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHero;