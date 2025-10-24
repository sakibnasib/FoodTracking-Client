// import { Link, NavLink } from 'react-router';
// import { Tooltip } from "react-tooltip";
// import useAuth from '../../hook/useAuth';
// import logo from '../../../public/logo.png'
// import { FaCartArrowDown, FaHome, FaUtensils, FaPlus, FaList, FaInfoCircle, FaPhone, FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaCog, FaHistory, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
// import { useState } from 'react';

// const Navbar = () => {
//   const { user, logOut, loading } = useAuth();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   const handleLogOut = () => {
//     logOut()
//       .then(() => {
//         setMobileMenuOpen(false);
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }

//   const navItems = [
//     { path: '/', label: 'Home', icon: FaHome },
//     { path: '/allfood', label: 'All Food', icon: FaUtensils },
//     { path: '/about', label: 'About', icon: FaInfoCircle },
//     { path: '/contactUs', label: 'Contact', icon: FaPhone },
//   ];

//   const userNavItems = [
//     { path: '/addfood', label: 'Add Food', icon: FaPlus },
//     { path: '/myaddfood', label: 'My Food', icon: FaList },
//   ];

//   const userMenuItems = [
//     { path: '/profile', label: 'My Profile', icon: FaUser },
//     { path: '/orders', label: 'My Orders', icon: FaHistory },
//     { path: '/favorites', label: 'Favorites', icon: FaHeart },
//     { path: '/settings', label: 'Settings', icon: FaCog },
//   ];

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-gradient-to-r from-green-600 via-green-700 to-blue-700 shadow-lg backdrop-blur-md border-b border-white/10">
//       <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
          
//           {/* Logo */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <Link 
//                 to="/" 
//                 className="flex items-center gap-2 sm:gap-3 group"
//                 onClick={closeMobileMenu}
//               >
//                 <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
//                   <img src={logo} alt="FoodTracking Logo" className="w-5 h-5 sm:w-6 sm:h-6" />
//                 </div>
//                 <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-green-200 transition-colors duration-300 whitespace-nowrap">
//                   FoodTracking
//                 </span>
//               </Link>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:block">
//             <div className="ml-8 flex items-baseline space-x-4 xl:space-x-8">
//               {navItems.map(({ path, label, icon: Icon }) => (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   className={({ isActive }) =>
//                     `flex items-center gap-2 px-3 py-2 xl:px-4 xl:py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
//                       isActive 
//                         ? 'text-green-200 bg-white/20 shadow-lg' 
//                         : 'text-white hover:text-green-200'
//                     }`
//                   }
//                 >
//                   <Icon className="text-sm" />
//                   {label}
//                 </NavLink>
//               ))}
              
//               {user && userNavItems.map(({ path, label, icon: Icon }) => (
//                 <NavLink
//                   key={path}
//                   to={path}
//                   className={({ isActive }) =>
//                     `flex items-center gap-1 px-3 py-2 xl:px-4 xl:py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
//                       isActive 
//                         ? 'text-green-200 bg-white/20 shadow-lg' 
//                         : 'text-white hover:text-green-200'
//                     }`
//                   }
//                 >
//                   <Icon className="text-sm" />
//                   {label}
//                 </NavLink>
//               ))}
//             </div>
//           </div>

//           {/* Right side - User menu */}
//           <div className="flex items-center gap-2 sm:gap-4">
            
//             {/* Cart Icon for logged in users */}
//             {user && (
//               <Link 
//                 to='/addtocart' 
//                 className="relative p-2 text-white hover:text-green-200 transition-colors duration-300 group"
//                 data-tooltip-id="cart-tooltip"
//                 data-tooltip-content="View Cart"
//                 onClick={closeMobileMenu}
//               >
//                 <FaCartArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
//                 <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold shadow-sm">
//                   3
//                 </div>
//               </Link>
//             )}

