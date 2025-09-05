'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  

  return (
    <section className="hero relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="https://www.pexels.com/download/video/5480220/" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[#e6eee7]/40"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#2c5530] mb-6 leading-tight">
            Rooted in Nature,<br/> Inspire by <span className="text-[#2c5535]">संस्कार</span>
          </h1>
          <p className="text-xl md:text-2xl text-black mb-12">
            Organic • Local • Global
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#a8e6cf] text-[#2c5530] rounded-full hover:bg-[#e6eee7] transition-colors text-lg font-semibold">
              Explore Products
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-[#2c5530] text-[#2c5530] rounded-full hover:bg-[#2c5530] hover:text-white transition-colors text-lg font-semibold">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[#2c5530] text-4xl cursor-pointer"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}