import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#f7f9f4] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#2c5530] mb-4">KrsiRoots</h3>
            <p className="text-[#5e724d] mb-4">Bringing nature's goodness to your table.</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61579862834774" className="text-[#3d7344] hover:text-[#2c5530] text-xl transition-colors"><i className="fab fa-facebook"></i></Link>
              <Link href="https://www.instagram.com/krsiroots_organics?igsh=MXQ4aTE4Y3Jzdnk4dg==" className="text-[#3d7344] hover:text-[#2c5530] text-xl transition-colors"><i className="fab fa-instagram"></i></Link>
              <Link href="https://x.com/KrsiRoots_sm" className="text-[#3d7344] hover:text-[#2c5530] text-xl transition-colors"><FaXTwitter className='mt-[5px]' /></Link>
              <Link href="https://in.linkedin.com/in/krsi-organics-a8a8a7375" className="text-[#3d7344] hover:text-[#2c5530] text-xl transition-colors"><i className="fab fa-linkedin"></i></Link>
              <Link href="https://www.youtube.com/@KrsiRoots_organic" className="text-[#3d7344] hover:text-[#2c5530] text-xl transition-colors"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#2c5530] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">Products</Link></li>
              <li><Link href="#" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">Our Story</Link></li>
              <li><Link href="/contact-us" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#2c5530] mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/shipping-and-return-policy" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">Shipping Policy</Link></li>
              <li><Link href="/shipping-and-return-policy" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">Return Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#2c5530] mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Link target='_blank' href="https://maps.app.goo.gl/zH4fftnjo15L3LySA" className="text-[#5e724d] hover:text-[#2c5530] transition-colors"> 
                <i className="fas fa-map-marker-alt text-[#3d7344] mt-1 mr-2"></i>
                <span className="text-[#5e724d]">Ahmedabad, Gujarat</span>
                </Link>
              </li>
              <li className="flex items-start">
                <Link href="tel:+918866034343" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">
                <i className="fas fa-phone-alt text-[#3d7344] mt-1 mr-2"></i>
                <span className="text-[#5e724d]">+91 8866034343</span>
                </Link>
              </li>
              <li className="flex items-start"> 
                <Link href="mailto:dovetailindiaservices@gmail.com" className="text-[#5e724d] hover:text-[#2c5530] transition-colors">
                <i className="fas fa-envelope text-[#3d7344] mt-1 mr-2"></i>
                <span className="text-[#5e724d]">dovetailindiaservices@gmail.com </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#e6eee7] mt-12 pt-8 text-center text-[#5e724d] text-sm">
          <p>&copy; {new Date().getFullYear()} KrsiRoots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}