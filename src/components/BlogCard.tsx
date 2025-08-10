'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type BlogCardProps = {
  blog: any;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  return (
    <motion.div
      key={blog.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={blog.featuredImage}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <time dateTime={blog.date} className="text-sm text-gray-500">{blog.date}</time>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-gray-500">{blog.readTime}</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          <Link href={`/blog/${blog.id}`} className="hover:text-primary transition">
            {blog.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{blog.author}</p>
            <p className="text-sm text-gray-500">{blog.authorRole}</p>
          </div>
          <Link 
            href={`/blog/${blog.id}`}
            className="text-primary hover:text-primary/80 font-medium transition"
          >
            Read More →
          </Link>
        </div>
      </div>
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 