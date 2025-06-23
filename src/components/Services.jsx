import React from 'react';

import cyberImg from '../assets/Services/cyber-security1.jpeg';
import telecomImg from '../assets/Services/tele3.jpeg';
import cloudImg from '../assets/Services/cloud2.jpeg';
import managedImg from '../assets/Services/MSP2.png';
import consultancyImg from '../assets/Services/consultancy2.jpeg';
import webAppImg from '../assets/Services/web1.jpeg';

const services = [
  {
    title: "Cyber Security",
    image: cyberImg,
    description: "Protect your business with comprehensive security solutions, including threat detection, firewall management, and data encryption."
  },
  {
    title: "Telecom",
    image: telecomImg,
    description: "Streamline communication with advanced VoIP, PBX systems, and unified communication services tailored to your organization's needs."
  },
  {
    title: "Cloud Computing",
    image: cloudImg,
    description: "Accelerate your digital transformation with scalable cloud solutions including migration, deployment, and cost optimization."
  },
  {
    title: "Managed IT",
    image: managedImg,
    description: "Let us manage your IT infrastructure with 24/7 monitoring, remote support, and regular maintenance to ensure uptime and efficiency."
  },
  {
    title: "Consultancy",
    image: consultancyImg,
    description: "Get expert guidance on IT strategy, compliance, and digital innovation to align technology with your business goals."
  },
  {
    title: "Web & Business App Development",
    image: webAppImg,
    description: "We build responsive websites and robust business applications to streamline workflows and improve customer engagement."
  }
];

export default function Services() {
  return (
    <section id="it-solutions" className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-10">
          Our IT Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ title, description, image }) => (
            <div
              key={title}
              className="relative overflow-hidden rounded-2xl shadow-lg group aspect-[4/3]"
            >
              {/* Background image with zoom on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              ></div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Text content */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
                <h3 className="text-xl font-bold drop-shadow-md">{title}</h3>
                <p className="mt-2 text-sm drop-shadow-md">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
