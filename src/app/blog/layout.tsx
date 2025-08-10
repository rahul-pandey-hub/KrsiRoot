import { Metadata } from 'next';
import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Blogs | rsiRoots",
  description: "Explore expert insights on organic farming, sustainable agriculture practices, healthy living, and the latest trends in organic food industry. Stay informed with rsiRoots's comprehensive blog articles.",
  keywords: [
    "organic farming blog",
    "sustainable agriculture",
    "organic food insights",
    "healthy living tips",
    "sustainable farming practices",
    "organic certification",
    "farm to table",
    "organic food industry"
  ],
  openGraph: {
    title: "Blogs | rsiRoots",
    description: "Expert insights on organic farming, sustainable agriculture, and healthy living. Stay informed with rsiRoots's comprehensive blog articles.",
    type: "website",
    url: "https://rsiRoots.com/blog",
    // images: [
    //   {
    //     url: "/images/blog-og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "rsiRoots Blog - Organic Farming Insights"
    //   }
    // ]
  },
  twitter: {
    card: "summary_large_image",
    title: "rsiRoots Blog - Organic Farming & Sustainable Living Insights",
    description: "Expert insights on organic farming, sustainable agriculture, and healthy living. Stay informed with rsiRoots's comprehensive blog articles.",
    // images: ["/images/blog-twitter-image.jpg"]
  },
  alternates: {
    canonical: "https://rsiRoots.com/blog"
  }
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
    </div>
  );
}
