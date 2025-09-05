'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[#f7f9f4]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2c5530] mt-4 mb-6">Our Organic Promise</h2>
              <p className="text-lg text-[#5e724d] mb-10">
                To deliver high-quality organic products through ethical sourcing, empowering farmers, delighting customers, and ensuring value for every stakeholder in our journey toward sustainability.     
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[#f7f9f4] p-6 rounded-2xl hover:bg-[#e6eee7] transition-colors duration-300">
                  <div className="bg-[#2c5530] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-leaf text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c5530] mb-2">100% Organic</h3>
                  <p className="text-[#5e724d]">No synthetic pesticides, herbicides, or GMOs</p>
                </div>
                
                <div className="bg-[#f7f9f4] p-6 rounded-2xl hover:bg-[#e6eee7] transition-colors duration-300">
                  <div className="bg-[#3d7344] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-tractor text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c5530] mb-2">Farmer's Network</h3>
                  <p className="text-[#5e724d]">Direct partnership with organic farmers</p>
                </div>
                
                <div className="bg-[#f7f9f4] p-6 rounded-2xl hover:bg-[#e6eee7] transition-colors duration-300">
                  <div className="bg-[#5e724d] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-inr text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c5530] mb-2">Fair Pricing</h3>
                  <p className="text-[#5e724d]">Transparent and competitive pricing</p>
                </div>
                
                <div className="bg-[#f7f9f4] p-6 rounded-2xl hover:bg-[#e6eee7] transition-colors duration-300">
                  <div className="bg-[#2c5530] text-white p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                    <i className="fas fa-certificate text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2c5530] mb-2">Quality Assured</h3>
                  <p className="text-[#5e724d]">Rigorous quality control standards</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/df61535a-1343-42b3-803a-71b113c6f338.png" 
                alt="Organic farming" 
                width={700}
                height={700}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c5530]/30 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#a8e6cf] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#2c5530] rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}