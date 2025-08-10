import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaLightbulb, FaShieldAlt, FaBell, FaEdit, FaUserShield } from 'react-icons/fa';
import Heading from '../Heading/Heading';

const faqs = [
  {
    id: 1,
    question: "What is SafeBite and how does it help me?",
    answer: "SafeBite is a web app that helps you track your food items and get timely alerts before they expire. This reduces food waste, saves money, and ensures your meals are always fresh and safe to eat.",
    icon: FaQuestionCircle,
    category: "General"
  },
  {
    id: 2,
    question: "How do I add food items to SafeBite?",
    answer: "Once you're logged in, go to the \"Add Food\" page. Fill in details like food name, category, quantity, expiry date, and description. The system automatically records the added date and links the item to your account.",
    icon: FaEdit,
    category: "Usage"
  },
  {
    id: 3,
    question: "Will I get notified when food is about to expire?",
    answer: "Yes! SafeBite highlights nearly expired items (within 5 days of expiry) on your home page, so you can prioritize them. You'll also see expired items clearly marked on the Fridge page.",
    icon: FaBell,
    category: "Notifications"
  },
  {
    id: 4,
    question: "Can I update or delete a food item after adding it?",
    answer: "Yes, on the \"My Items\" page, you can easily update food details using a modal form or delete them after confirmation.",
    icon: FaEdit,
    category: "Management"
  },
  {
    id: 5,
    question: "Is my data secure with SafeBite?",
    answer: "Absolutely. SafeBite uses JWT-based authentication and environment-secured Firebase and MongoDB configurations. Only authorized users can access or modify their own data.",
    icon: FaUserShield,
    category: "Security"
  }
];

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-16 px-4 md:px-12 mt-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <FaLightbulb className="mr-2" />
            Got Questions? We've Got Answers!
          </div>
          <Heading text={"Frequently Asked Questions"} />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to know about SafeBite. Can't find the answer you're looking for? Please contact our support team.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const IconComponent = faq.icon;
                const isOpen = openFaq === faq.id;
                
                return (
                  <div 
                    key={faq.id}
                    className="group bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-green-200 transition-all duration-300 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-inset"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 leading-relaxed">
                            {faq.question}
                          </h3>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Chevron Icon */}
                      <div className="flex-shrink-0 ml-4">
                        <FaChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-green-500' : 'group-hover:text-green-500'
                          }`} 
                        />
                      </div>
                    </button>
                    
                    {/* Answer Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-14">
                          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-green-400">
                            <p className="text-gray-700 leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-green-100 mb-6 max-w-md mx-auto">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Contact Support</span>
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
          outline: 2px solid #10b981;
          outline-offset: 2px;
        }
        
        /* Hover effects */
        .group:hover {
          transform: translateY(-2px);
        }
        
        /* Animation for FAQ items */
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
      `}</style>
    </section>
  );
};

export default Faqs;