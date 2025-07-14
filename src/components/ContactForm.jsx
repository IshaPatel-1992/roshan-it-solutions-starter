import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_i19x4ln',    // Replace with your EmailJS Service ID
      'template_a54j1lm',   // Replace with your EmailJS Template ID 
      formRef.current,
      '-EJcj8U8XwGP3JJoh'     // Replace with your EmailJS Public Key
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      alert('Failed to send message. Please try again later.');
      console.error(error);
    });
  };

  return (
    <section id="contactus" className="bg-teal-900 text-white py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form ref={formRef} onSubmit={sendEmail} className="mt-6 space-y-4">
          <input type="text" name="user_name" placeholder="Your Name" required className="w-full px-4 py-2 rounded text-black" />
          <input type="email" name="user_email" placeholder="Your Email" required className="w-full px-4 py-2 rounded text-black" />
          <textarea name="message" placeholder="Your Message" rows="4" required className="w-full px-4 py-2 rounded text-black"></textarea>
          <button type="submit" className="bg-teal-600 hover:bg-teal-400 px-6 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
// Make sure to replace 'your_service_id', 'your_template_id', and 'your_public_key' with your actual EmailJS credentials.