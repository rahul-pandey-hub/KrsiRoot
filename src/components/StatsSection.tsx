'use client';

import { useEffect } from 'react';
import {
  faHandshakeSimple,
  faGlobe,
  faLeaf,
  faBoxOpen,
  faTruckFast,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from 'framer-motion';

function IconStatCard({ 
  icon, 
  title, 
  description, 
  color 
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="stat-card bg-opacity-10 p-8 rounded-2xl text-center" style={{ backgroundColor: `${color}15`, minHeight: '290px' }}>
      <div className="mb-4">
        <FontAwesomeIcon 
          icon={icon} 
          className="text-5xl"
          style={{ color: color }}
        />
      </div>
      <h3 className="text-xl font-semibold text-[#2c5530] mb-2">{title}</h3>
      <p className="text-[#5e724d]">{description}</p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: faLeaf, // freshness / organic
      title: 'Freshness Without Middlemen',
      description: 'Direct farm-to-table connections ensure unmatched freshness, transparency, and fair value.',
      color: '#2c5530'
    },
    {
      icon: faGlobe, // represents "platform / global"
      title: 'One Platform. Endless Organic Possibilities',
      description: 'A unified digital hub to explore, trade, and grow within the organic ecosystem.',
      color: '#3d7344'
    },
    {
      icon: faBoxOpen, // represents delivery / hassle-free
      title: 'Premium Organics, Zero Hassle',
      description: 'Enjoy the finest organic products delivered with uncompromising quality and a seamless, stress-free experience.',
      color: '#5e724d'
    },
    {
      icon: faEarthAmericas, // represents "infinite markets"
      title: 'One Platform, Infinite Markets',
      description: 'Expand your reach from local communities to global buyers through trusted sourcing networks.',
      color: '#1c3a1f'
    }
  ];


  useEffect(() => {
    const createCountUpAnimation = () => {
      const counters = document.querySelectorAll('.counter');
      
      counters.forEach((counter: any) => {
        const target = +counter.getAttribute('data-target');
        const duration = 5000; // 2 seconds
        const start = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime: number) {
          const elapsedTime = currentTime - startTime;
          
          if (elapsedTime < duration) {
            const progress = elapsedTime / duration;
            const currentValue = Math.floor(start + progress * (target - start));
            counter.textContent = currentValue;
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        }
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              requestAnimationFrame(updateCounter);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        
        observer.observe(counter);
      });
    };

    createCountUpAnimation();
  }, []);

  return (
    <section className="py-24 bg-[#2c5530] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#a8e6cf] text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Empowering Organic Growth</h2>
          <p className="text-[#e6eee7] text-lg">We connect farmers and consumers through sustainable practices and transparent relationships.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 h-80 flex flex-col justify-between">
                <div>
                  <div className="inline-block p-4 rounded-full bg-[#a8e6cf] mb-6">
                    <FontAwesomeIcon 
                      icon={stat.icon} 
                      className="text-4xl text-[#2c5530]"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{stat.title}</h3>
                </div>
                <p className="text-[#e6eee7]">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}