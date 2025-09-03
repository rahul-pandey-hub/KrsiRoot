"use client";
import { useState, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  faShoppingBasket,
  faTractor,
  faSearch,
  faCalendarCheck,
  faStore,
  faCertificate,
  faUtensils,
  faHeadset,
  faChartLine,
  faTruck,
  faUsers,
  faLightbulb,
  faHandHoldingUsd,
  faUser,
  faStar,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { BackgroundBeams } from "../ui/background-beams";
import { VideoText } from "../magicui/video-text";
import { MdFlightTakeoff } from "react-icons/md";

// Add AnimatedSection component
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection = ({
  children,
  className = "",
}: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("buyer");

  return (
    <>
      <div className="relative pt-16 md:h-[500px] h-[300px] w-full overflow-hidden border-b-2">
        <VideoText
          className="bg-[#f9f9f9]"
          fontSize={12}
          src="https://videos.pexels.com/video-files/2758322/2758322-uhd_2560_1440_30fps.mp4"
        >
          Our Services
        </VideoText>
        <BackgroundBeams />
      </div>

      {/* Service Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 container">
          <AnimatedSection className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                onClick={() => setActiveTab("buyer")}
                className={`tab-button px-8 py-6  text-xl font-semibold cursor-pointer rounded-l-lg border border-gray-200 ${
                  activeTab === "buyer" ? "active" : "text-[#48bb78]"
                }`}
              >
                <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" />
                For Buyers
              </button>
              <button
                onClick={() => setActiveTab("seller")}
                className={`tab-button px-8 py-6 text-xl font-semibold cursor-pointer rounded-r-lg border border-gray-200 ${
                  activeTab === "seller" ? "active" : "text-[#48bb78]"
                }`}
              >
                <FontAwesomeIcon icon={faTractor} className="mr-2" />
                For Sellers
              </button>
            </div>
          </AnimatedSection>

          {/* Buyer Content */}
          <div
            className={
              activeTab === "buyer" ? "tab-content active" : "tab-content"
            }
          >
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Services for Organic Food Buyers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access premium organic products with verified quality and
                competitive pricing.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 1. Verified Quality */}
              <AnimatedSection>
                <ServiceCard
                  icon={faCertificate}
                  title="Verified Quality"
                  description="Certified organic products, guaranteed safe and trustworthy."
                />
              </AnimatedSection>

              {/* 2. Competitive Pricing */}
              <AnimatedSection>
                <ServiceCard
                  icon={faHandHoldingUsd}
                  title="Competitive Pricing"
                  description="Direct producer partnerships ensuring transparent and fair pricing."
                />
              </AnimatedSection>

              {/* 3. Product Variety */}
              <AnimatedSection>
                <ServiceCard
                  icon={faStore}
                  title="Product Variety"
                  description="A complete range of organic produce all under one roof."
                />
              </AnimatedSection>

              {/* 4. Global Sourcing */}
              {/* <AnimatedSection>
                <ServiceCard
                  icon={faTruck}
                  title="Global Sourcing"
                  description="Access to local, national and international organic suppliers."
                />
              </AnimatedSection> */}

              {/* 5. Sustainability Assurance */}
              {/* <AnimatedSection>
                <ServiceCard
                  icon={faLightbulb}
                  title="Sustainability Assurance"
                  description="Ethical sourcing that supports planet-friendly practices."
                />
              </AnimatedSection> */}

              {/* 6. Customer Support */}
              <AnimatedSection>
                <ServiceCard
                  icon={faHeadset}
                  title="Customer Support"
                  description="Seamless assistance and after-sales service tailored for bulk or repeat purchases."
                />
              </AnimatedSection>
            </div>
          </div>

          {/* Seller Content */}
          <div
            className={
              activeTab === "seller" ? "tab-content active" : "tab-content"
            }
          >
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Services for Organic Producers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Grow your business by connecting with health-conscious consumers
                who value organic quality.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Wrap each ServiceCard with AnimatedSection */}
              <AnimatedSection>
                <ServiceCard
                  icon={faSearch}
                  title="Product Discovery"
                  description="An integrated ecosystem connecting farmers with buyers and exporters in a fair and transparent way."
                />
              </AnimatedSection>
              {/* Service Card 2 */}
              <ServiceCard
                icon={faCalendarCheck}
                title="Price Assurance & Transparency"
                description="Transparent pricing models ensuring farmers and sellers receive the true worth of their produce."
              />

              {/* Service Card 3 */}
              {/* <ServiceCard
                icon={faStore}
                title="Digital Marketplace Access"
                description="Platform to list and sell organic produce directly to consumers, retailers, or bulk Buyers."
              /> */}

              {/* Service Card 4 */}
              {/* <ServiceCard
                icon={faHeadset}
                title="Logistics & Delivery Support"
                description="Help with packaging, warehousing and transport to streamline the supply chain and ensure timely deliveries."
              /> */}

              {/* Service Card 5 */}
              <ServiceCard
                icon={faPlaneDeparture}
                title="Export Facilitation"
                description="Helping sellers navigate global trends, meet compliance needs, and connect with export buyers."
              />

              {/* Service Card 6 */}
              <ServiceCard
                icon={faCertificate}
                title="Organic Certification Support"
                description="Support for farmers and producers in securing official certifications for recognized organic standards."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Community Says
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from farmers and customers who are part of the KrsiRoots family
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <Testimonial
                name="Nidhi Dholakia"
                role="Organic Consumer"
                quote="KrsiRoots has revolutionized how we source organic produce for our business. The transparency in sourcing and assurance of true organic quality allows us to confidently offer our customers the best. Their subscription model ensures consistent, timely deliveries—making inventory planning seamless and efficient"
              />
            </AnimatedSection>
            <AnimatedSection>
              <Testimonial
                name="Rajesh Patel"
                role="Organic Farmer"
                quote="KrsiRoots has helped us grow beyond our local reach as small organic farmer. Their platform connects us directly with customers who care about clean, responsibly-grown produce. With their support in logistics and delivery, we’ve been able to scale efficiently—without compromising on quality or spending extra on distribution."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <AnimatedSection className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join the Organic Revolution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking for the freshest organic produce or want to
            share your organic products with the world, we're here to help.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Shop Organic
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition duration-300"
            >
              Sell With Us
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </section>
    </>
  );
}

// Service Card Component
function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="service-card bg-white rounded-lg overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <FontAwesomeIcon icon={icon} className="text-primary text-2xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100"></div>
    </div>
  );
}

// Testimonial Component
function Testimonial({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
          <FontAwesomeIcon icon={faUser} className="text-primary" />
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">"{quote}"</p>
      <div className="mt-4 text-primary">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
}
