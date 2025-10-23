import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Komponen ini akan membaca perubahan 'pathname' (URL)
// dan menjalankan 'window.scrollTo(0, 0)' setiap kali ada perubahan.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // 'useEffect' ini akan re-run setiap kali 'pathname' berubah

  return null; // Komponen ini tidak merender apapun
};

export default ScrollToTop;