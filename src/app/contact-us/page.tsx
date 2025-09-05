'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#f7f9f4]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000000" fill-opacity="1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '24px 24px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2c5530] mt-4 mb-6">Get in Touch</h1>
            <p className="text-xl text-[#5e724d]">Have questions? We're here to help and provide more information about our organic services.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#2c5530] mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f7f9f4] p-4 rounded-lg">
                    <svg className="w-6 h-6 text-[#2c5530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2c5530]">Address</h3>
                    <p className="text-[#5e724d]">Ahmedabad, Gujarat</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f7f9f4] p-4 rounded-lg">
                    <svg className="w-6 h-6 text-[#2c5530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2c5530]">Email</h3>
                    <a href="mailto:dovetailindiaservices@gmail.com" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">
                      dovetailindiaservices@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f7f9f4] p-4 rounded-lg">
                    <svg className="w-6 h-6 text-[#2c5530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2c5530]">Phone</h3>
                    <a href="tel:+918866034343" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">
                      +91 8866034343
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f7f9f4] p-4 rounded-lg">
                    <svg className="w-6 h-6 text-[#2c5530]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2c5530]">Business Hours</h3>
                    <p className="text-[#5e724d]">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-[#5e724d]">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-[#f7f9f4] p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-[#2c5530] mb-8">Send us a Message</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#2c5530] font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#e6eee7] focus:outline-none focus:ring-2 focus:ring-[#2c5530]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#2c5530] font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#e6eee7] focus:outline-none focus:ring-2 focus:ring-[#2c5530]"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[#2c5530] font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#e6eee7] focus:outline-none focus:ring-2 focus:ring-[#2c5530]"
                      placeholder="Message subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#2c5530] font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-[#e6eee7] focus:outline-none focus:ring-2 focus:ring-[#2c5530] resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2c5530] text-white py-4 rounded-lg hover:bg-[#3d7344] transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#f7f9f4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717754748!2d72.43965538473068!3d23.020497766767986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710493114621!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}