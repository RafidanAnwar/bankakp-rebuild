import React, { useState, useEffect } from 'react'; // Impor useState dan useEffect
import { Outlet } from 'react-router-dom'; 

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Ini untuk navigasi halaman

// --- IKON UNTUK TOMBOL BARU ---
// Ikon WhatsApp
const WhatsAppIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M.057 24L1.987 18.09C.742 16.14.07 13.83.07 11.4C.07 5.11 5.18 0 11.47 0C14.56 0 17.34 1.18 19.45 3.3C21.55 5.4 22.73 8.2 22.73 11.29C22.73 17.58 17.62 22.69 11.34 22.69C9.03 22.69 6.81 22.02 4.96 20.88L.057 24zm6.59-3.8C8.26 21.01 9.77 21.5 11.34 21.5C16.81 21.5 21.28 17.03 21.28 11.56C21.28 8.87 20.21 6.48 18.49 4.75C16.76 3.02 14.37 1.96 11.68 1.96C6.21 1.96 1.74 6.43 1.74 11.9C1.74 14.12 2.39 16.2 3.6 17.93L3.8 18.23L2.86 21.14L5.75 20.2L6 20.4C6.59 20.17 7.2 20.06 7.82 20.06h.01m6.6-9.13c-.34-.17-2-.98-2.31-1.1c-.31-.12-.53-.17-.76.17c-.22.34-.87 1.1-.97 1.22c-.1.12-.2.12-.37 0c-.17-.12-.71-.25-1.35-.83c-.5-.45-.84-.97-1.1-1.35c-.12-.17-.01-.27.1-.39c.1-.1.22-.27.33-.4c.1-.12.17-.22.25-.37c.1-.12.05-.22-.02-.39c-.07-.17-.63-1.52-.87-2.1c-.24-.58-.48-.5-.65-.5c-.17 0-.37 0-.53.05c-.17.05-.42.17-.65.42c-.22.25-.87.85-1.07 2.05c-.2 1.2.87 2.37.97 2.54c.1.17 1.76 2.67 4.25 3.75c.58.25 1.03.4 1.39.52c.36.12.68.1.92-.05c.24-.12.76-.3.87-.58c.1-.27.1-.53.07-.65c-.02-.12-.17-.17-.34-.34z"/>
  </svg>
);

// Ikon Panah ke Atas
const ArrowUpIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);
// --- AKHIR IKON ---


function App() {
  // --- LOGIKA UNTUK SCROLL TO TOP BUTTON ---
  const [isVisible, setIsVisible] = useState(false);

  // Tampilkan tombol saat scroll lebih dari 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll ke atas
  const scrollToTopOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Tambahkan event listener saat komponen dimuat
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Hapus event listener saat komponen dibongkar
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  // --- AKHIR LOGIKA ---


  return (
    <div className="bg-white text-gray-800 antialiased flex flex-col min-h-screen">
      <ScrollToTop /> {/* Komponen ini untuk pindah halaman */}
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* --- TOMBOL FLOATING BARU --- */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
        {/* Tombol WhatsApp */}
        <a
          href="https://wa.me/6285183260228" // Nomor WA Bank AKP
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Chat di WhatsApp"
        >
          <WhatsAppIcon />
        </a>

        {/* Tombol Scroll to Top (muncul saat 'isVisible' true) */}
        {isVisible && (
          <button
            onClick={scrollToTopOnClick}
            className="bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-opacity"
            aria-label="Kembali ke atas"
          >
            <ArrowUpIcon />
          </button>
        )}
      </div>
      {/* --- AKHIR TOMBOL FLOATING --- */}
    </div>
  );
}

export default App;