import React, {  useState } from 'react';
import EditFoodModal from "./EditFoodModal"
import Swal from 'sweetalert2';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../ApiHook/axiosInstance';
import { FaEdit, FaTrash,  FaUtensils, FaCalendarAlt, FaWeight } from 'react-icons/fa';

const TableBody = ({data, mydata, setMydata}) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/foods/${_id}?email=${user.email}`, {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`
          }
        }).then(res => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your food item has been deleted.",
              icon: "success"
            });
            const remaining = mydata.filter(item => item._id !== _id);
            setMydata(remaining);
          }
        });
      }
    });
  };

  const getDaysUntilExpiry = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getExpiryStatus = (days) => {
    if (days < 0) return { status: 'Expired', color: 'red', bg: 'bg-red-100', text: 'text-red-700' };
    if (days <= 3) return { status: 'Urgent', color: 'red', bg: 'bg-red-100', text: 'text-red-700' };
    if (days <= 7) return { status: 'Soon', color: 'orange', bg: 'bg-orange-100', text: 'text-orange-700' };
    return { status: 'Fresh', color: 'green', bg: 'bg-green-100', text: 'text-green-700' };
  };

  const daysUntilExpiry = getDaysUntilExpiry(data.expiryDate);
  const expiryStatus = getExpiryStatus(daysUntilExpiry);

  return (
    <>
      <tr 
        className=" hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300 border-b border-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ animationDelay: `${Math.random() * 500}ms` }}
      >
        {/* Food Image and Title */}
        <td className="px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={data.foodImage}
                  alt={data.foodTitle}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                {data.foodTitle}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <FaUtensils className="text-sm text-gray-400" />
                <span className="text-sm text-gray-600">{data.category}</span>
              </div>
            </div>
          </div>
        </td>

        {/* Category */}
        <td className="px-6 py-6">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(data.category)}`}>
              {data.category}
            </span>
          </div>
        </td>

        {/* Quantity */}
        <td className="px-6 py-6">
          <div className="flex items-center gap-2">
            <FaWeight className="text-blue-500" />
            <span className="font-semibold text-gray-800">{data.quantity}</span>
          </div>
        </td>

        {/* Expiry Status */}
        <td className="px-6 py-6">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className={`text-${expiryStatus.color}-500`} />
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${expiryStatus.bg} ${expiryStatus.text}`}>
              {expiryStatus.status}
            </span>
            <span className="text-xs text-gray-500">
              {daysUntilExpiry < 0 
                ? `${Math.abs(daysUntilExpiry)} days ago`
                : `${daysUntilExpiry} days left`
              }
            </span>
          </div>
        </td>

        {/* Actions */}
        <td className="px-6 py-6">
          <div className="flex items-center gap-2">
            {/* View Button */}
            {/* <button className="group/btn p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md">
              <FaEye className="text-sm group-hover/btn:scale-110 transition-transform duration-300" />
            </button> */}

            {/* Edit Button */}
            <button 
              onClick={() => {
                setSelectedFoodItem(data);
                setIsModalOpen(true);
              }}
              className="group/btn p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md"
            >
              <FaEdit className="text-sm group-hover/btn:scale-110 transition-transform duration-300" />
            </button>

            {/* Delete Button */}
            <button 
              onClick={() => handleDelete(data._id)}
              className="group/btn p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md"
            >
              <FaTrash className="text-sm group-hover/btn:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </td>
      </tr>

      {/* Edit Modal */}
      <EditFoodModal
        isOpen={isModalOpen}
        foodItem={selectedFoodItem}
        onClose={() => setIsModalOpen(false)}
      />
      
      {/* Inline Styles */}
      <style jsx>{`
        /* Animation for table rows */
        tr {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
          transform: translateX(30px);
        }
        
        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Smooth transitions */
        * {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Hover effects for table rows */
        tr:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        /* Button hover effects */
        button:hover {
          transform: translateY(-1px);
        }
        
        /* Image hover effects */
        .group:hover img {
          transform: scale(1.05);
        }
        
        /* Category color function */
        .category-dairy { background-color: #fef3c7; color: #92400e; }
        .category-meat { background-color: #fee2e2; color: #991b1b; }
        .category-vegetables { background-color: #dcfce7; color: #166534; }
        .category-snacks { background-color: #f3e8ff; color: #7c3aed; }
        .category-fruits { background-color: #fef7cd; color: #a16207; }
        .category-grains { background-color: #e0e7ff; color: #3730a3; }
        
        /* Focus states for accessibility */
        button:focus {
          outline: 2px solid #10b981;
          outline-offset: 2px;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #3b82f6);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #2563eb);
        }
        
        /* Gradient text animation */
        .group:hover .text-green-700 {
          background: linear-gradient(45deg, #10b981, #3b82f6);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 2s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Icon animations */
        .group-hover\\/btn\\:scale-110 {
          transition: transform 0.2s ease;
        }
        
        /* Shadow effects */
        .shadow-sm {
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        
        .shadow-md {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          td {
            padding: 0.75rem 0.5rem;
          }
          
          .w-16 {
            width: 3rem;
          }
          
          .h-16 {
            height: 3rem;
          }
        }
      `}</style>
    </>
  );
};

// Helper function to get category colors
const getCategoryColor = (category) => {
  const colors = {
    'Dairy': 'category-dairy',
    'Meat': 'category-meat',
    'Vegetables': 'category-vegetables',
    'Snacks': 'category-snacks',
    'Fruits': 'category-fruits',
    'Grains': 'category-grains'
  };
  return colors[category] || 'category-dairy';
};

export default TableBody;
