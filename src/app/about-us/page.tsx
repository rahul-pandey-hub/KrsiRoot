'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PiFarmDuotone } from "react-icons/pi";
import { FaTractor } from "react-icons/fa";
import { BsShop } from "react-icons/bs";

// AnimatedSection component
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection = ({ children, className = "" }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#e6eee7]">
      <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\">%3Cg fill=\\"%23000000\\" fill-opacity=\\"1\\" fill-rule=\\"evenodd\\">%3Ccircle cx=\\"3\\" cy=\\"3\\" r=\\"3\\"/%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '24px 24px',
            }}
          ></div>
        </div>


        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#2c5530] mt-4 mb-6">
              About Us
            </h1>
            <p className="text-2xl text-[#000000] font-bold">
            Our Journey to Organic Excellence
            Discover how we're revolutionizing the organic farming landscape through sustainable practices and farmer empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#f7f9f4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products/pulses.jpg"
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#a8e6cf]/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#a8e6cf] rounded-full opacity-20"></div>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2c5530] mt-4 mb-6">Rooted in Nature, Inspired by संस्कार</h2>
              <div className="space-y-4 text-[#5e724d]">
                <p>At KrsiRoots Organics, we believe in going back to our roots — where nature, purity, and tradition guide every choice. Founded with a passion to bridge the gap between ancient organic wisdom and today's conscious consumer, we are a dedicated trading company bringing together the finest organic products from India's soil to the world.</p>
                <p>Rooted in authenticity and inspired by संस्कार (values), we work directly with trusted farmers and producers to ensure that every product we trade reflects our commitment to sustainability, health, and ethical sourcing.</p>
                <p>From dried herbs, flowers, and roots to cow dung-based products, natural teas, and organic spices, our offerings are carefully curated, processed, and packed to retain maximum potency — free from chemicals, synthetic additives, or shortcuts.</p>
              </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#e6eee7]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">Our Vision</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c5530] mt-4 mb-6">Empowering Organic Growth</h2>
            <p className="text-xl text-[#5e724d] italic">"To be a trusted leader in organic trading, fostering healthier communities and a sustainable planet for all."</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <PiFarmDuotone className="text-5xl" />,
                title: "Community",
                description: "Building fair partnerships that empower farmers and educate consumers."
              },
              {
                icon: <FaTractor className="text-5xl" />,
                title: "Sustainability",
                description: "Supporting farming practices that protect our planet for future generations."
              },
              {
                icon: <BsShop className="text-5xl" />,
                title: "Quality",
                description: "Ensuring the highest standards in organic product certification and delivery."
              }
            ].map((item, index) => (
                <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-[#f7f9f4] p-8 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-[#a8e6cf] rounded-full flex items-center justify-center mb-6 mx-auto text-[#2c5530]">
                  {item.icon}
              </div>
                <h3 className="text-xl font-bold text-[#2c5530] mb-4 text-center">{item.title}</h3>
                <p className="text-[#5e724d] text-center">{item.description}</p>
                </motion.div>
            ))}
              </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-[#f7f9f4]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">Our Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c5530] mt-4 mb-6">Quality Assured</h2>
            <p className="text-[#5e724d]">We maintain the highest quality standards through rigorous certification processes for organic products.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "USDA Organic", image: "/images/certifications/Usda-npop.jpg" },
              { name: "Organic India", image: "/images/certifications/organic-india.jpg" },
              { name: "Jaivik Bharat", image: "/images/certifications/jaivik-bharat.png" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#f7f9f4] p-8 rounded-2xl text-center"
              >
                <div className="relative h-32 mb-6">
                <Image
                    src={cert.image}
                    alt={cert.name}
                  fill
                  className="object-contain"
                />
                </div>
                <h3 className="text-xl font-bold text-[#2c5530]">{cert.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />  
    </main>
  );
} 