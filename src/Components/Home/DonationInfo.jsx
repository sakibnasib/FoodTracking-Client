import React from 'react';
import { FaHeart, FaHandHoldingHeart, FaUsers, FaGlobe, FaArrowRight, FaLeaf, FaCheck } from 'react-icons/fa';
import Heading from '../Heading/Heading';

const DonationInfo = () => {
  return (
    <section className="py-16 px-4 mt-10 md:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <FaHeart className="mr-2" />
            Make a Difference Today
          </div>
          <Heading text={"Help Reduce Food Waste"} />
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Donate your excess food and support communities in need. Every small contribution counts towards building a sustainable future!
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaHandHoldingHeart className="text-red-500" />
              <span>Support Communities</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLeaf className="text-green-500" />
              <span>Reduce Waste</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-blue-500" />
              <span>Global Impact</span>
            </div>
          </div>
        </div>

        {/* Main Donation Card */}
        <div className="bg-gradient-to-r from-green-500 via-green-600 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative p-8 md:p-12 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FaHeart className="text-2xl" />
                    </div>
                    <h3 className="text-3xl font-bold">Join the Movement</h3>
                  </div>
                  
                  <p className="text-green-100 text-lg leading-relaxed mb-6">
                    Your excess food can make a real difference in someone's life. Together, we can reduce food waste and support communities in need.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <FaCheck className="text-sm" />
                      </div>
                      <span className="text-green-100">Help families in need</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <FaCheck className="text-sm" />
                      </div>
                      <span className="text-green-100">Reduce environmental impact</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <FaCheck className="text-sm" />
                      </div>
                      <span className="text-green-100">Build stronger communities</span>
                    </div>
                  </div>
                  
                  <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <span>Donate Now</span>
                    <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
                
                {/* Visual Element */}
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaHandHoldingHeart className="text-4xl" />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">Impact Stats</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-200">1M+</div>
                          <div className="text-sm text-green-100">Meals Donated</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-200">50K+</div>
                          <div className="text-sm text-green-100">Families Helped</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaUsers className="text-xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Community Support</h4>
            <p className="text-gray-600 leading-relaxed">
              Connect with local communities and organizations to make a direct impact in your area.
            </p>
          </div>
          
          <div className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaLeaf className="text-xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Environmental Impact</h4>
            <p className="text-gray-600 leading-relaxed">
              Reduce food waste and its environmental impact while helping those in need.
            </p>
          </div>
          
          <div className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaGlobe className="text-xl" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">Global Movement</h4>
            <p className="text-gray-600 leading-relaxed">
              Join a worldwide network of people committed to reducing food waste and helping others.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-orange-100 mb-6 max-w-md mx-auto">
              Start donating today and be part of the solution to food waste and hunger.
            </p>
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Get Started</span>
              <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
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
        
        /* Staggered animation delays */
        .group:nth-child(1) { animation-delay: 0.1s; }
        .group:nth-child(2) { animation-delay: 0.2s; }
        .group:nth-child(3) { animation-delay: 0.3s; }
        
        /* Pulse animation for impact stats */
        .text-3xl {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  );
};

export default DonationInfo;