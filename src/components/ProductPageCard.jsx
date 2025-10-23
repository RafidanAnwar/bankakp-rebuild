import React from 'react';

// GANTI text-green-500 -> text-teal-500
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
  </svg>
);

const ProductPageCard = ({ icon, title, description, benefits }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-12 transform hover:shadow-2xl transition-shadow duration-300">
      {/* GANTI bg-blue-50 -> bg-teal-50 & text-blue-600 -> text-teal-600 */}
      <div className="md:w-1/3 bg-teal-50 flex items-center justify-center p-8 text-teal-600">
        {icon}
      </div>
      
      <div className="md:w-2/3 p-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-lg mb-6">{description}</p>
        
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon />
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-8">
          {/* GANTI bg-blue-600 -> bg-teal-600 */}
          <a
            href="#"
            className="inline-block bg-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;