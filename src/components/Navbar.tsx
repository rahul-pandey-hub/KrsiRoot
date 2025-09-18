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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path ? 'text-[#2c5530] font-bold bg-[#e6eee7] md:bg-[#e6eee7]' : 'text-[#5e724d]';

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
    <nav className="bg-[#f7f9f4] shadow-sm fixed w-full z-50">
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
              <Link href="/services" className={`${isActive('/services')} hover:text-[#000000] px-6 py-2 text-md font-semibold transition-all`}>
                Services
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
            className="fixed top-0 right-0 h-full w-[80%] bg-[#f7f9f4] shadow-xl z-50 md:hidden"
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
                <Link 
                  href="/services" 
                  className={`${isActive('/services')} px-6 py-4 text-lg font-semibold hover:bg-gray-50`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
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