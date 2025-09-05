'use client';

import { motion } from 'framer-motion';

export default function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <section className="py-24 bg-[#f7f9f4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000000" fill-opacity="1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '24px 24px'
        }}></div>
      </div>
 {/* className="bg-[#a8e6cf] rounded-2xl p-12 flex flex-col items-center justify-center min-h-[400px]" */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex  items-center justify-center">
        <div className="bg-[#2c5530] rounded-3xl overflow-hidden">
          <div className="items-center">
            {/* Content Side */}
            <div className="p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-[#a8e6cf] text-sm font-semibold tracking-wider uppercase">Newsletter</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Join Our Organic Community</h2>
                <p className="text-[#e6eee7] text-lg mb-8">Subscribe to our newsletter and stay updated with the latest news, organic farming tips, and exclusive offers.</p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="flex-grow px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a8e6cf] bg-white/90 backdrop-blur-sm placeholder-gray-500"
                      required
                    />
                    <button 
                      type="submit" 
                      className="bg-[#a8e6cf] text-[#2c5530] px-8 py-4 rounded-xl hover:bg-white transition-colors duration-300 font-semibold flex items-center justify-center gap-2 group"
                    >
                      Subscribe
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </form>
                
                <p className="mt-6 text-[#e6eee7] text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </motion.div>
            </div>

            {/* Image Side */}
            
          </div>
        </div>
      </div>
    </section>
  );
}