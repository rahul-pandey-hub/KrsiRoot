'use client';

import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <div className="bg-primary/10 py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-primary text-center"
        >
          KrsiRoots Blog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-center mt-4 max-w-2xl mx-auto"
        >
          Insights on organic farming, sustainable practices, and healthy living
        </motion.p>
      </div>
    </div>
  );
} 