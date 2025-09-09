import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-xl md:text-2xl mb-8">
        Creating amazing experiences with React & Tailwind CSS
      </p>
      <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-200 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;

