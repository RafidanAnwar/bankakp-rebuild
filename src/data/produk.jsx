import React from 'react';

// Ikon-ikon sebagai komponen React
const IconTabungan = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
  </svg>
);
const IconDeposito = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0l.879-.659M12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);
const IconPinjaman = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m0 0H21m-12 6.75h.008v.008H9v-.008z" />
  </svg>
);

export const dataProduk = [
  {
    id: "tabungan",
    title: "Tabungan",
    icon: <IconTabungan />,
    description: "Simpanan aman untuk masa depan Anda. Nikmati suku bunga kompetitif, setoran awal yang ringan, dan kemudahan transaksi.",
    benefits: [
      "Setoran awal ringan, mulai dari Rp 50.000",
      "Suku bunga kompetitif dan dijamin LPS",
      "Bebas biaya administrasi bulanan (S&K berlaku)",
      "Aman dan terpercaya",
    ],
  },
  {
    id: "deposito",
    title: "Deposito Berjangka",
    icon: <IconDeposito />,
    description: "Investasikan dana Anda dengan keuntungan pasti. Dapatkan suku bunga lebih tinggi dengan pilihan jangka waktu yang fleksibel.",
    benefits: [
      "Suku bunga tinggi dan sangat kompetitif",
      "Jangka waktu fleksibel: 1, 3, 6, atau 12 bulan",
      "Dapat dijadikan jaminan kredit",
      "Pencairan bunga dapat ditransfer ke rekening tabungan",
    ],
  },
  {
    id: "pinjaman",
    title: "Pinjaman & Kredit",
    icon: <IconPinjaman />,
    description: "Solusi cepat untuk segala kebutuhan Anda. Kami menyediakan berbagai jenis pinjaman dengan proses mudah dan angsuran ringan.",
    benefits: [
      "Proses persetujuan cepat dan mudah",
      "Plafon pinjaman tinggi sesuai kebutuhan",
      "Angsuran ringan dan suku bunga bersaing",
      "Tersedia untuk modal usaha, renovasi rumah, dan kebutuhan konsumtif lainnya",
    ],
  },
];