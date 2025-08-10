'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type BlogContentProps = {
  blog: any;
}

export default function BlogContent({ blog }: BlogContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <time dateTime={blog.date}>{blog.date}</time>
          <span className="mx-2">•</span>
          <span>{blog.readTime}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {blog.title}
        </h1>

        <div className="flex items-center mb-8">
          <div>
            <p className="font-semibold text-gray-900">{blog.author}</p>
            <p className="text-gray-600">{blog.authorRole}</p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {blog.content.map((section: any, index: number) => {
          switch (section.type) {
            case 'heading':
              return (
                <motion.h2 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                >
                  {section.content}
                </motion.h2>
              );
            case 'paragraph':
              return (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-700 mb-6 leading-relaxed"
                >
                  {section.content}
                </motion.p>
              );
            case 'list':
              return (
                <motion.ul 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="list-disc pl-6 mb-6 space-y-2"
                >
                  {section.items.map((item: string, i: number) => (
                    <li key={i} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </motion.ul>
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Related Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Share Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Share this article
        </h3>
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-primary transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          <button className="text-gray-600 hover:text-primary transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </button>
          <button className="text-gray-600 hover:text-primary transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
} 