import React, { useState } from 'react';

// Ikon panah
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform duration-300">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const FaqItem = ({ question, answer }) => {
  // 'useState' untuk melacak apakah item ini sedang terbuka atau tertutup
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      {/* Tombol Pertanyaan */}
      <button
        onClick={() => setIsOpen(!isOpen)} // Toggle state saat diklik
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {/* Putar ikon panah berdasarkan state 'isOpen' */}
        <span className={`${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown />
        </span>
      </button>
      
      {/* Konten Jawaban (Muncul jika 'isOpen' true) */}
      {isOpen && (
        <div className="pb-5 pr-10">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;