//             {/* User Menu - Desktop */}
//             {user ? (
//               <div className="hidden lg:block relative">
//                 <div className="dropdown dropdown-end">
//                   <div
//                     tabIndex={0}
//                     role="button"
//                     className="flex items-center gap-2 sm:gap-3 p-2 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group border border-transparent hover:border-white/20"
//                     data-tooltip-id="user-tooltip"
//                     data-tooltip-content="Account Menu"
//                   >
//                     <div className="relative">
//                       <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white/40 group-hover:border-white/80 transition-all duration-300 shadow-lg">
//                         <img 
//                           alt="Profile" 
//                           src={user.photoURL || 'https://via.placeholder.com/40'} 
//                           className="w-full h-full object-cover"
//                           onError={(e) => {
//                             e.target.src = 'https://via.placeholder.com/40';
//                           }}
//                         />
//                       </div>
//                       <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-white"></div>
//                     </div>
                    
//                     <div className="hidden xl:flex flex-col items-start">
//                       <span className="text-white text-sm font-semibold max-w-[100px] xl:max-w-[120px] truncate">
//                         {user.displayName || 'User'}
//                       </span>
//                       <span className="text-green-200 text-xs opacity-80 max-w-[100px] xl:max-w-[120px] truncate">
//                         {user.email}
//                       </span>
//                     </div>
                    
//                     <svg 
//                       className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:rotate-180 transition-transform duration-300" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </div>
                  
//                   <ul 
//                     tabIndex={0} 
//                     className="dropdown-content menu p-3 shadow-2xl bg-white/95 backdrop-blur-xl rounded-2xl w-64 mt-3 border border-white/20 space-y-1"
//                   >
//                     {/* User Header */}
//                     <li className="mb-2">
//                       <div className="px-4 py-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
//                         <div className="flex items-center gap-3">
//                           <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-green-300 shadow-sm">
//                             <img 
//                               alt="Profile" 
//                               src={user.photoURL || 'https://via.placeholder.com/48'} 
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="text-sm font-semibold text-gray-800 truncate">
//                               {user.displayName || 'User'}
//                             </p>
//                             <p className="text-xs text-gray-600 truncate mt-1">
//                               {user.email}
//                             </p>
//                             <div className="flex items-center gap-1 mt-1">
//                               <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                               <span className="text-xs text-green-600 font-medium">Online</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </li>

//                     {/* User Menu Items */}
//                     <div className="border-t border-gray-100 pt-2">
//                       {userMenuItems.map(({ path, label, icon: Icon }) => (
//                         <li key={path}>
//                           <Link
//                             to={path}
//                             className="flex items-center gap-3 px-3 py-2.5 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 group"
//                             onClick={closeMobileMenu}
//                           >
//                             <Icon className="text-sm text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
//                             <span className="font-medium">{label}</span>
//                           </Link>
//                         </li>
//                       ))}
//                     </div>

//                     {/* Quick Stats */}
//                     <li className="px-3 py-2">
//                       <div className="grid grid-cols-3 gap-2 text-center">
//                         <div className="bg-gray-50 rounded-lg p-2">
//                           <div className="text-xs text-gray-500">Orders</div>
//                           <div className="text-sm font-bold text-gray-800">12</div>
//                         </div>
//                         <div className="bg-gray-50 rounded-lg p-2">
//                           <div className="text-xs text-gray-500">Favorites</div>
//                           <div className="text-sm font-bold text-gray-800">8</div>
//                         </div>
//                         <div className="bg-gray-50 rounded-lg p-2">
//                           <div className="text-xs text-gray-500">Points</div>
//                           <div className="text-sm font-bold text-gray-800">150</div>
//                         </div>
//                       </div>
//                     </li>

//                     {/* Logout Button */}
//                     <li className="border-t border-gray-100 pt-2 mt-2">
//                       <button
//                         onClick={handleLogOut}
//                         className="flex items-center gap-3 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 w-full text-left group"
//                       >
//                         <FaSignOutAlt className="text-sm group-hover:scale-110 transition-transform duration-200" />
//                         <span className="font-medium">Sign Out</span>
//                       </button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             ) : (
//               <div className="hidden lg:flex items-center gap-2 sm:gap-3">
//                 <Link to="/login" onClick={closeMobileMenu}>
//                   <button className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 text-white border border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 group text-sm">
//                     <FaSignInAlt className="text-sm group-hover:scale-110 transition-transform duration-300" />
//                     <span className="font-medium">Login</span>
//                   </button>
//                 </Link>
//                 <div className="hidden xl:block">
//                   <Link to="/register" onClick={closeMobileMenu}>
//                     <button className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white text-green-700 rounded-lg hover:bg-green-50 transition-all duration-300 group shadow-lg hover:shadow-xl text-sm">
//                       <FaUserPlus className="text-sm group-hover:scale-110 transition-transform duration-300" />
//                       <span className="font-medium">Register</span>
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             )}

