import { FaSnowflake, FaLeaf, FaCheese, FaBox, FaThermometerHalf, FaClock, FaShieldAlt, FaLightbulb } from "react-icons/fa";
import Heading from "../Heading/Heading";

const tips = [
  {
    icon: <FaSnowflake className="text-blue-500" />,
    title: "Freeze Wisely",
    desc: "Store meat in airtight bags, label dates, and never refreeze once thawed.",
    category: "Freezing",
    time: "Prep: 5 mins",
    difficulty: "Easy"
  },
  {
    icon: <FaLeaf className="text-green-500" />,
    title: "Fresh Produce",
    desc: "Leafy greens stay fresh longer if wrapped in paper towel inside a container.",
    category: "Vegetables",
    time: "Prep: 2 mins",
    difficulty: "Easy"
  },
  {
    icon: <FaCheese className="text-yellow-500" />,
    title: "Dairy Care",
    desc: "Store cheese in parchment paper, not plastic. Keep milk on the fridge's middle shelf.",
    category: "Dairy",
    time: "Prep: 3 mins",
    difficulty: "Easy"
  },
  {
    icon: <FaBox className="text-purple-500" />,
    title: "Use Containers",
    desc: "Airtight containers reduce spoilage and protect from fridge odors.",
    category: "Storage",
    time: "Prep: 1 min",
    difficulty: "Easy"
  },
  {
    icon: <FaThermometerHalf className="text-red-500" />,
    title: "Temperature Control",
    desc: "Keep your fridge at 40°F (4°C) or below and freezer at 0°F (-18°C).",
    category: "Temperature",
    time: "Setup: 10 mins",
    difficulty: "Medium"
  },
  {
    icon: <FaClock className="text-orange-500" />,
    title: "First In, First Out",
    desc: "Organize food by expiration date - use oldest items first to prevent waste.",
    category: "Organization",
    time: "Setup: 15 mins",
    difficulty: "Easy"
  },
  {
    icon: <FaShieldAlt className="text-indigo-500" />,
    title: "Food Safety",
    desc: "Never leave perishable food at room temperature for more than 2 hours.",
    category: "Safety",
    time: "Always",
    difficulty: "Easy"
  },
  {
    icon: <FaLightbulb className="text-amber-500" />,
    title: "Smart Labeling",
    desc: "Label containers with contents and date to track freshness easily.",
    category: "Organization",
    time: "Prep: 2 mins",
    difficulty: "Easy"
  }
];

const PreservationTips = () => {
  return (
    <section className="py-16 px-4 md:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <FaSnowflake className="mr-2" />
            Expert Food Preservation Tips
          </div>
          <Heading text={"🧊 Preservation Tips"} />
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Learn how to store your food properly and make it last longer. Reduce waste and keep your kitchen efficient with these expert tips!
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaClock className="text-yellow-500" />
              <span>Quick & Easy</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-500" />
              <span>Food Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLightbulb className="text-orange-500" />
              <span>Proven Methods</span>
            </div>
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl">
                      {tip.icon}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {tip.category}
                  </span>
                </div>
                
                {/* Title */}
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {tip.title}
                </h4>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {tip.desc}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-yellow-500" />
                    <span>{tip.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaShieldAlt className="text-green-500" />
                    <span>{tip.difficulty}</span>
                  </div>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-300 transition-all duration-500"></div>
              
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>
        
        {/* Additional Tips Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Want More Tips?</h3>
              <p className="text-green-100 max-w-2xl mx-auto text-lg">
                Get personalized preservation recommendations based on your food inventory and preferences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaThermometerHalf className="text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">Temperature Monitoring</h4>
                <p className="text-green-100 text-sm">Keep optimal storage conditions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">Smart Scheduling</h4>
                <p className="text-green-100 text-sm">Plan meals around expiry dates</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaLightbulb className="text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">Expert Advice</h4>
                <p className="text-green-100 text-sm">Get tips from food safety experts</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Get Personalized Tips</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
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
        
        /* Animation for tip cards */
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
        .group:nth-child(5) { animation-delay: 0.5s; }
        .group:nth-child(6) { animation-delay: 0.6s; }
        .group:nth-child(7) { animation-delay: 0.7s; }
        .group:nth-child(8) { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
};

export default PreservationTips;