import React from 'react';

export default function ContactForm() {
  return (
    <section id="contactus" className="bg-teal-900 text-white py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form className="mt-6 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded text-black" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded text-black" />
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 rounded text-black"></textarea>
          <button type="submit" className="bg-teal-600 hover:bg-teal-400 px-6 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
