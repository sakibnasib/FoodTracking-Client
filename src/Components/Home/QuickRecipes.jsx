import React from 'react';
import { FaClock, FaUtensils } from 'react-icons/fa';
import Heading from '../Heading/Heading';
const recipes = [
  {
    id: 1,
    title: "🍳 Veggie Stir Fry",
    ingredients: ["Carrot", "Broccoli", "Bell Pepper"],
    time: "15 mins",
    image: "https://i.ibb.co/0Vt9xBpV/download-6.jpg",
  },
  {
    id: 2,
    title: "🥗 Simple Garden Salad",
    ingredients: ["Lettuce", "Cucumber", "Tomato"],
    time: "10 mins",
    image: "https://i.ibb.co/cS14dd69/images-1.jpg",
  },
  {
    id: 3,
    title: "🍞 Bread Pudding",
    ingredients: ["Old Bread", "Milk", "Sugar"],
    time: "25 mins",
    image: "https://i.ibb.co/WvyksBxt/download-8.jpg",
  },
];

const QuickRecipes = () => {
  return (
    <section className="py-12 mt-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <Heading text={"🍽️ Quick Recipes Using Your Foods"} />
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Turn your nearly expiring foods into delicious meals! Here are some simple, quick recipes you can try at home.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-[#e5ece6] rounded-xl shadow-md p-5 hover:shadow-lg transition">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h3>
              <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
                <FaUtensils className="text-green-600" /> Ingredients: {recipe.ingredients.join(', ')}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaClock className="text-yellow-600" /> Cooking Time: {recipe.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickRecipes;