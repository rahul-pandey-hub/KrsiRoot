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
      title: "Flowers",
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Our Featured Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold text-gray-800 mb-2">{product.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  {/* <span className="text-gray-500 line-through">₹{product.rate}</span> */}
                  <span className="text-green-600 font-bold">Contact for Pricing</span>
                </div>
                <button
                  onClick={() => handleBuyClick(product.title)}
                  className="w-full bg-[#01040f] text-white py-2 px-4 rounded-md hover:bg-[#01040f]/90 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 