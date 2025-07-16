import React, { useEffect, useState } from "react";
import banner4 from "../assets/banners/b4.avif";

const banners = [banner4];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={banners[currentIndex]}
        alt="Hero Banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Overlay content */}
      <div className="relative z-10 text-center px-4 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl leading-tight">
          Innovate. Transform. Lead.
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-sm max-w-2xl mx-auto">
          Empowering digital transformation through cutting-edge IT solutions.
        </p>
        <a
  href="#contactus"
  className="mt-8 inline-block bg-teal-600 hover:bg-teal-500 px-6 py-3 rounded-full text-white font-semibold transition duration-300 shadow-md"
>
  Get Started
</a>

      </div>
    </section>
  );
}
