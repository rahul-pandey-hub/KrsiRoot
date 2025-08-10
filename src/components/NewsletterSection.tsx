'use client';

export default function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Organic Community</h2>
        <p className="text-xl mb-10">Subscribe to our newsletter to get the latest news and updates</p>
        
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input flex-grow px-6 py-3 rounded-full text-gray-800 focus:outline-none ring ring-secondary focus:ring-2 focus:ring-secondary"
              required
            />
            <button 
              type="submit" 
              className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary-dark transition ripple"
            >
              Subscribe
            </button>
          </div>
        </form>
        
        <p className="mt-4 text-sm opacity-80">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}