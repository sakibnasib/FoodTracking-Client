import { Link } from 'react-router';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-dill text-charcoal px-6 py-12 backdrop-blur-md shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* Brand Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4 tracking-wide">🥗 SafeBite</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Track your food expiry dates effortlessly. SafeBite helps you reduce waste and save money. Eat smart. Live sustainably.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-green-400 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3 mt-3 text-sm text-charcoal">
            {[
              { path: '/', label: 'Home' },
              { path: '/allfood', label: 'AllFood' },
              { path: '/addfood', label: 'Add Food' },
              { path: '/contactUs', label: 'ContactUs' },
              { path: '/myitams', label: 'My Items' },
              { path: '/about', label: 'About' },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="hover:text-lime-300 hover:pl-1 transition-all duration-200 block"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-green-400 pb-2 inline-block">Connect with Me</h3>
          <div className="flex gap-5 mt-5">
            <a
              href="https://www.facebook.com/share/1AVE4m6GzA/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-200 hover:text-blue-400"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://github.com/sakibnasib"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-200 hover:text-gray-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.instagram.com/shakibnasib?igsh=MW0xMm9jZXV0ajZ6aQ=="
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-200 hover:text-pink-400"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-green-700 pt-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-white">SafeBite</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;