//             {/* Mobile menu button */}
//             <div className="lg:hidden">
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
//                 aria-label="Toggle menu"
//               >
//                 {mobileMenuOpen ? (
//                   <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
//                 ) : (
//                   <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu - FIXED VERSION */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
//             <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
//               <div className="flex flex-col h-full">
//                 {/* Mobile Menu Header */}
//                 <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-600 to-blue-700 text-white">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
//                       <img src={logo} alt="Logo" className="w-5 h-5" />
//                     </div>
//                     <span className="text-lg font-bold">FoodTracking</span>
//                   </div>
//                   <button
//                     onClick={closeMobileMenu}
//                     className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
//                   >
//                     <FaTimes className="w-5 h-5" />
//                   </button>
//                 </div>

//                 {/* Mobile Menu Content - Scrollable */}
//                 <div className="flex-1 overflow-y-auto">
//                   <div className="p-4 space-y-6">
                    
//                     {/* Main Navigation Links */}
//                     <div>
//                       <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
//                         Navigation
//                       </h3>
//                       <div className="space-y-1">
//                         {navItems.map(({ path, label, icon: Icon }) => (
//                           <NavLink
//                             key={path}
//                             to={path}
//                             onClick={closeMobileMenu}
//                             className={({ isActive }) =>
//                               `flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
//                                 isActive 
//                                   ? 'text-green-600 bg-green-50 border border-green-200' 
//                                   : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
//                               }`
//                             }
//                           >
//                             <Icon className="text-lg" />
//                             <span>{label}</span>
//                           </NavLink>
//                         ))}
//                       </div>
//                     </div>

//                     {/* User Navigation Links (if logged in) */}
//                     {user && (
//                       <div>
//                         <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
//                           My Account
//                         </h3>
//                         <div className="space-y-1">
//                           {userNavItems.map(({ path, label, icon: Icon }) => (
//                             <NavLink
//                               key={path}
//                               to={path}
//                               onClick={closeMobileMenu}
//                               className={({ isActive }) =>
//                                 `flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
//                                   isActive 
//                                     ? 'text-green-600 bg-green-50 border border-green-200' 
//                                     : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
//                                 }`
//                               }
//                             >
//                               <Icon className="text-lg" />
//                               <span>{label}</span>
//                             </NavLink>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {/* User Profile Section (if logged in) */}
//                     {user ? (
//                       <div className="border-t border-gray-200 pt-6">
//                         {/* User Info */}
//                         <div className="flex items-center gap-3 px-3 py-4 bg-gray-50 rounded-xl mb-4">
//                           <div className="relative">
//                             <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500">
//                               <img 
//                                 alt="Profile" 
//                                 src={user.photoURL || 'https://via.placeholder.com/48'} 
//                                 className="w-full h-full object-cover"
//                               />
//                             </div>
//                             <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="text-gray-800 font-semibold text-sm truncate">
//                               {user.displayName || 'User'}
//                             </p>
//                             <p className="text-gray-600 text-xs truncate">
//                               {user.email}
//                             </p>
//                           </div>
//                         </div>

//                         {/* User Menu Items */}
//                         <div className="space-y-1 mb-4">
//                           {userMenuItems.map(({ path, label, icon: Icon }) => (
//                             <Link
//                               key={path}
//                               to={path}
//                               onClick={closeMobileMenu}
//                               className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200 text-base"
//                             >
//                               <Icon className="text-lg" />
//                               <span>{label}</span>
//                             </Link>
//                           ))}
//                         </div>

//                         {/* Cart Link */}
//                         <Link
//                           to="/addtocart"
//                           onClick={closeMobileMenu}
//                           className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200 mb-4"
//                         >
//                           <FaCartArrowDown className="text-lg" />
//                           <span>Shopping Cart</span>
//                           <div className="ml-auto w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
//                             3
//                           </div>
//                         </Link>

