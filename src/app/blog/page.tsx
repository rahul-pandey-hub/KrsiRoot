import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogHero from '@/components/BlogHero';
import BlogCard from '@/components/BlogCard';
import blogData from '@/data/blogs.json';

// Create JSON-LD structured data for blog listing
const blogListingStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "KrsiRoots Blog",
  "description": "Insights on organic farming, sustainable practices, and healthy living",
  "url": "https://KrsiRoots.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "KrsiRoots",
    "logo": {
      "@type": "ImageObject",
      "url": "https://KrsiRoots.com/images/logo.png"
    }
  },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": blogData.blogs.map((blog, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://KrsiRoots.com/blog/${blog.id}`,
      "name": blog.title,
      "description": blog.excerpt
    }))
  }
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingStructuredData) }}
      />
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <BlogHero />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
