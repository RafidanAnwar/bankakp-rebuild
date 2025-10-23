import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import PromoHome from '../components/PromoHome'; // <-- GANTI NAMA DI SINI
import BeritaPreview from '../components/BeritaPreview';
import WhyUs from '../components/WhyUs';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <PromoHome /> {/* <-- GANTI NAMA DI SINI */}
      <BeritaPreview />
      <WhyUs />
    </>
  );
};

export default Home;