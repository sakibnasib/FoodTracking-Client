import React from 'react';
import { FaLeaf, FaUsers, FaShieldAlt, FaMobileAlt, FaRecycle, FaBell, FaChartBar, FaHeart, FaArrowRight, FaEnvelope, FaLightbulb, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-20 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
              <FaLeaf className="mr-2" />
              Smart Food Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">FoodTracking</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              FoodTracking is your intelligent food tracker that helps reduce food waste by reminding you before your food expires. With a user-friendly design, personalized dashboard, and real-time expiry alerts — we aim to build a mindful and sustainable food habit.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">10K+</h3>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRecycle className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">50K+</h3>
                <p className="text-gray-600">Items Saved</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">95%</h3>
                <p className="text-gray-600">User Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="group">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaLightbulb className="text-2xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">🎯 Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower individuals and families to reduce food waste through intelligent tracking, timely alerts, and responsible food usage. We believe that small changes in daily habits can create a significant impact on our environment and communities.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FaLeaf className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Sustainable Living</h4>
                    <p className="text-sm text-gray-600">Building eco-friendly habits</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaGlobe className="text-2xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">🌱 Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A world where food is respected, preserved, and consumed consciously — helping both our wallets and the planet. We envision communities where every meal counts and nothing goes to waste.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <FaRecycle className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Zero Waste Future</h4>
                    <p className="text-sm text-gray-600">Creating sustainable communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-20 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose FoodTracking?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the features that make SafeBite the ultimate food management solution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBell className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🚨 Expiry Alerts</h3>
                <p className="text-gray-600">Get notified before food goes bad with smart reminders and push notifications.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaChartBar className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Personalized Dashboard</h3>
                <p className="text-gray-600">View your fridge inventory at a glance with beautiful charts and analytics.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaShieldAlt className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🔒 Secure System</h3>
                <p className="text-gray-600">We value your data privacy with enterprise-grade security measures.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaMobileAlt className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">📱 Mobile Responsive</h3>
                <p className="text-gray-600">Works beautifully on any device with seamless cross-platform experience.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaRecycle className="text-2xl text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">♻️ Eco-friendly Approach</h3>
                <p className="text-gray-600">Join the zero-waste movement and contribute to a sustainable future.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaUsers className="text-2xl text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">👥 Community Support</h3>
                <p className="text-gray-600">Connect with like-minded individuals and share food management tips.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Have Suggestions or Feedback?</h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              We'd love to hear from you! Your feedback helps us improve and create a better experience for everyone. Reach out via our contact form or drop us an email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                <FaEnvelope className="text-lg" />
                Contact Us
                <FaArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                <FaHeart className="text-lg" />
                Join Community
                <FaArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>
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
          outline: 2px solid #ffffff;
          outline-offset: 2px;
        }
        
        /* Animation for sections */
        section {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
        
        /* Gradient text animation */
        .bg-gradient-to-r {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Card hover effects */
        .shadow-lg:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Button animations */
        button:hover {
          transform: translateY(-2px);
        }
        
        /* Icon animations */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </div>
  );
};

export default About;