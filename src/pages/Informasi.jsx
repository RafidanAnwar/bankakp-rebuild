import React from 'react';
import { dataFaq } from '../data/faq.js';
import FaqItem from '../components/FaqItem.jsx';
import PageHero from '../components/PageHero.jsx';

const Informasi = () => {
  return (
    <div className="bg-white min-h-[70vh]">
      <PageHero
        title="Informasi & Bantuan"
        subtitle="Kami siap membantu Anda. Temukan jawaban atau hubungi kami langsung."
        breadcrumbs="Beranda | Informasi"
      />

      {/* Konten Halaman (Grid) */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hubungi Kami</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                {/* GANTI focus:ring-blue-500 -> focus:ring-teal-500 */}
                <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                {/* GANTI focus:ring-blue-500 -> focus:ring-teal-500 */}
                <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Pesan Anda</label>
                {/* GANTI focus:ring-blue-500 -> focus:ring-teal-500 */}
                <textarea id="message" rows="5" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"></textarea>
              </div>
              <div>
                {/* GANTI bg-blue-600 -> bg-teal-600 */}
                <button type="submit" disabled className="w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-700 transition-colors disabled:bg-gray-400">
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Info Kontak</h2>
            {/* GANTI bg-gray-50 -> bg-teal-50 */}
            <div className="bg-teal-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kantor Pusat Samarinda</h3>
              <p className="text-gray-600 mb-4">
                Jalan Panglima Batur Komp. Citra Niaga Blok A1 Samarinda – Kalimantan Timur
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Whatsapp</h3>
              {/* GANTI text-blue-600 -> text-teal-600 */}
              <p className="text-gray-600 mb-4 text-teal-600 hover:underline">0851-8326-0228</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              {/* GANTI text-blue-600 -> text-teal-600 */}
              <p className="text-gray-600 mb-4 text-teal-600 hover:underline">akpcare@bankakp.co.id</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Peta Lokasi */}
      {/* GANTI bg-gray-50 -> bg-teal-50 */}
      <div className="bg-teal-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lokasi Kami</h2>
          <div className="w-full overflow-hidden rounded-lg shadow-xl" style={{ height: '450px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6651419291134!2d117.14643557434687!3d-0.5020664994930045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67fa0048097d5%3A0x60f2bd98eda554ab!2sBPR%20Artha%20Karya%20Perdana!5e0!3m2!1sid!2sid!4v1761201402423!5m2!1sid!2sid" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Bagian FAQ */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <div className="space-y-4">
            {dataFaq.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Informasi;