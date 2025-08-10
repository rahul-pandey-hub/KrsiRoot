import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Our Organic Promise</h2>
            <p className="text-lg text-gray-700 mb-8">
              At rsiRoots, we believe in the power of nature to nourish and heal. Our mission is to bring you the freshest, 
              most nutrient-rich organic produce while preserving the environment for future generations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 px-[14px] rounded-full mr-4">
                  <i className="fas fa-leaf text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">100% Organic</h3>
                  <p className="text-gray-600">No synthetic pesticides, herbicides, or GMOs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent-red text-white p-3 rounded-full mr-4">
                  <i className="fas fa-tractor text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">Organic Farmer's Network</h3>
                  <p className="text-gray-600">We work directly with organic farmers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent-orange text-white py-3 px-5 rounded-full mr-4">
                  <i className="fas fa-inr"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">Price Assurance & Transparency</h3>
                  <p className="text-gray-600">We provide transparent pricing for our products.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/df61535a-1343-42b3-803a-71b113c6f338.png" 
                alt="Organic farming" 
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}