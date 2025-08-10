import { Link } from 'react-router';
import { FaFacebookF, FaGithub, FaInstagram, FaHeart, FaLeaf, FaShieldAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../../public/logo.png'
const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-blue-900"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
            
            {/* Brand Description */}
            <div className="group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-13 h-13  rounded-xl flex items-center justify-center text-white shadow-lg">
                  {/* <FaLeaf className="text-2xl" /> */}
                  <img src={logo} alt="" />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-wide">FoodTracking</h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Track your food expiry dates effortlessly. SafeBite helps you reduce waste and save money. Eat smart. Live sustainably.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <FaEnvelope className="text-green-400" />
                  <span>contact@FoodTracking.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <FaPhone className="text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <FaMapMarkerAlt className="text-green-400" />
                  <span>123 Food Street, Kitchen City</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="group">
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-green-400 pb-2 inline-block group-hover:border-green-300 transition-colors duration-300">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  { path: '/', label: 'Home', icon: '🏠' },
                  { path: '/allfood', label: 'All Food', icon: '🍽️' },
                  { path: '/contactUs', label: 'Contact Us', icon: '📞' },
                  { path: '/about', label: 'About', icon: 'ℹ️' },
                ].map(({ path, label, icon }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      className="group/link flex items-center gap-3 text-gray-300 hover:text-green-400 hover:translate-x-2 transition-all duration-300"
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="text-sm font-medium">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="group">
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-green-400 pb-2 inline-block group-hover:border-green-300 transition-colors duration-300">
                Features
              </h3>
              <ul className="space-y-4">
                {[
                  { label: 'Expiry Tracking', icon: FaShieldAlt, color: 'text-blue-400' },
                  { label: 'Smart Notifications', icon: FaHeart, color: 'text-red-400' },
                  { label: 'Recipe Suggestions', icon: FaLeaf, color: 'text-green-400' },
                  { label: 'Waste Reduction', icon: FaLeaf, color: 'text-yellow-400' },
                ].map(({ label, icon: Icon, color }, index) => (
                  <li key={index}>
                    <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group-hover:translate-x-2">
                      <Icon className={`text-sm ${color}`} />
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="group">
              <h3 className="text-xl font-semibold mb-6 text-white border-b border-green-400 pb-2 inline-block group-hover:border-green-300 transition-colors duration-300">
                Connect with Us
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Follow us on social media for tips, updates, and community stories.
              </p>
              
              <div className="flex gap-4">
                {[
                  { 
                    href: "https://www.facebook.com/share/1AVE4m6GzA/", 
                    icon: FaFacebookF, 
                    color: "hover:text-blue-400", 
                    bgColor: "bg-blue-600 hover:bg-blue-700" 
                  },
                  { 
                    href: "https://github.com/sakibnasib", 
                    icon: FaGithub, 
                    color: "hover:text-gray-300", 
                    bgColor: "bg-gray-700 hover:bg-gray-800" 
                  },
                  { 
                    href: "https://www.instagram.com/shakibnasib?igsh=MW0xMm9jZXV0ajZ6aQ==", 
                    icon: FaInstagram, 
                    color: "hover:text-pink-400", 
                    bgColor: "bg-pink-600 hover:bg-pink-700" 
                  },
                ].map(({ href, icon: Icon, color, bgColor }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${color}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              {/* <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/20"></div>

          {/* Footer Bottom */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} <span className="font-semibold text-white">FoodTracking</span>. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>

          {/* Made with Love */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> for a sustainable future
            </p>
          </div>
        </div>
      </div>
      
      {/* Inline Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Smooth transitions */
        * {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #3b82f6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #2563eb);
        }
        
        /* Focus states for accessibility */
        a:focus, button:focus, input:focus {
          outline: 2px solid #10b981;
          outline-offset: 2px;
        }
        
        /* Animation for footer sections */
        .group {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Staggered animation delays */
        .group:nth-child(1) { animation-delay: 0.1s; }
        .group:nth-child(2) { animation-delay: 0.2s; }
        .group:nth-child(3) { animation-delay: 0.3s; }
        .group:nth-child(4) { animation-delay: 0.4s; }
        
        /* Pulse animation for heart icon */
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        /* Hover effects for social icons */
        .group:hover .group-hover\\:translate-x-2 {
          transform: translateX(0.5rem);
        }
        
        /* Input focus effects */
        input:focus {
          background-color: rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </footer>
  );
};

export default Footer;