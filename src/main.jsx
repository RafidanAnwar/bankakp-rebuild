import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Impor Layout Utama
import App from './App'; 

// Impor Halaman-Halaman
import Home from './pages/Home';
import Produk from './pages/Produk';
import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail';
import Lowongan from './pages/Lowongan';
import LowonganDetail from './pages/LowonganDetail';
import Informasi from './pages/Informasi';
// 1. IMPOR HALAMAN BARU
import Laporan from './pages/Laporan';
import NotFound from './pages/NotFound';
import PromoPage from './pages/PromoPage';
import PromoDetail from './pages/PromoDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <Home /> },
      { path: "produk", element: <Produk /> },
      { path: "berita", element: <Berita /> },
      { path: "berita/:id", element: <BeritaDetail /> },
      { path: "lowongan", element: <Lowongan /> },
      { path: "lowongan/:id", element: <LowonganDetail /> },
      { path: "informasi", element: <Informasi /> },
      
      // 2. TAMBAHKAN RUTE LAPORAN DI SINI
      {
        path: "laporan",
        element: <Laporan />,
      },
      {
        path: "promo",
        element: <PromoPage />,
      },
      {
        path: "promo/:id",
        element: <PromoDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);