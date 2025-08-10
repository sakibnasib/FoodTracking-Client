
import React from 'react';
import { FaCalendarAlt, FaListAlt, FaBox, FaWeightHanging, FaEye, FaClock, FaUser, FaTag } from 'react-icons/fa';
import { Link } from 'react-router';
import { format } from 'date-fns';

const FoodsCard = ({food}) => {
    const isExpired = new Date(food.expiryDate) < new Date();
    const daysUntilExpiry = Math.ceil((new Date(food.expiryDate) - new Date()) / (1000 * 60 * 60 * 24));
    
    const getExpiryStatus = () => {
        if (isExpired) return { text: 'Expired', color: 'bg-red-500', textColor: 'text-red-100' };
        if (daysUntilExpiry <= 1) return { text: 'Expiring Today', color: 'bg-orange-500', textColor: 'text-orange-100' };
        if (daysUntilExpiry <= 5) return { text: 'Expiring Soon', color: 'bg-yellow-500', textColor: 'text-yellow-100' };
        return { text: 'Fresh', color: 'bg-green-500', textColor: 'text-green-100' };
    };

    const status = getExpiryStatus();

    return (
        <div className="group w-full rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            {/* Image Section */}
            <div className="relative w-full h-64 overflow-hidden">
                <img 
                    src={food.foodImage} 
                    alt={food.foodTitle} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                    <div className={`${status.color} ${status.textColor} px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20`}>
                        {status.text}
                    </div>
                </div>

                {/* Hover Overlay with Quick Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Link to={`/food/${food._id}`}>
                        <button className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                            <FaEye className="text-green-600" />
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6">
                {/* Food Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-green-600 transition-colors duration-300">
                    {food.foodTitle}
                </h3>

                {/* 4 Key Information Cards */}
                <div className="space-y-3 mb-6">
                    {/* 1. Category */}
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:bg-green-100 transition-colors duration-200">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FaTag className="text-white text-sm" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-green-600 font-semibold uppercase tracking-wide">Category</p>
                            <p className="text-sm font-bold text-gray-800 truncate">{food.category}</p>
                        </div>
                    </div></div>

                {/* Action Button */}
                <Link to={`/food/${food._id}`} className="block">
                    <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn">
                        <span>View Full Details</span>
                        <FaEye className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FoodsCard;  