'use client';

import { useEffect } from 'react';
import {
  faHandshakeSimple,
  faGlobe,
  faTruckFast,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { color, motion } from 'framer-motion';

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
      <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: faHandshakeSimple,
      title: 'Direct from Farms and Farmers',
      description: 'Connects organic farmers directly with buyers and exporters through a simple, transparent digital platform.',
      color: '#F4A261'
    },
    {
      icon: faGlobe,
      title: 'One Platform. Multiple Solutions.',
      description: 'rsiRoots bridges the organic world using smart technology, full transparency, and a foundation of trust.',
      color: '#E2725B'
    },
    {
      icon: faTruckFast,
      title: 'Logistics & Delivery Support',
      description: 'Offers packaging, warehousing, and transport services to optimize supply chains and ensure fast delivery.',
      color: '#9B4D6E'
    },
    {
      icon: faEarthAmericas,
      title: 'Global Market and Sourcing Access',
      description: 'Connect to local and export markets through our trusted sourcing network—reach more buyers worldwide.',
      color: '#6B8E23'
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <IconStatCard
                icon={stat.icon}
                title={stat.title}
                description={stat.description}
                color={stat.color}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}