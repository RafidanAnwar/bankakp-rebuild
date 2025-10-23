import React from 'react';

// Ikon-ikon ini sudah benar (tetap text-teal-600)
const IconTabungan = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
  </svg>
);
const IconDeposito = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0l.879-.659M12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);
const IconPinjaman = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-teal-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0H21m-12 6.75h.008v.008H9v-.008z" />
  </svg>
);

// --- PERUBAHAN ADA DI BARIS INI ---
const ProductCard = ({ icon, title, description }) => (
  // Hapus 'transform hover:-translate-y-2'
  // Tambahkan 'transition-all hover:shadow-2xl hover:shadow-teal-200/50'
  <div className="bg-white p-8 rounded-lg shadow-xl text-center transition-all duration-300 hover:shadow-2xl hover:shadow-teal-200/50">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
// --- AKHIR PERUBAHAN ---

const Products = () => {
  return (
    // Latar belakang sudah benar (bg-teal-50)
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Produk Unggulan Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard
            icon={<IconTabungan />}
            title="TABUNGAN"
            description="Bunga kompetitif dan syarat mudah. Amankan masa depan Anda."
          />
          <ProductCard
            icon={<IconDeposito />}
            title="DEPOSITO"
            description="Investasi aman dengan bunga deposito tinggi. Nikmati keuntungan."
          />
          <ProductCard
            icon={<IconPinjaman />}
            title="PINJAMAN"
            description="Proses cepat untuk berbagai kebutuhan Anda, dari modal usaha hingga konsumtif."
          />
        </div>
      </div>
    </section>
  );
};

export default Products;