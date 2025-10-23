import React from 'react';
import { Link } from 'react-router-dom';

// --- IKON-IKON BARU UNTUK FOOTER ---
const IconWhatsApp = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-teal-400">
    <path d="M13.4,11.8c-0.1-0.1-0.3-0.1-0.5,0c-0.2,0.1-1.2,0.6-1.4,0.7c-0.2,0.1-0.3,0.1-0.5,0c-0.1-0.1-0.5-0.2-1-0.7 c-0.7-0.7-1.2-1.6-1.3-1.8c-0.1-0.2,0-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0-0.2,0-0.4 c0-0.1-0.6-1.4-0.9-2C7.3,6.2,7.1,6.3,6.9,6.3c-0.1,0-0.3,0-0.4,0C6.3,6.3,6,6.4,5.8,6.6C5.6,6.9,5,7.5,5,8.7c0,1.2,0.9,2.4,1,2.5 c0.1,0.2,2,3.1,4.9,4.3c0.6,0.2,1.1,0.4,1.5,0.5c0.6,0.2,1.1,0.1,1.5-0.1c0.5-0.2,1.2-0.8,1.4-1.6c0.2-0.8,0.2-1.4,0.1-1.6 C13.7,11.9,13.5,11.9,13.4,11.8z M10,0C4.5,0,0,4.5,0,10c0,2.8,1.1,5.3,3,7.1L1.1,20l3.1-1.9c1.8,1,3.8,1.6,5.9,1.6 c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M15.3,13.8c-0.2,0.9-0.9,1.5-1.6,1.8c-0.5,0.2-1.1,0.3-3.4,0c-3-0.4-5.4-2.8-5.5-3 c-0.1-0.2-1-1.3-1-2.6c0-1.3,0.6-1.9,0.9-2.2c0.3-0.3,0.6-0.3,0.8-0.3c0.2,0,0.4,0,0.5,0c0.2,0,0.3,0,0.5,0.4c0.2,0.4,0.7,1.7,0.8,1.8 c0.1,0.1,0.1,0.3,0,0.4c-0.1,0.2-0.2,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.3,0,0.5c0.3,0.6,0.9,1.4,1.7,2.1 c0.9,0.8,1.7,1.1,2,1.3c0.2,0.1,0.3,0.1,0.5,0c0.1-0.1,0.5-0.5,0.6-0.7c0.1-0.2,0.2-0.4,0.4-0.3C14.4,12.7,15.1,13.3,15.3,13.8z"/>
  </svg>
);

const IconEmail = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-teal-400">
    <path d="M17.1,5H2.9C1.9,5,1,5.9,1,6.9v6.3C1,14.1,1.9,15,2.9,15h14.2c1.1,0,1.9-0.9,1.9-1.9V6.9C19,5.9,18.1,5,17.1,5z M17.1,6.6c-0.1,0-0.2,0-0.3,0.1L10,11.4L3.2,6.7C3.1,6.6,3,6.6,2.9,6.6H17.1z M17.1,13.4H2.9V8.3l6.5,5c0.2,0.1,0.4,0.2,0.6,0.2 s0.4-0.1,0.6-0.2l6.5-5V13.4z"/>
  </svg>
);

const IconAlamat = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-teal-400">
    <path d="M10,0.1C6.2,0.1,3.1,3.2,3.1,7c0,3.6,3.1,8.4,6.3,12.5c0.2,0.2,0.5,0.4,0.7,0.4s0.5-0.1,0.7-0.4c3.2-4.1,6.3-8.8,6.3-12.5 C16.9,3.2,13.8,0.1,10,0.1z M10,10.6c-2,0-3.6-1.6-3.6-3.6S8,3.4,10,3.4s3.6,1.6,3.6,3.6S12,10.6,10,10.6z"/>
  </svg>
);

