import React, { useState, useEffect } from 'react';
import { FaUtensils, FaCalendarAlt, FaWeight, FaCheck, FaClock, FaLightbulb, FaArrowRight } from 'react-icons/fa';
import Heading from '../Heading/Heading';
import axios from 'axios';
import SkeletonCard from '../Skeleton/SkeletonCard';

const SmartSuggestions = () => {
  const [foods, setFoods] = useState([]);
  const [usedFoods, setUsedFoods] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('https://server-indol-nu.vercel.app/foods')
      .then(res => {
        console.log(res)
        setFoods(res.data || res.data);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const toggleUsed = (id) => {
    setUsedFoods(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Group by category
  const groupedFoods = foods.reduce((acc, food) => {
    acc[food.category] = acc[food.category] || [];
    acc[food.category].push(food);
    return acc;
  }, {});

  // Calculate days until expiry
  const getDaysUntilExpiry = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get expiry status
  const getExpiryStatus = (days) => {
    if (days < 0) return { status: 'Expired', color: 'red', bg: 'bg-red-100', text: 'text-red-700' };
    if (days <= 3) return { status: 'Urgent', color: 'red', bg: 'bg-red-100', text: 'text-red-700' };
    if (days <= 7) return { status: 'Soon', color: 'orange', bg: 'bg-orange-100', text: 'text-orange-700' };
    return { status: 'Fresh', color: 'green', bg: 'bg-green-100', text: 'text-green-700' };
  };

  return (
    <section className="py-16 mt-10 px-4 md:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <FaLightbulb className="mr-2" />
            AI-Powered Food Suggestions
          </div>
          <Heading text={"🍽️ Smart Food Suggestions"} />
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Get intelligent suggestions for your food items. Track usage, monitor expiry dates, and reduce waste with our smart recommendations!
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaClock className="text-yellow-500" />
              <span>Expiry Tracking</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Usage Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLightbulb className="text-orange-500" />
              <span>Smart Recommendations</span>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-3 rounded mb-4"></div>
                <div className="bg-gray-200 h-8 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedFoods).map(([category, items], categoryIndex) => (
              <div 
                key={category}
                className="group"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <FaUtensils className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{category}</h3>
                    <p className="text-gray-600">{items.length} items in this category</p>
                  </div>
                </div>

                {/* Food Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((food, index) => {
                    const daysUntilExpiry = getDaysUntilExpiry(food.expiryDate);
                    const expiryStatus = getExpiryStatus(daysUntilExpiry);
                    const isUsed = usedFoods[food._id];
                    
                    return (
                      <div 
                        key={food._id}
                        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                        style={{ animationDelay: `${(categoryIndex * 200) + (index * 100)}ms` }}
                      >
                        {/* Food Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={food.foodImage}
                            alt={food.foodTitle}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          
                          {/* Expiry Status Badge */}
                          <div className={`absolute top-4 left-4 px-3 py-1 ${expiryStatus.bg} ${expiryStatus.text} rounded-full text-xs font-semibold backdrop-blur-sm`}>
                            {expiryStatus.status}
                          </div>
                          
                          {/* Used Badge */}
                          {isUsed && (
                            <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold backdrop-blur-sm">
                              Used ✅
                            </div>
                          )}
                        </div>
                        
                        {/* Food Content */}
                        <div className="p-6">
                          <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                            {food.foodTitle}
                          </h4>
                          
                          {/* Meta Information */}
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <FaCalendarAlt className="text-blue-500" />
                              <span>Expires: {new Date(food.expiryDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <FaWeight className="text-purple-500" />
                              <span>Quantity: <span className="font-medium">{food.quantity}</span></span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <FaClock className={`text-${expiryStatus.color}-500`} />
                              <span className={`${expiryStatus.text} font-medium`}>
                                {daysUntilExpiry < 0 
                                  ? `${Math.abs(daysUntilExpiry)} days expired` 
                                  : `${daysUntilExpiry} days left`
                                }
                              </span>
                            </div>
                          </div>
                          
                          {/* Action Button */}
                          <button
                            onClick={() => toggleUsed(food._id)}
                            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${
                              isUsed
                                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                            }`}
                          >
                            <div className="flex items-center justify-center gap-2">
                              {isUsed ? (
                                <>
                                  <FaCheck className="text-sm" />
                                  <span>Marked as Used</span>
                                </>
                              ) : (
                                <>
                                  <FaArrowRight className="text-sm" />
                                  <span>Mark as Used</span>
                                </>
                              )}
                            </div>
                          </button>
                        </div>
                        
                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-300 transition-all duration-500"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary Section */}
        {!loading && foods.length > 0 && (
          <div className="mt-16">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Smart Food Management</h3>
                <p className="text-green-100 max-w-2xl mx-auto text-lg">
                  Track your food usage, monitor expiry dates, and get personalized recommendations to reduce waste.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCalendarAlt className="text-2xl" />
                  </div>
                  <h4 className="font-semibold mb-2">Expiry Tracking</h4>
                  <p className="text-green-100 text-sm">Never miss an expiry date again</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-2xl" />
                  </div>
                  <h4 className="font-semibold mb-2">Usage Monitoring</h4>
                  <p className="text-green-100 text-sm">Track what you've consumed</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaLightbulb className="text-2xl" />
                  </div>
                  <h4 className="font-semibold mb-2">Smart Suggestions</h4>
                  <p className="text-green-100 text-sm">Get AI-powered recommendations</p>
                </div>
              </div>
            </div>
          </div>
        )}
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
        
        /* Card hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\\:-translate-y-2 {
          transform: translateY(-0.5rem);
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
        button:focus {
          outline: 2px solid #10b981;
          outline-offset: 2px;
        }
        
        /* Animation for cards */
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
        
        /* Loading animation */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </section>
  );
};

export default SmartSuggestions;