'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  title: string;
  image: string;
  rate: number;
  discountedRate: number;
}

export default function ProductSection() {
  const products: Product[] = [
    {
      id: 1,
      title: "Tea and Coffee",
      image: "/images/products/Tea-Coffee.jpg",
      rate: 1200,
      discountedRate: 999
    },
    {
      id: 2,
      title: "Dry Fruits",
      image: "/images/products/Dryfruits.jpg",
      rate: 1500,
      discountedRate: 1299
    },
    {
      id: 3,
      title: "Healthy Seeds",
      image: "/images/products/Healthy-Seeds.jpg",
      rate: 800,
      discountedRate: 699
    },
    {
      id: 4,
      title: "Spices",
      image: "/images/products/Spices.jpg",
      rate: 600,
      discountedRate: 499
    },
    {
      id: 5,
      title: "Grains",
      image: "/images/products/Grains.jpg",
      rate: 900,
      discountedRate: 799
    },
    {
      id: 6,
      title: "Dried Flowers",
      image: "/images/products/flowers.jpg",
      rate: 900,
      discountedRate: 799
    },
        {
      id: 7,
      title: "Oil",
      image: "/images/products/oil.jpg",
      rate: 900,
      discountedRate: 799
    },
        {
      id: 8,
      title: "Pulses",
      image: "/images/products/pulses.jpg",
      rate: 900,
      discountedRate: 799
    },

  ];

  const handleBuyClick = (productTitle: string) => {
    const message = `I'm interested in buying ${productTitle}`;
    const whatsappUrl = `https://wa.me/918866034343?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="product-section" className="py-24 bg-[#f7f9f4]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">Our Products</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c5530] mt-4 mb-6">Featured Product Categories</h2>
          <p className="text-[#5e724d] text-lg">Discover our curated selection of organic products, sourced directly from nature to your table.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2c5530]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2c5530] mb-3">{product.title}</h3>
                  <p className="text-[#5e724d] mb-4">Premium quality organic products</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3d7344] font-semibold">Contact for Pricing</span>
                    <button
                      onClick={() => handleBuyClick(product.title)}
                      className="bg-[#2c5530]/10 text-[#2c5530] py-2 px-4 rounded-full hover:bg-[#2c5530] hover:text-white transition-colors duration-300"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
            {/* <button className="bg-[#3d7344] text-white px-8 py-3 rounded-full hover:bg-[#2c5530] transition-colors text-lg font-semibold inline-flex items-center gap-2">
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button> */}
        </div>
      </div>
    </section>
  );
} 