//                         {/* Logout Button */}
//                         <button
//                           onClick={handleLogOut}
//                           className="w-full flex items-center justify-center gap-3 px-3 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200 border border-red-200 font-medium"
//                         >
//                           <FaSignOutAlt className="text-lg" />
//                           <span>Sign Out</span>
//                         </button>
//                       </div>
//                     ) : (
//                       /* Login/Register for non-logged in users */
//                       <div className="border-t border-gray-200 pt-6">
//                         <div className="space-y-3">
//                           <Link
//                             to="/login"
//                             onClick={closeMobileMenu}
//                             className="w-full flex items-center justify-center gap-3 px-3 py-3 text-green-600 border border-green-600 rounded-xl hover:bg-green-50 transition-all duration-200 font-medium"
//                           >
//                             <FaSignInAlt className="text-lg" />
//                             <span>Login</span>
//                           </Link>
//                           <Link
//                             to="/register"
//                             onClick={closeMobileMenu}
//                             className="w-full flex items-center justify-center gap-3 px-3 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 font-medium"
//                           >
//                             <FaUserPlus className="text-lg" />
//                             <span>Register</span>
//                           </Link>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Tooltips */}
//       <Tooltip id="cart-tooltip" />
//       <Tooltip id="user-tooltip" />
//     </nav>
//   );
// };

// export default Navbar;



