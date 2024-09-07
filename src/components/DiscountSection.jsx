import React from 'react';

const DiscountSection = () => {
  return (
    <section className="bg-green-500 py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Limited Time Offer!</h2>
        <p className="text-lg mb-6">Get 40% off on your first subscription to our AI English Tutor. Don't miss out on this exclusive discount!</p>
        <div className="flex justify-center mb-8">
          <div className="bg-white text-green-500 p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-3xl font-bold mb-4">40% OFF</h3>
            <p className="text-xl mb-4">Subscribe now and save big on your first month. Experience personalized English learning with our advanced AI tutor.</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">Subscribe Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
