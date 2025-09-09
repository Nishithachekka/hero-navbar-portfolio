import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-xl">Creating amazing experiences with React & Tailwind CSS 🚀</p>
      <button className="mt-6 bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold">
        Get Started
      </button>
    </section>
  );
};

export default Hero; // ✅ Only one default export


