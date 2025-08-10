import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-4">KrsiRoots</h3>
            <p className="text-gray-600 mb-4">Bringing nature's goodness to your table.</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/people/KrsiRoots/61576127285769/" className="text-primary hover:text-secondary text-xl transition"><i className="fab fa-facebook"></i></Link>
              <Link href="https://www.instagram.com/KrsiRoots_sm" className="text-primary hover:text-secondary text-xl transition"><i className="fab fa-instagram"></i></Link>
              <Link href="https://x.com/KrsiRoots_sm" className="text-primary hover:text-secondary text-xl transition"><FaXTwitter className='mt-[5px]' /></Link>
              <Link href="https://www.linkedin.com/company/KrsiRoots" className="text-primary hover:text-secondary text-xl transition"><i className="fab fa-linkedin"></i></Link>
              <Link href="https://www.youtube.com/@KrsiRoots_organic" className="text-primary hover:text-secondary text-xl transition"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-primary transition">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-600 hover:text-primary transition">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary transition">Products</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary transition">Our Story</Link></li>
              <li><Link href="/contact-us" className="text-gray-600 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-primary transition">Shipping Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary transition">Return Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary transition">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Link target='_blank' href="https://maps.app.goo.gl/zH4fftnjo15L3LySA" className="text-gray-600 hover:text-primary transition"> 
                <i className="fas fa-map-marker-alt text-primary mt-1 mr-2"></i>
                <span className="text-gray-600">52/A, Titanium Plaza, Opp. Prahaladnagar Garden, 100 FT Road, Ahmedabad, Gujarat, 380015</span>
                </Link>
              </li>
              <li className="flex items-start">
                <Link href="tel:+919824104549" className="text-gray-600 hover:text-primary transition">
                <i className="fas fa-phone-alt text-primary mt-1 mr-2"></i>
                <span className="text-gray-600">+91 9824104549</span>
                </Link>
              </li>
              <li className="flex items-start"> 
                <Link href="mailto:info@KrsiRoots.com" className="text-gray-600 hover:text-primary transition">
                <i className="fas fa-envelope text-primary mt-1 mr-2"></i>
                <span className="text-gray-600">info@KrsiRoots.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} KrsiRoots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}