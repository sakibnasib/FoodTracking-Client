import { Link, NavLink } from 'react-router';
import { Tooltip } from "react-tooltip";
import useAuth from '../../hook/useAuth';
import { FaCartArrowDown, FaHome, FaUtensils, FaPlus, FaList, FaInfoCircle, FaPhone, FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut, loading } = useAuth();
  
  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Logout successful
      })
      .catch(error => {
        console.log(error)
      })
  }

  const navItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/allfood', label: 'AllFood', icon: FaUtensils },
    { path: '/about', label: 'About', icon: FaInfoCircle },
    { path: '/contactUs', label: 'Contact', icon: FaPhone },
  ];

  const userNavItems = [
    { path: '/addfood', label: 'AddFood', icon: FaPlus },
    { path: '/myaddfood', label: 'MyFood', icon: FaList },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-600 via-green-700 to-blue-700 shadow-lg backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🥗</span>
                </div>
                <span className="text-2xl font-bold text-white group-hover:text-green-200 transition-colors duration-300">
                  FoodTracking
                </span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                      isActive 
                        ? 'text-green-200 bg-white/20 shadow-lg' 
                        : 'text-white hover:text-green-200'
                    }`
                  }
                >
                  <Icon className="text-sm" />
                  {label}
                </NavLink>
              ))}
              
              {user && userNavItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                      isActive 
                        ? 'text-green-200 bg-white/20 shadow-lg' 
                        : 'text-white hover:text-green-200'
                    }`
                  }
                >
                  <Icon className="text-sm" />
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right side - User menu */}
          <div className="flex items-center gap-4">
            
            {/* Cart Icon for logged in users */}
            {user && (
              <Link 
                to='/addtocart' 
                className="relative p-2 text-white hover:text-green-200 transition-colors duration-300 group"
              >
                <FaCartArrowDown size={24} className="group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                  3
                </div>
              </Link>
            )}

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300">
                      <img 
                        alt="Profile" 
                        src={user.photoURL || 'https://via.placeholder.com/32'} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white text-sm font-medium hidden md:block">
                      {user.displayName || 'User'}
                    </span>
                    <svg className="w-4 h-4 text-white group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg bg-white/95 backdrop-blur-md rounded-xl w-52 mt-2 border border-white/20">
                    <li className="mb-2">
                      <div className="px-3 py-2 text-sm text-gray-600 border-b border-gray-200">
                        Signed in as <span className="font-semibold">{user.email}</span>
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300 w-full text-left"
                      >
                        <FaSignOutAlt className="text-sm" />
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <button className="flex items-center gap-2 px-4 py-2 text-white border border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 group">
                    <FaSignInAlt className="text-sm group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">Login</span>
                  </button>
                </Link>
                <div className="hidden md:block">
                  <Link to="/register">
                  <button className="flex items-center   gap-2 px-4 py-2 bg-white text-green-700 rounded-lg hover:bg-green-50 transition-all duration-300 group shadow-lg hover:shadow-xl">
                    <FaUserPlus className="text-sm group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">Register</span>
                  </button>
                </Link>
                </div>
              
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              
              <ul tabIndex={0} className="dropdown-content menu p-4 shadow-lg bg-white/95 backdrop-blur-md rounded-xl w-64 mt-2 border border-white/20">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive 
                            ? 'text-green-600 bg-green-50' 
                            : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                        }`
                      }
                    >
                      <Icon className="text-sm" />
                      {label}
                    </NavLink>
                  </li>
                ))}
                
                {user && userNavItems.map(({ path, label, icon: Icon }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isActive 
                            ? 'text-green-600 bg-green-50' 
                            : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                        }`
                      }
                    >
                      <Icon className="text-sm" />
                      {label}
                    </NavLink>
                  </li>
                ))}
                
                {user && (
                  <>
                    <li className="border-t border-gray-200 mt-2 pt-2">
                      <Link to="/addtocart" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-300">
                        <FaCartArrowDown className="text-sm" />
                        Cart
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-300 w-full text-left"
                      >
                        <FaSignOutAlt className="text-sm" />
                        Sign Out
                      </button>
                    </li>
                  </>
                )}
                
                {!user && (
                  <li className="border-t border-gray-200 mt-2 pt-2">
                    <div className="flex gap-2">
                      <Link to="/login" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-all duration-300">
                        <FaSignInAlt className="text-sm" />
                        Login
                      </Link>
                      <Link to="/register" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300">
                        <FaUserPlus className="text-sm" />
                        Register
                      </Link>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Inline Styles */}
      <style jsx>{`
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
          background: #f1f1f1;
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
        a:focus, button:focus {
          outline: 2px solid #10b981;
          outline-offset: 2px;
        }
        
        /* Dropdown animations */
        .dropdown-content {
          animation: slideDown 0.2s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        /* Active link animations */
        .active {
          position: relative;
        }
        
        .active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: linear-gradient(to right, #10b981, #3b82f6);
          border-radius: 1px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;