import { Link, NavLink } from 'react-router';
import useAuth from '../../hook/useAuth';
import logo from '../../../public/logo.png';
import { 
  FaCartArrowDown, 
  FaHome, 
  FaUtensils, 
  FaPlus, 
  FaList, 
  FaInfoCircle, 
  FaPhone, 
  FaUser, 
  FaSignOutAlt, 
  FaSignInAlt, 
  FaUserPlus, 
  FaBars, 
  FaTimes,
  FaChevronDown,
  FaShoppingBag,
  FaUserCircle
} from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setIsMobileMenuOpen(false);
        setIsUserDropdownOpen(false);
      })
      .catch(error => console.log(error));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation items for all users
  const mainNavItems = [
    { path: '/', label: 'Home', icon: FaHome },
    { path: '/allfood', label: 'Menu', icon: FaUtensils },
    { path: '/about', label: 'About', icon: FaInfoCircle },
    { path: '/contactUs', label: 'Contact', icon: FaPhone },
  ];

  // Navigation items for logged in users
  const userNavItems = [
    { path: '/addfood', label: 'Add Food', icon: FaPlus },
    { path: '/myaddfood', label: 'My Foods', icon: FaList },
  ];

  

  return (
    <nav className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 shadow-2xl sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-4 group"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                  <img 
                    src={logo} 
                    alt="FoodTracking Logo" 
                    className="h-7 w-7"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              </div>
              <div>
                <span className="text-white text-2xl font-bold tracking-tight">
                  FoodTracking
                </span>
                <p className="text-emerald-200 text-xs font-medium opacity-80">
                  Fresh & Delicious
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-12 flex items-baseline space-x-1">
              {mainNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? 'text-white bg-white/20 shadow-lg backdrop-blur-sm border border-white/30'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              ))}

              {user && userNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? 'text-white bg-amber-500/80 shadow-lg backdrop-blur-sm'
                        : 'text-white/90 hover:text-white hover:bg-amber-500/60'
                    }`
                  }
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Side - User Actions */}
          <div className="flex items-center space-x-3">
            
            {/* Cart Icon */}
            {user && (
              <Link 
                to="/addtocart" 
                className="relative p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group"
                onClick={closeMobileMenu}
              >
                <FaCartArrowDown className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                  3
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </Link>
            )}

            {/* User Dropdown */}
            {user ? (
              <div className="hidden lg:block relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center space-x-3 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="text-left">
                    <p className="text-white text-sm font-semibold max-w-[120px] truncate">
                      {user.displayName || 'User'}
                    </p>
                    <p className="text-emerald-200 text-xs opacity-80">
                      Premium Member
                    </p>
                  </div>
                  <FaChevronDown className={`w-3 h-3 text-white transition-transform duration-300 ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* User Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                    {/* User Header */}
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold shadow-lg">
                          {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg truncate">
                            {user.displayName || 'User'}
                          </h3>
                          <p className="text-emerald-100 text-sm truncate opacity-90">
                            {user.email}
                          </p>
                          <div className="flex items-center space-x-1 mt-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-green-200">Online</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* User Menu Items */}
                  

                    {/* Stats */}
                   

                    {/* Logout */}
                    <div className="p-3 border-t border-gray-100">
                      <button
                        onClick={handleLogOut}
                        className="flex items-center space-x-3 w-full px-3 py-3 text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-200 group"
                      >
                        <FaSignOutAlt className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Auth Buttons
              <div className="hidden lg:flex items-center space-x-3">
                <Link to="/login">
                  <button className="flex items-center space-x-2 px-6 py-3 text-white border border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                    <FaSignInAlt className="w-4 h-4" />
                    <span className="font-semibold">Login</span>
                  </button>
                </Link>
                <Link to="/register">
                  <button className="flex items-center space-x-2 px-6 py-3 bg-white text-emerald-700 rounded-xl hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                    <FaUserPlus className="w-4 h-4" />
                    <span>Get Started</span>
                  </button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-6 h-6 text-white" />
              ) : (
                <FaBars className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-80 max-w-full bg-gradient-to-b from-emerald-700 to-teal-800 shadow-2xl border-l border-white/20">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <img src={logo} alt="Logo" className="h-6 w-6" />
                  </div>
                  <span className="text-white text-xl font-bold">FoodTracking</span>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* Navigation Items */}
                <div className="space-y-2">
                  <h3 className="text-emerald-200 text-sm font-semibold uppercase tracking-wider px-3">
                    Navigation
                  </h3>
                  {mainNavItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        `flex items-center space-x-4 px-4 py-4 rounded-xl text-white font-medium transition-all ${
                          isActive
                            ? 'bg-white/20 shadow-lg border border-white/30'
                            : 'hover:bg-white/10'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </NavLink>
                  ))}
                </div>

                {/* User Navigation */}
                {user && (
                  <div className="space-y-2">
                    <h3 className="text-amber-200 text-sm font-semibold uppercase tracking-wider px-3">
                      My Account
                    </h3>
                    {userNavItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          `flex items-center space-x-4 px-4 py-4 rounded-xl text-white font-medium transition-all ${
                            isActive
                              ? 'bg-amber-500/80 shadow-lg'
                              : 'hover:bg-amber-500/60'
                          }`
                        }
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </NavLink>
                    ))}
                    <Link
                      to="/addtocart"
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-4 px-4 py-4 rounded-xl text-white font-medium hover:bg-white/10 transition-all"
                    >
                      <FaCartArrowDown className="w-5 h-5" />
                      <span>My Cart</span>
                      <span className="ml-auto bg-rose-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                        3
                      </span>
                    </Link>
                  </div>
                )}

                {/* User Info */}
                {user ? (
                  <div className="border-t border-white/20 pt-6 mt-6">
                    <div className="bg-white/10 rounded-xl p-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                          {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                        </div>
                        <div>
                          <p className="text-white font-semibold">
                            {user.displayName || 'User'}
                          </p>
                          <p className="text-emerald-200 text-sm">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleLogOut}
                      className="flex items-center space-x-4 w-full px-4 py-4 text-rose-400 hover:bg-rose-500/20 rounded-xl transition-all border border-rose-400/30"
                    >
                      <FaSignOutAlt className="w-5 h-5" />
                      <span className="font-semibold">Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <div className="border-t border-white/20 pt-6 mt-6 space-y-3">
                    <Link to="/login" onClick={closeMobileMenu}>
                      <button className="flex items-center space-x-4 w-full px-4 py-4 text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all">
                        <FaSignInAlt className="w-5 h-5" />
                        <span className="font-semibold">Login</span>
                      </button>
                    </Link>
                    <Link to="/register" onClick={closeMobileMenu}>
                      <button className="flex items-center space-x-4 w-full px-4 py-4 bg-white text-emerald-700 rounded-xl hover:bg-emerald-50 transition-all font-semibold">
                        <FaUserPlus className="w-5 h-5" />
                        <span>Create Account</span>
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;