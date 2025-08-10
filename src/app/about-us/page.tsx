"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, ReactNode } from "react";
import { VideoText } from "@/components/magicui/video-text";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PiFarmDuotone } from "react-icons/pi";
import { FaTractor } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
// AnimatedSection component that triggers animations when scrolled into view
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

// Component for animated stats/numbers
interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    if (inView) {
      animationFrame = requestAnimationFrame(updateCount);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="font-bold text-primary">
      {count}
      {suffix}
    </div>
  );
};

// First, create a new component for the animated image
const AnimatedTeamImage = ({ frontImage, backImage, name }: { frontImage: string; backImage: string; name: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative h-64 w-full group cursor-pointer"
    >
      {/* Front Image */}
      <Image
        src={frontImage}
        alt={`${name} - rsiRoots Team Member`}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:opacity-0"
      />
      {/* Back Image */}
      <Image
        src={backImage}
        alt={`${name} - Alternate View`}
        fill
        className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
      />
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="relative pt-16 md:h-[500px] h-[300px] w-full overflow-hidden border-b-2">
        <VideoText
          className="bg-[#f9f9f9]"
          fontSize={8}
          src="https://videos.pexels.com/video-files/2758322/2758322-uhd_2560_1440_30fps.mp4"
        >
          About rsiRoot Organics
        </VideoText>
        <BackgroundBeams />
      </div>
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <AnimatedSection className="relative lg:w-1/2 h-96 mb-8 lg:mb-0 rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                className="absolute inset-0 object-cover w-full h-full"
              >
                <source src="/videos/orgial-story.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </AnimatedSection>
            <AnimatedSection className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                To deliver high-quality organic products through ethical sourcing, empowering farmers, delighting customers, and ensuring value for every stakeholder in our journey toward sustainability.
              </p>
              <p className="text-gray-700 mb-4">
                We are creating an ecosystem which will connect Indian Organic
                Farmers to buyers and consumers across the Globe.
              </p>
              <p className="text-gray-700 mb-4">
                Indian Organic Product should be accessible to everyone.
              </p>
              <p className="text-gray-700">
                Your health. Our mission. The planet's future.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Our Vision Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-secondary mb-8">
              Our Vision
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 italic">
                "To be a trusted leader in organic trading, fostering healthier communities and a sustainable planet for all."
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection className="bg-white p-6 rounded-xl shadow-md">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                Building fair partnerships that empower farmers and educate
                consumers.
              </p>
            </AnimatedSection>
            <AnimatedSection className="bg-white p-6 rounded-xl shadow-md">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Health
              </h3>
              <p className="text-gray-600">
                Providing access to nutrient-rich, chemical-free foods that
                nourish body and mind.
              </p>
            </AnimatedSection>

            <AnimatedSection className="bg-white p-6 rounded-xl shadow-md">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Supporting farming practices that protect our planet for future
                generations.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Farm Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-secondary mb-12 text-center">
              Direct sourcing and its benefits
            </h2>
          </AnimatedSection>

          <div className="lg:flex items-center gap-12 mb-16">
            <AnimatedSection className="lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-gray-700 mb-4 text-xl">
                "At rsiRoots, we are committed to supporting fair trade practices
                that ensure farmers receive fair compensation for their organic
                products. This not only empowers farmers to thrive but also
                enables them to invest in their communities and sustainable
                practices. For our customers, this translates to access to
                high-quality, ethically sourced organic products that promote
                both personal well-being and environmental sustainability. By
                choosing rsiRoots, you are contributing to a fairer global trade
                system while enjoying the purest, most responsibly produced
                organic goods.”
              </p>
            </AnimatedSection>
            <AnimatedSection className="relative lg:w-1/2 h-80 rounded-xl overflow-hidden">
              <div className="relative w-full max-w-4xl mx-auto overflow-hidden pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/kjKpvyQ3w48"
                  title="Welcome to rsiRoots – The Future of Organic Trade"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-4xl  font-semibold text-secondary mb-14 text-center">
              Where We Source From
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-30 h-30 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <span className="text-7xl font-bold text-primary">
                    <PiFarmDuotone />
                  </span>
                </motion.div>
                <p className="text-gray-700 font-bold text-2xl">
                  Local Farmers
                </p>
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-30 h-30 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <span className="text-6xl font-bold text-primary">
                    <FaTractor />
                  </span>
                </motion.div>
                <p className="text-gray-700 font-bold text-2xl">
                  National Farms
                </p>
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-30 h-30 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <span className="text-6xl font-bold text-primary">
                    <BsShop />
                  </span>
                </motion.div>
                <p className="text-gray-700 font-bold text-2xl">
                  Organic Markets
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Global Distribution Section */}

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Producers/Farmers Section */}
            <div className="relative text-center w-full md:w-1/3">
              <Image
                src="/images/indian-map.png"
                alt="India Map"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-primary">
                Producers / Farmers
              </h3>
            </div>

            {/* Connection Animation */}
            <div className="relative md:w-1/3 flex justify-center items-center">
              {/* Desktop Animation (left to right) */}
              <div className="relative w-full h-24 hidden md:block">
                <div className="absolute top-[49%] w-full border-t-2 border-dashed border-primary"></div>
                <motion.div
                  initial={{ left: "-10%" }}
                  animate={{ left: "80%" }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-1/2 -translate-y-1/2"
                >
                  <svg
                    fill="#000000"
                    width="98px"
                    height="98px"
                    className="rotate-90"
                    viewBox="0 0 500 500"
                   
                    stroke="#000000"
                    strokeWidth="0.005"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="plane">
                        {" "}
                        <g>
                          {" "}
                          <path d="M250.06,482.19l-2.97-18.09c-22.8-139.1-33.06-247.74-30.48-322.88c2.15-62.75,12.93-88.92,21.6-99.82 c5.89-7.41,10.96-7.95,11.52-7.99l0.2-0.01l0.2,0.01c0.56,0.04,5.63,0.57,11.52,7.98c8.67,10.9,19.47,37.06,21.66,99.81 c2.62,75.14-7.57,183.78-30.29,322.9L250.06,482.19z M249.92,39.45c-0.95,0.28-4.03,1.55-7.8,6.69 c-7.96,10.85-17.83,36.76-19.62,98.55c-2.06,71.27,7.2,172.14,27.54,300.06c20.26-127.93,29.46-228.81,27.36-300.08 c-1.82-61.78-11.71-87.69-19.68-98.54C253.95,41,250.87,39.74,249.92,39.45z"></path>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <path d="M236.42,79.29c-1.79,0-3.25-1.46-3.25-3.24l0-4.11c0-2.5,0.97-4.85,2.74-6.62c1.77-1.77,4.12-2.74,6.62-2.75l14.78,0 c0,0,0,0,0,0c5.16,0,9.36,4.2,9.37,9.36l0,4.11c0,1.79-1.46,3.24-3.24,3.25L236.42,79.29z M257.32,68.57 C257.32,68.57,257.32,68.57,257.32,68.57l-14.78,0c-0.9,0-1.74,0.35-2.38,0.99s-0.99,1.48-0.98,2.38l0,1.35l21.51-0.01v-1.35 C260.68,70.08,259.18,68.57,257.32,68.57z"></path>{" "}
                        </g>{" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M324.5,459.96l-74.6-14.3l0.45-2.87c1.26-7.98,2.56-16.46,3.98-25.92l0.59-3.93l59.06,26.85L324.5,459.96z M256.73,440.86l56.71,10.87l-3.82-7.33l-49.94-22.71C258.64,428.52,257.67,434.84,256.73,440.86z"></path>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <path d="M175.6,460.01l10.5-20.17l59.04-26.89l0.59,3.93c1.43,9.48,2.74,17.96,4,25.92l0.45,2.87L175.6,460.01z M190.47,444.44 l-3.82,7.33l56.71-10.9c-0.95-6.01-1.92-12.33-2.96-19.16L190.47,444.44z"></path>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <path d="M476.12,304.99L309.75,272.4l-37.66,1.08l0.3-3.36c2.53-28.33,4.17-54.69,4.88-78.34l0.14-4.6l28.52,13.59l-0.09-4.25 l0-0.06c0.1-5.61,4.71-10.07,10.36-9.98l2.53,0.05c5.61,0.1,10.08,4.75,9.98,10.36l-0.18,14.65l60.84,28.99l0.09-4.88 c0.05-2.72,1.16-5.25,3.11-7.13c1.96-1.88,4.54-2.89,7.25-2.84l2.53,0.05c2.72,0.05,5.25,1.16,7.13,3.11s2.89,4.53,2.84,7.25 l-0.29,15.26l55.04,26.23c4.87,2.32,8.06,7.12,8.33,12.51L476.12,304.99z M310.25,266.38l159.5,31.24l-0.35-7.27 c-0.16-3.18-2.04-6.01-4.92-7.38l-58.52-27.89l0.36-19.12c0.04-2.3-1.79-4.2-4.09-4.25l-2.53-0.05c-2.33-0.02-4.2,1.79-4.25,4.09 l-0.27,14.19l-72.71-34.65l0.22-18.5c0.02-1.13-0.39-2.19-1.17-2.99c-0.77-0.8-1.81-1.26-2.93-1.28l-2.53-0.05 c-1.07-0.03-2.17,0.39-2.97,1.17c-0.79,0.76-1.24,1.78-1.27,2.87l0.28,13.84l-29-13.82c-0.75,21.62-2.24,45.38-4.45,70.74 L310.25,266.38z"></path>{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <path d="M23.88,305.13l0.72-14.92c0.26-5.39,3.45-10.19,8.32-12.51l55.02-26.26l-0.29-15.25c-0.11-5.61,4.36-10.26,9.97-10.36 l2.52-0.05c2.7-0.05,5.29,0.96,7.25,2.84c1.96,1.88,3.06,4.42,3.12,7.13l0.09,4.88l60.84-29.04l-0.21-14.65 c-0.11-5.59,4.36-10.24,9.97-10.35l2.53-0.05c2.69-0.07,5.29,0.96,7.25,2.84c1.96,1.88,3.06,4.42,3.12,7.13l0,0.06l-0.1,4.25 l28.53-13.62l0.14,4.6c0.72,23.65,2.38,50.01,4.92,78.34l0.3,3.36l-37.66-1.06L23.88,305.13z M100.34,231.76 c-0.03,0-0.05,0-0.08,0l-2.52,0.05c-2.3,0.04-4.13,1.95-4.09,4.25l0.37,19.12L35.5,283.11c-2.88,1.37-4.76,4.2-4.91,7.39 l-0.35,7.27l159.49-31.34l31.59,0.89c-2.23-25.37-3.74-49.12-4.49-70.74L100.34,231.76z"></path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </motion.div>
              </div>

              {/* Mobile Animation (top to bottom) */}
              <div className="relative h-48 w-24 block md:hidden">
                <div className="absolute left-1/2 h-full border-l-2 border-dashed border-primary"></div>
                <motion.div
                  initial={{ top: "-10%" }}
                  animate={{ top: "80%" }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 -translate-x-1/2"
                >
                  <Image
                    src="/images/aeroplane.png"
                    alt="Plane"
                    className="rotate-180"
                    width={500}
                    height={500}
                  />
                </motion.div>
              </div>
            </div>

            {/* Global Buyers Section */}
            <div className="relative text-center w-full md:w-1/3">
              <Image
                src="/images/globe.png"
                alt="World Map"
                width={300}
                height={300}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-primary">
                Global Buyers
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              Our Certifications
            </h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              We maintain the highest quality standards through rigorous
              certification processes for organic products.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols- md:grid-cols-3 gap-8">
            <AnimatedSection className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-36 h-24 mx-auto mb-4 relative"
              >
                <Image
                  src="/images/certifications/Usda-npop.jpg"
                  alt="USDA Organic"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <h3 className="font-semibold text-secondary">USDA Organic</h3>
            </AnimatedSection>

            <AnimatedSection className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 mx-auto mb-4 relative"
              >
                <Image
                  src="/images/certifications/organic-india.jpg"
                  alt="Organic India"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <h3 className="font-semibold text-secondary">Organic India</h3>
            </AnimatedSection>
            <AnimatedSection className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 mx-auto mb-4 relative"
              >
                <Image
                  src="/images/certifications/jaivik-bharat.png"
                  alt="Jaivik Bharat"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <h3 className="font-semibold text-secondary">Jaivik Bharat</h3>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-16">
              Our Team
            </h2>
          </AnimatedSection>
          {/* Change grid columns from 3 to 4 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <AnimatedSection className="bg-white rounded-xl shadow-lg overflow-hidden">
              <a
                href="https://www.linkedin.com/in/aditya-sharma-8960a8105/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:transform hover:scale-105 transition-transform duration-300"
              >
                <AnimatedTeamImage
                  frontImage="/images/team/adi-front.png"
                  backImage="/images/team/A7401922_JPG.avif"
                  name="Aditya Sharma"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-secondary flex items-center justify-center gap-2">
                    Aditya Sharma <FaLinkedin size={20} className="hover:text-blue-600 mt-1" />
                  </h3>
                  <p className="text-primary mt-1">Navigator in Chief</p>
                  <p className="text-gray-600 mt-4">
                    As our Navigator-in-Chief leads with heart and purpose,
                    guiding our mission to bring nature's purity to every corner
                    of the world.
                  </p>
                </div>
              </a>
            </AnimatedSection>

            {/* Team Member 2 */}
            <AnimatedSection className="bg-white rounded-xl shadow-lg overflow-hidden">
              <a
                href="https://www.linkedin.com/in/pandeyrv/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:transform hover:scale-105 transition-transform duration-300"
              >
                <AnimatedTeamImage
                  frontImage="/images/team/a498839c-1582-4b96-8c93-471a0f81701c.png"
                  backImage="/images/team/ravi-backend.png"
                  name="Ravi Pandey"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-secondary flex items-center justify-center gap-2">
                    Ravi Pandey <FaLinkedin size={20} className="hover:text-blue-600 mt-1" />
                  </h3>
                  <p className="text-primary mt-1">Code Harvesters</p>
                  <p className="text-gray-600 mt-4">
                    Turning lines of code into living systems, our Code Harvesters
                    cultivate the tech backbone of our green mission.
                  </p>
                </div>
              </a>
            </AnimatedSection>

            {/* Team Member 3 */}
            <AnimatedSection className="bg-white rounded-xl shadow-lg overflow-hidden">
              <a
                href="https://www.linkedin.com/in/rajukumar-verma-587229b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:transform hover:scale-105 transition-transform duration-300"
              >
                <AnimatedTeamImage
                  frontImage="/images/team/raj-front.jpeg"
                  backImage="/images/team/raj-backend.jpeg"
                  name="Raju Verma"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-secondary flex items-center justify-center gap-2">
                    Raju Verma <FaLinkedin size={20} className="hover:text-blue-600 mt-1" />
                  </h3>
                  <p className="text-primary mt-1">Product Planter</p>
                  <p className="text-gray-600 mt-4">
                    Nurturing organic excellence from seed to shelf, our Product
                    Planter ensures every item meets our highest standards of
                    purity and quality.
                  </p>
                </div>
              </a>
            </AnimatedSection>

            {/* Team Member 4 */}
            <AnimatedSection className="bg-white rounded-xl shadow-lg overflow-hidden">
              <a
                href="https://www.linkedin.com/in/divyang-sharma-0b9163130/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:transform hover:scale-105 transition-transform duration-300"
              >
                <AnimatedTeamImage
                  frontImage="/images/team/WhatsApp Image 2025-04-23 at 15_26_34 (1).avif"
                  backImage="/images/team/ds.jpeg"
                  name="Divyang Sharma"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-secondary flex items-center justify-center gap-2">
                    Divyang Sharma <FaLinkedin size={20} className="hover:text-blue-600 mt-1" />
                  </h3>
                  <p className="text-primary mt-1">Growth Gardener</p>
                  <p className="text-gray-600 mt-4">
                    Planting seeds of trust and harvesting global connections, our
                    Growth Gardener drives sustainable growth from the ground up.
                  </p>
                </div>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
