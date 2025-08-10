"use client";

import React, { useState } from "react";
import type { FC } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { sendContactEmail } from "@/actions/contact";
import { useToast } from "@/components/ui/use-toast";

const ContactPage: FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        toast({
          variant: "success",
          title: "Success!",
          description: "Message sent successfully! We will get back to you soon.",
        });
        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <div className="bg-primary/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary text-center">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Have questions about our organic products? We're here to help you make the right choice for your
              health and the planet.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <AnimatedSection className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Connect with us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="+91 9999999999"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Information Section */}
            <AnimatedSection className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-8 flex justify-center">
                   <Image src="/images/rsiRoots.jpeg" alt="rsiRoots Logo" width={300} height={200} />
                </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        52/A, Titanium Plaza, Opp. Prahaladnagar Garden, 100 FT
                        Road, Ahmedabad, Gujarat, 380015
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      <i className="fas fa-phone text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <Link href="tel:+919824104549" className="text-gray-600 hover:text-primary transition">
                        <p className="text-gray-600">+91 9824104549</p>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-primary">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <Link href="mailto:info@rsiRoots.com" className="text-gray-600 hover:text-primary transition">
                        <p className="text-gray-600">info@rsiRoots.com</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Connect With Us
                </h2>
                <div className="flex space-x-6">
                  <a
                    href="https://www.facebook.com/people/rsiRoots/61576127285769/"
                    className="text-primary hover:text-primary/80 text-2xl transition"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="https://x.com/rsiRoots_sm"
                    className="text-primary hover:text-primary/80 text-2xl transition"
                  >
                    <FaXTwitter className='mt-[5px]' />
                  </a>
                  <a
                    href="https://www.instagram.com/rsiRoots_sm"
                    className="text-primary hover:text-primary/80 text-2xl transition"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com/company/rsiRoots"
                    className="text-primary hover:text-primary/80 text-2xl transition"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://youtube.com/@rsiRoots_organic"
                    className="text-primary hover:text-primary/80 text-2xl transition"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
