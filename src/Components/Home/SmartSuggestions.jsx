import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from '../Heading/Heading';
import axios from 'axios';
import SkeletonCard from '../Skeleton/SkeletonCard';


const SmartSuggestions = () => {
  const [foods, setFoods] = useState([]);
  const [usedFoods, setUsedFoods] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3000/foods')
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Heading text={"🍽️ Smart Food Suggestions"}/>

      {loading ? (
        <div>
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="mb-10">
              <SkeletonCard />
            </div>
          ))}
        </div>
      ) : (
        Object.entries(groupedFoods).map(([category, items]) => (
          <motion.div
            key={category}
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-green-700 border-b pb-1">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(food => (
                <motion.div
                  key={food._id}
                  className="bg-[#e5ece6] shadow-md rounded-xl overflow-hidden p-5 border hover:shadow-lg transition"
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={food.foodImage}
                    alt={food.foodTitle}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-bold text-gray-800">{food.foodTitle}</h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Expiry: {new Date(food.expiryDate).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Quantity: <span className="font-medium">{food.quantity}</span>
                  </p>
                  <button
                    onClick={() => toggleUsed(food._id)}
                    className={`w-full py-2 rounded-md text-white font-medium transition-all duration-300 ${
                      usedFoods[food._id]
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-[#5d7d62] hover:bg-[#5d7d62]'
                    }`}
                  >
                    {usedFoods[food._id] ? 'Used ✅' : 'Mark as Used'}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default SmartSuggestions;