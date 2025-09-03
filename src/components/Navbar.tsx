"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path ? 'text-[#000] font-bold bg-green-200 md:bg-transparent md:bg-[url("/images/leaf-header.png")] bg-no-repeat bg-cover bg-center' : 'text-gray-600';

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-playfair text-2xl font-bold text-[#5e724d]">
              <Image src={'/images/krsiroots1.png'} alt='logo' className='w-full h-full' width={110} height={110}/>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className={`${isActive('/')} hover:text-[#000000] px-6 py-2 text-md font-semibold transition-all`}>
                Home
              </Link>
              <Link href="/about-us" className={`${isActive('/about-us')} hover:text-[#000000] px-6 py-2 text-md font-semibold transition-all`}>
                About
              </Link>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className={`${isActive('/services')} flex items-center hover:text-[#000000] px-6 py-2 text-md font-semibold transition-all`}
                >
                  Services
                  <span className={`ml-1 mt-1px transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                    ▼
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                    <Link href="/services" className="block px-4 py-2 text-gray-600 hover:text-[#000000]">
                      Buyer
                    </Link>
                    <Link href="/services" className="block px-4 py-2 text-gray-600 hover:text-[#000000]">
                      Seller
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/blog" className={`${isActive('/blog')} hover:text-[#000000] px-6 py-2 text-md font-semibold transition-all`}>
                Blog
              </Link>
              <Link href="/contact-us" className={`${isActive('/contact-us')} hover:text-[#000000] px-6 py-2 text-md font-semibold transition-all`}>
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#5e724d] focus:outline-none"
            >
              <FontAwesomeIcon 
                icon={isMobileMenuOpen ? faXmark : faBars} 
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slider */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full w-[80%] bg-white shadow-xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <Image src={'/images/krsiroots1.png'} alt='logo' width={110} height={110}/>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-[#5e724d]"
                >
                  <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="flex flex-col py-4 overflow-y-auto">
                <Link 
                  href="/" 
                  className={`${isActive('/')}  px-6 py-4 text-lg font-semibold hover:bg-gray-50`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about-us" 
                  className={`${isActive('/about-us')} px-6 py-4 text-lg font-semibold hover:bg-gray-50`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <div className="px-6 py-4">
                  <button
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    className={`${isActive('/services')} flex items-center justify-between w-full text-lg font-semibold`}
                  >
                    Services
                    <span className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                      ▼
                    </span>
                  </button>
                  {isDropdownOpen && (
                    <div className="mt-2 ml-4 border-l-2 border-[#5e724d]">
                      <Link 
                        href="/services" 
                        className="block px-4 py-2 text-gray-600 hover:text-[#5e724d]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Buyer
                      </Link>
                      <Link 
                        href="/services" 
                        className="block px-4 py-2 text-gray-600 hover:text-[#5e724d]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Seller
                      </Link>
                    </div>
                  )}
                </div>
                <Link 
                  href="/blog" 
                  className={`${isActive('/blog')} px-6 py-4 text-lg font-semibold hover:bg-gray-50`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/contact-us" 
                  className={`${isActive('/contact-us')} px-6 py-4 text-lg font-semibold hover:bg-gray-50`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Footer */}
              <div className="mt-auto p-6 border-t">
                <p className="text-sm text-gray-500 text-center">
                  © 2025 KrsiRoots. All rights reserved.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}