import React from 'react';
import { FaClock, FaUtensils, FaStar, FaHeart } from 'react-icons/fa';
import Heading from '../Heading/Heading';

const recipes = [
  {
    id: 1,
    title: "🍳 Veggie Stir Fry",
    ingredients: ["Carrot", "Broccoli", "Bell Pepper"],
    time: "15 mins",
    difficulty: "Easy",
    rating: 4.8,
    image: "https://i.ibb.co/0Vt9xBpV/download-6.jpg",
    description: "A quick and healthy stir fry using fresh vegetables"
  },
  {
    id: 2,
    title: "🥗 Simple Garden Salad",
    ingredients: ["Lettuce", "Cucumber", "Tomato"],
    time: "10 mins",
    difficulty: "Easy",
    rating: 4.5,
    image: "https://i.ibb.co/cS14dd69/images-1.jpg",
    description: "Fresh and crisp salad perfect for any meal"
  },
  {
    id: 3,
    title: "🍞 Bread Pudding",
    ingredients: ["Old Bread", "Milk", "Sugar"],
    time: "25 mins",
    difficulty: "Medium",
    rating: 4.9,
    image: "https://i.ibb.co/WvyksBxt/download-8.jpg",
    description: "Delicious dessert made from leftover bread"
  },
];

const QuickRecipes = () => {
  return (
    <section className="py-16 px-4 mt-10 md:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Fresh & Quick Recipes
          </div>
          <Heading text={"🍽️ Quick Recipes Using Your Foods"} />
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Turn your nearly expiring foods into delicious meals! Here are some simple, quick recipes you can try at home.
          </p>
          <div className="flex justify-center items-center gap-8 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaClock className="text-yellow-500" />
              <span>Quick & Easy</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUtensils className="text-green-500" />
              <span>Simple Ingredients</span>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-orange-500" />
              <span>Highly Rated</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div 
              key={recipe.id} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Recipe Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Difficulty Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                  {recipe.difficulty}
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs">
                  <FaStar className="text-yellow-500" />
                  <span className="font-semibold">{recipe.rating}</span>
                </div>
                
                {/* Favorite Button */}
                <button className="absolute bottom-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors duration-300">
                  <FaHeart className="text-sm" />
                </button>
              </div>
              
              {/* Recipe Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {recipe.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {recipe.description}
                </p>
                
                {/* Ingredients */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FaUtensils className="text-green-500 text-sm" />
                    <span className="text-sm font-semibold text-gray-700">Ingredients:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Time */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaClock className="text-yellow-500" />
                    <span className="font-medium">{recipe.time}</span>
                  </div>
                  
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-300 transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span>View All Recipes</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div> */}
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
        
        /* Loading animation for images */
        img {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default QuickRecipes;