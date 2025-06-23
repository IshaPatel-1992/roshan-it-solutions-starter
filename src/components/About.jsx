import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-teal-800 tracking-tight">Who We Are</h2>
        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          <span className="italic text-teal-600 font-medium">Janvi Technologies</span> is your partner in digital transformation, delivering modern IT solutions that are secure, scalable, and smart. 
          From <span className="font-semibold text-gray-800">cybersecurity</span> to <span className="font-semibold text-gray-800">cloud integration</span>, we help businesses innovate with confidence.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 text-left">
          <div>
            <h3 className="text-2xl font-bold text-teal-700">Our Approach</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              We embrace a <span className="font-medium">human-centered</span> approach, combining design thinking, technical expertise, and 
              practical consultancy to create impactful solutions. Whether in healthcare, legal, dental, accounting, or hospitality — 
              we tailor our services to meet your unique challenges.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-teal-700">Our Partners</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Our strategic alliances with <span className="font-medium">Microsoft, Dell, HPE, Telus, Cisco, and United Cloud</span> 
              ensure access to cutting-edge technologies and industry best practices. We bring enterprise-grade solutions to businesses of all sizes.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-teal-700">What We Offer</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Whether you're seeking robust <span className="font-medium">cybersecurity</span>, scalable <span className="font-medium">telecom infrastructure</span>, 
              or future-ready <span className="font-medium">web and mobile development</span>, Janvi Technologies is with you every step of the way. 
              Let’s build your digital future — together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
