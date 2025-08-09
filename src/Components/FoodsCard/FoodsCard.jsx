import React from 'react';
import {  FaCalendarAlt, FaListAlt, FaBox, FaWeightHanging } from 'react-icons/fa';
import { Link } from 'react-router';
const FoodsCard = ({food}) => {
    const isExpired = new Date(food.expiryDate) < new Date();
       return (
          <div className="w-full mt-10  rounded-xl shadow-md overflow-hidden bg-[#e5ece6] transition-transform duration-200 hover:-translate-y-1">
         <div className="relative w-full h-[200px]">
           <img 
             src={food.foodImage} 
             alt={food.foodTitle} 
             className="w-full h-full object-cover"
           />
           {isExpired && (
             <div className="absolute top-2.5 right-2.5 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
               Expired
             </div>
           )}
         </div>
         
         <div className="p-4">
           <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
              <FaBox className="text-green-600" />
              Category  :
             {food.category}</p>
           {/* <p className="text-gray-600 text-sm mb-4 flex items-center gap-2">
              <FaWeightHanging className="text-green-600"></FaWeightHanging>
             Quantity: {food.quantity}</p> */}
           <p className="text-gray-600 text-sm mb-4 flex items-center gap-2">
             <FaCalendarAlt className="text-green-600" />
             ExpiryDate  :
             {food.expiryDate}</p>
          <Link to={`/food/${food._id}`}>
           <button className="w-full py-2.5 bg-green-400 text-white rounded-md text-sm font-medium hover:bg-green-600 transition-colors duration-200">
             See Details
           </button>
          </Link>
         </div>
       </div>
    );
};

export default FoodsCard;  