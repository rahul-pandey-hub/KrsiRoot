'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
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
            <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2c5530] mt-4 mb-6">Comprehensive Organic Solutions</h1>
            <p className="text-xl text-[#5e724d]">From farm to table, we provide end-to-end services for organic farming and distribution.</p>
          </motion.div>
        </div>
      </section>

      {/* Buyers Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">For Buyers</span>
            <h2 className="text-4xl font-bold text-[#2c5530] mt-4 mb-6">Premium Organic Solutions</h2>
            <p className="text-xl text-[#5e724d]">Quality organic products with complete transparency and support.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Verified Quality",
                description: "Certified organic products, guaranteed safe and trustworthy.",
                icon: "🏅",
              },
              {
                title: "Competitive Pricing",
                description: "Direct producer partnerships ensuring transparent and fair pricing.",
                icon: "💰",
              },
              {
                title: "Product Variety",
                description: "A complete range of organic produce all under one roof.",
                icon: "🌾",
              },
              {
                title: "Customer Support",
                description: "Seamless assistance and after-sales service tailored for bulk or repeat purchases.",
                icon: "🤝",
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f7f9f4] rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#2c5530] mb-4">{service.title}</h3>
                <p className="text-[#5e724d] mb-6">{service.description}</p>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sellers Services Section */}
      <section className="py-20 bg-[#f7f9f4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">For Sellers</span>
            <h2 className="text-4xl font-bold text-[#2c5530] mt-4 mb-6">Comprehensive Seller Support</h2>
            <p className="text-xl text-[#5e724d]">Empowering farmers and producers with tools for success.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Product Discovery",
                description: "An integrated ecosystem connecting farmers with buyers and exporters in a fair and transparent way.",
                icon: "🔍",
              },
              {
                title: "Price Assurance & Transparency",
                description: "Transparent pricing models ensuring farmers and sellers receive the true worth of their produce.",
                icon: "📊",
              },
              {
                title: "Export Facilitation",
                description: "Helping sellers navigate global trends, meet compliance needs, and connect with export buyers.",
                icon: "🌍",
              },
              {
                title: "Organic Certification Support",
                description: "Support for farmers and producers in securing official certifications for recognized organic standards.",
                icon: "📜",
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#2c5530] mb-4">{service.title}</h3>
                <p className="text-[#5e724d] mb-6">{service.description}</p>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#2c5530]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#a8e6cf] text-sm font-semibold tracking-wider uppercase">Our Process</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">How We Work</h2>
            <p className="text-[#e6eee7] text-lg">Our streamlined process ensures quality and efficiency at every step.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "Thorough evaluation of farming practices and requirements."
              },
              {
                step: "02",
                title: "Implementation",
                description: "Setting up organic farming processes and systems."
              },
              {
                step: "03",
                title: "Monitoring",
                description: "Regular quality checks and process optimization."
              },
              {
                step: "04",
                title: "Distribution",
                description: "Efficient delivery to markets and consumers."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-[#a8e6cf] text-4xl font-bold mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-[#e6eee7]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f7f9f4]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#2c5530] mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-[#5e724d] mb-8">Join us in revolutionizing organic farming and distribution.</p>
            <button className="bg-[#2c5530] text-white px-8 py-4 rounded-full hover:bg-[#3d7344] transition-colors text-lg font-semibold">
              <Link href="/contact-us">
                Contact Us Todayf
              </Link>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}