const IconTwitter = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const IconInstagram = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.227-1.667 4.77-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.667-4.77 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.626c-3.141 0-3.499.01-4.71.069-2.73.123-3.985 1.405-4.108 4.108-.059 1.211-.069 1.569-.069 4.71s.01 3.499.069 4.71c.123 2.704 1.378 3.986 4.108 4.108 1.211.059 1.569.069 4.71.069s3.499-.01 4.71-.069c2.704-.123 3.986-1.378 4.108-4.108.059-1.211.069-1.569.069-4.71s-.01-3.499-.069-4.71c-.123-2.704-1.378-3.986-4.108-4.108-1.211-.059-1.569-.069-4.71-.069zM12 6.875c-2.828 0-5.125 2.297-5.125 5.125s2.297 5.125 5.125 5.125 5.125-2.297 5.125-5.125S14.828 6.875 12 6.875zm0 8.625c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5zm6.406-9.688c-.766 0-1.385.62-1.385 1.385s.62 1.385 1.385 1.385 1.385-.62 1.385-1.385-.62-1.385-1.385-1.385z"/>
  </svg>
);

const IconFacebook = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325v-21.35C24 .59 23.41 0 22.675 0z"/>
  </svg>
);
// --- AKHIR IKON ---


const Footer = () => {
  return (
    // Kita gunakan 'bg-gray-900' dari kode sebelumnya, 
    // tapi gambar Anda terlihat lebih ke 'bg-slate-900'
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 pt-16 pb-8">
        
        {/* Grid 3 Kolom */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Kolom 1: Tentang Bank */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              BANK ARTHA KARYA PERDANA
            </h4>
            <p className="text-sm leading-relaxed">
              Bank AKP atau Bank Artha Karya Perdana merupakan Bank yang sudah beroperasi sejak 2004. Bank AKP merupakan Bank Perekonomian Rakyat atau BPR yang sama seperti Bank Umum lainnya. Kami berupaya untuk memberikan pelayanan serta produk terbaik untuk memenuhi kebutuhan anda. Kami berharap dapat membantu mensejahterakan rakyat indonesia dengan memberikan produk dan layanan keuangan yang mudah didapatkan.
            </p>
          </div>

          {/* Kolom 2: Kontak Kami */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Kontak Kami
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <IconWhatsApp />
                <div className="ml-3">
                  <span className="font-semibold text-white">WhatsApp</span><br/>
                  <a href="tel:085183260228" className="hover:text-white transition-colors">
                    085183260228
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <IconEmail />
                <div className="ml-3">
                  <span className="font-semibold text-white">Email</span><br/>
                  <a href="mailto:akpcare@bankakp.co.id" className="hover:text-white transition-colors">
                    akpcare@bankakp.co.id
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <IconAlamat />
                <div className="ml-3">
                  <span className="font-semibold text-white">Alamat</span><br/>
                  Jalan Panglima Batur Komp. Citra Niaga Blok A1 Samarinda – Kalimantan Timur
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Ikuti Kami & Legalitas */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Ikuti Kami
            </h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://x.com/bankakp.id" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter"><IconTwitter /></a>
              <a href="https://www.instagram.com/bankakp.id" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><IconInstagram /></a>
              <a href="https://web.facebook.com/bankakp.id" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook"><IconFacebook /></a>
            </div>
            <p className="text-sm mb-6">
              Ikuti kami pada sosial media untuk mendapatkan informasi menarik lainnya.
            </p>

            {/* Legalitas (Pindahan dari kode lama) */}
            <h4 className="text-lg font-bold text-white mb-4">
              Legalitas
            </h4>
            <p className="text-sm mb-4">
              Berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK) serta merupakan peserta penjaminan Lembaga Penjamin Simpanan (LPS).
            </p>
            <div className="flex space-x-4 items-center">
              <img src="/logo-ojk.png" alt="Logo OJK" className="h-10" />
              <img src="/logo-lps.png" alt="Logo LPS" className="h-10" />
            </div>
          </div>

        </div>

        {/* Garis Pemisah & Copyright */}
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-sm">
          © {new Date().getFullYear()} PT Bank Artha Karya Perdana. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;