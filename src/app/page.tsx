import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import StorySection from '@/components/StorySection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import ProductSection from '@/components/ProductSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductSection />
      <StatsSection />
      <AboutSection />
      {/* <StorySection /> */}
      <NewsletterSection />
      <Footer />
    </main>
  );
}