export default function StorySection() {
    return (
      <section id="story" className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">From Farm to Table</h2>
          
          <div className="relative">
            {/* Timeline */}
            <div className="border-l-2 border-primary ml-8 md:ml-16 pl-8 md:pl-16 space-y-16">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute -left-21 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <i className="fas fa-seedling text-xl"></i>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2">Seed Selection</h3>
                  <p>We carefully select non-GMO, organic seeds from trusted suppliers to ensure the highest quality produce.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -left-21 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <i className="fas fa-tractor text-xl"></i>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2">Regenerative Farming</h3>
                  <p>Our sustainable farming practices enrich the soil, conserve water, and promote biodiversity.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="absolute -left-21 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <i className="fas fa-hand-paper text-xl"></i>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2">Hand Harvesting</h3>
                  <p>Each fruit and vegetable is hand-picked at peak ripeness to ensure maximum flavor and nutrition.</p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="absolute -left-21 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <i className="fas fa-truck text-xl"></i>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2">Eco-Delivery</h3>
                  <p>Our carbon-neutral delivery system brings fresh produce to your door within hours of harvest.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }