import React from 'react';
import { Link } from 'react-router-dom';

const Promo = () => {
  return (
    // GANTI bg-blue-50 -> bg-white (agar selang-seling dengan bg-teal-50)
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden">
          
          <div className="md:w-1/2">
            <div 
              className="h-64 md:h-full w-full bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDE3fHxob3VzZSUyMGxvYW58ZW58MHx8fHwxNzI5NjkzMTgxfDA&ixlib.rb-4.0.3&q=80&w=1080')" }}
            >
              <span className="sr-only">Promo Gebyar Untung</span>
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            {/* GANTI text-blue-600 -> text-teal-600 */}
            <h2 className="text-sm font-bold uppercase text-teal-600 mb-2">
              PROMO UNTUK ANDA
            </h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Gebyar Untung, Promo Melimpah!
            </h3>
            <p className="text-gray-600 mb-6">
              Beli motor impian semakin mudah dengan promo spesial dari Bank AKP. 
              Dapatkan bunga ringan dan proses cepat khusus untuk nasabah di Samarinda.
            </p>
            <div className="flex-shrink-0">
              {/* GANTI bg-blue-600 -> bg-orange-400 (Tombol CTA Utama) */}
              <Link
                to="/promo"
                className="inline-block bg-orange-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-orange-500 transition-colors"
              >
                Lihat Promo Selengkapnya
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Promo;