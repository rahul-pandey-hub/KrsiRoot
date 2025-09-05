'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: "revolutionizing-organic-shopping",
    title: "Revolutionizing Organic Shopping: Inside Our Sustainable Marketplace",
    date: "2025-04-29",
    author: "Ravi Pandey",
    authorRole: "Code Harvester",
    readTime: "5 min read",
    image: "/images/blog/blog-1.png",
    excerpt: "Discover how KrsiRoots is transforming the organic food industry by connecting farmers directly with global consumers through sustainable practices and technology.",
    category: "E-commerce"
  },
  {
    id: "rising-demand-for-clean-label-products",
    title: "The Rise of Clean Label: What It Means for the Organic Industry",
    date: "2025-04-30",
    author: "Ravi Pandey",
    authorRole: "Code Harvester",
    readTime: "5 min read",
    image: "/images/blog/blog-2.png",
    excerpt: "Clean label is more than a trend—it's a movement reshaping how consumers view organic food. Learn how transparency, simplicity, and trust are driving growth.",
    category: "Food Trends"
  },
  {
    id: "farm-to-fork-digital-transformation",
    title: "Farm to Fork 2.0: How Digital Platforms Are Revolutionizing Organic Distribution",
    date: "2025-04-30",
    author: "Ravi Pandey",
    authorRole: "Code Harvester",
    readTime: "6 min read",
    image: "/images/blog/blog-3.png",
    excerpt: "Digital transformation is redefining the farm-to-fork journey. Discover how tech platforms like KrsiRoots are empowering organic farmers and enhancing consumer access.",
    category: "AgriTech"
  }
];

export default function BlogPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
  };
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#e6eee7]">
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
            <span className="text-[#3d7344] text-sm font-semibold tracking-wider uppercase">Our Blog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2c5530] mt-4 mb-6">Organic Farming Insights</h1>
            <p className="text-xl text-[#5e724d]">Stay updated with the latest trends and knowledge in organic farming.</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-[#f7f9f4]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#e6eee7] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-60">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#a8e6cf] text-[#2c5530] px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-[#5e724d] mb-4">
                    <span className="bg-[#2c5530]/10 text-[#2c5530] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#2c5530] mb-3 group-hover:text-[#3d7344] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[#5e724d] mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="text-[#2c5530] font-semibold">{post.author}</span>
                        <span className="text-sm text-[#5e724d]">{post.authorRole}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#5e724d]">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <button className="text-[#3d7344] font-semibold flex items-center gap-2 group-hover:text-[#2c5530] transition-colors">
                    Read More
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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

      <Footer />
    </main>
  );
}