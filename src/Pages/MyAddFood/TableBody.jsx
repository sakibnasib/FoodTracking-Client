// import React, {  useState } from 'react';
// import EditFoodModal from "./EditFoodModal"
// import Swal from 'sweetalert2';
// import useAuth from '../../hook/useAuth';
// import useAxiosSecure from '../../ApiHook/axiosInstance';
// import { FaEdit, FaTrash,  FaUtensils, FaCalendarAlt, FaWeight } from 'react-icons/fa';

// const TableBody = ({data, mydata, setMydata}) => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
  
//   const [selectedFoodItem, setSelectedFoodItem] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleDelete = (_id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axiosSecure.delete(`/foods/${_id}?email=${user.email}`, {
//           headers: {
//             Authorization: `Bearer ${user?.accessToken}`
//           }
//         }).then(res => {
//           if (res.data.deletedCount) {
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your food item has been deleted.",
//               icon: "success"
//             });
//             const remaining = mydata.filter(item => item._id !== _id);
//             setMydata(remaining);
//           }
//         });
//       }
//     });
//   };

//   const getDaysUntilExpiry = (expiryDate) => {
//     const today = new Date();
//     const expiry = new Date(expiryDate);
//     const diffTime = expiry - today;
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//     return diffDays;
//   };

//   const getExpiryStatus = (days) => {
//     if (days < 0) return { status: 'Expired', color: 'red', bg: 'bg-red-100', text: 'text-red-700' };
//     if (days <= 3) return { status: 'Urgent', color: 'red', bg: 'bg-red-100', text: 'text-red-700' };
//     if (days <= 7) return { status: 'Soon', color: 'orange', bg: 'bg-orange-100', text: 'text-orange-700' };
//     return { status: 'Fresh', color: 'green', bg: 'bg-green-100', text: 'text-green-700' };
//   };

//   const daysUntilExpiry = getDaysUntilExpiry(data.expiryDate);
//   const expiryStatus = getExpiryStatus(daysUntilExpiry);

//   return (
//     <>
//       <tr 
//         className=" hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300 border-b border-gray-100"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         style={{ animationDelay: `${Math.random() * 500}ms` }}
//       >
//         {/* Food Image and Title */}
//         <td className="px-6 py-6">
//           <div className="flex items-center gap-4">
//             <div className="relative group">
//               <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
//                 <img
//                   src={data.foodImage}
//                   alt={data.foodTitle}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
//             </div>
//             <div className="flex-1">
//               <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
//                 {data.foodTitle}
//               </h3>
//               <div className="flex items-center gap-2 mt-1">
//                 <FaUtensils className="text-sm text-gray-400" />
//                 <span className="text-sm text-gray-600">{data.category}</span>
//               </div>
//             </div>
//           </div>
//         </td>

//         {/* Category */}
//         <td className="px-6 py-6">
//           <div className="flex items-center gap-2">
//             <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(data.category)}`}>
//               {data.category}
//             </span>
//           </div>
//         </td>

//         {/* Quantity */}
//         <td className="px-6 py-6">
//           <div className="flex items-center gap-2">
//             <FaWeight className="text-blue-500" />
//             <span className="font-semibold text-gray-800">{data.quantity}</span>
//           </div>
//         </td>

//         {/* Expiry Status */}
//         <td className="px-6 py-6">
//           <div className="flex items-center gap-2">
//             <FaCalendarAlt className={`text-${expiryStatus.color}-500`} />
//             <span className={`px-3 py-1 rounded-full text-xs font-semibold ${expiryStatus.bg} ${expiryStatus.text}`}>
//               {expiryStatus.status}
//             </span>
//             <span className="text-xs text-gray-500">
//               {daysUntilExpiry < 0 
//                 ? `${Math.abs(daysUntilExpiry)} days ago`
//                 : `${daysUntilExpiry} days left`
//               }
//             </span>
//           </div>
//         </td>

//         {/* Actions */}
//         <td className="px-6 py-6">
//           <div className="flex items-center gap-2">
//             {/* View Button */}
//             {/* <button className="group/btn p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md">
//               <FaEye className="text-sm group-hover/btn:scale-110 transition-transform duration-300" />
//             </button> */}

//             {/* Edit Button */}
//             <button 
//               onClick={() => {
//                 setSelectedFoodItem(data);
//                 setIsModalOpen(true);
//               }}
//               className="group/btn p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md"
//             >
//               <FaEdit className="text-sm group-hover/btn:scale-110 transition-transform duration-300" />
//             </button>

//             {/* Delete Button */}
//             <button 
//               onClick={() => handleDelete(data._id)}
//               className="group/btn p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-md"
//             >
//               <FaTrash className="text-sm group-hover/btn:scale-110 transition-transform duration-300" />
//             </button>
//           </div>
//         </td>
//       </tr>

//       {/* Edit Modal */}
//       <EditFoodModal
//         isOpen={isModalOpen}
//         foodItem={selectedFoodItem}
//         onClose={() => setIsModalOpen(false)}
//       />
      
//       {/* Inline Styles */}
//       <style jsx>{`
//         /* Animation for table rows */
//         tr {
//           animation: slideInRight 0.6s ease-out forwards;
//           opacity: 0;
//           transform: translateX(30px);
//         }
        
//         @keyframes slideInRight {
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         /* Smooth transitions */
//         * {
//           transition-property: all;
//           transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//         }
        
//         /* Hover effects for table rows */
//         tr:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
//         }
        
//         /* Button hover effects */
//         button:hover {
//           transform: translateY(-1px);
//         }
        
//         /* Image hover effects */
//         .group:hover img {
//           transform: scale(1.05);
//         }
        
//         /* Category color function */
//         .category-dairy { background-color: #fef3c7; color: #92400e; }
//         .category-meat { background-color: #fee2e2; color: #991b1b; }
//         .category-vegetables { background-color: #dcfce7; color: #166534; }
//         .category-snacks { background-color: #f3e8ff; color: #7c3aed; }
//         .category-fruits { background-color: #fef7cd; color: #a16207; }
//         .category-grains { background-color: #e0e7ff; color: #3730a3; }
        
//         /* Focus states for accessibility */
//         button:focus {
//           outline: 2px solid #10b981;
//           outline-offset: 2px;
//         }
        
//         /* Custom scrollbar */
//         ::-webkit-scrollbar {
//           width: 6px;
//         }
        
//         ::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 3px;
//         }
        
//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(to bottom, #10b981, #3b82f6);
//           border-radius: 3px;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(to bottom, #059669, #2563eb);
//         }
        
//         /* Gradient text animation */
//         .group:hover .text-green-700 {
//           background: linear-gradient(45deg, #10b981, #3b82f6);
//           background-clip: text;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: gradientShift 2s ease infinite;
//         }
        
//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
        
//         /* Icon animations */
//         .group-hover\\/btn\\:scale-110 {
//           transition: transform 0.2s ease;
//         }
        
//         /* Shadow effects */
//         .shadow-sm {
//           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//         }
        
//         .shadow-md {
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//         }
        
//         /* Responsive design */
//         @media (max-width: 768px) {
//           td {
//             padding: 0.75rem 0.5rem;
//           }
          
//           .w-16 {
//             width: 3rem;
//           }
          
//           .h-16 {
//             height: 3rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// // Helper function to get category colors
// const getCategoryColor = (category) => {
//   const colors = {
//     'Dairy': 'category-dairy',
//     'Meat': 'category-meat',
//     'Vegetables': 'category-vegetables',
//     'Snacks': 'category-snacks',
//     'Fruits': 'category-fruits',
//     'Grains': 'category-grains'
//   };
//   return colors[category] || 'category-dairy';
// };

// export default TableBody;


import React, { useState, useEffect } from 'react';
import {
  FaCamera,
  FaCalendarAlt,
  FaListAlt,
  FaBox,
  FaWeightHanging,
  FaInfoCircle,
  FaTimes,
  FaUpload,
  FaEdit,
  FaSave,
  FaSpinner
} from 'react-icons/fa';
import { FcVoicemail } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { imageUpload } from '../../api/utils';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../ApiHook/axiosInstance';

const EditFoodModal = ({ isOpen, onClose, foodItem }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(foodItem?.foodImage || '');
  const [uploading, setUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  // Cleanup preview URL on unmount or file change
  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !uploading && !isSubmitting) {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setIsSubmitting(true);

    let imageUrl = foodItem.foodImage;

    try {
      if (imageFile) {
        setUploading(true);
        const uploadResult = await imageUpload(imageFile);
        imageUrl = typeof uploadResult === 'string' ? uploadResult : uploadResult.url;
        setUploading(false);
      }

      const updatedFoodData = {
        foodImage: imageUrl,
        foodTitle: form.foodTitle.value,
        category: form.category.value,
        quantity: form.quantity.value,
        expiryDate: form.expiryDate.value,
        description: form.description.value,
        addedDate: foodItem.addedDate,
        userEmail: user?.email,
      };

      const res = await axiosSecure.patch(`/food/${foodItem._id}`, updatedFoodData);

      if (res.data.modifiedCount) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Your food item has been updated',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/myaddfood');
        onClose();
      }
    } catch (err) {
      console.error('Image upload or update failed', err);
      setUploading(false);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'Something went wrong!',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md overflow-y-auto"
      onClick={handleOverlayClick}
    >
      <div className="min-h-screen flex items-center justify-center p-4 py-8">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl my-8 overflow-hidden flex flex-col transform transition-all duration-300 scale-100">
        {/* Header - Fixed */}
        <div className="flex-shrink-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <FaEdit className="text-xl text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Edit Food Item</h2>
                <p className="text-gray-600 text-sm md:text-base">Update your food item details</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300 transform hover:scale-110 z-10"
              disabled={uploading || isSubmitting}
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="relative p-6 md:p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-50"></div>
            <div className="absolute top-4 right-4 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Food Image Upload */}
                    <div className="space-y-4 group">
                      <label className="block text-lg font-semibold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FaCamera className="text-blue-600" />
                        </div>
                        Food Image
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="file-input file-input-bordered w-full bg-white border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 transition-all duration-300"
                          disabled={uploading || isSubmitting}
                        />
                        {imagePreview && (
                          <div className="mt-4 relative group">
                            <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                              <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                          </div>
                        )}
                        {uploading && (
                          <div className="mt-4 flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                            <FaSpinner className="animate-spin text-blue-600" />
                            <span className="text-blue-700 font-medium">Uploading image...</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Food Title */}
                    <div className="space-y-3 group">
                      <label className="block text-lg font-semibold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <FaListAlt className="text-green-600" />
                        </div>
                        Food Title
                      </label>
                      <input
                        type="text"
                        name="foodTitle"
                        defaultValue={foodItem.foodTitle}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Category */}
                    <div className="space-y-3 group">
                      <label className="block text-lg font-semibold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                          <FaBox className="text-purple-600" />
                        </div>
                        Category
                      </label>
                      <select
                        name="category"
                        defaultValue={foodItem.category}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white appearance-none cursor-pointer"
                        required
                        disabled={isSubmitting}
                      >
                        <option>🥛 Dairy</option>
                        <option>🥩 Meat</option>
                        <option>🥬 Vegetables</option>
                        <option>🍿 Snacks</option>
                        <option>🍎 Fruits</option>
                        <option>🌾 Grains</option>
                        <option>📦 Other</option>
                      </select>
                    </div>

                    {/* Quantity */}
                    <div className="space-y-3 group">
                      <label className="block text-lg font-semibold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <FaWeightHanging className="text-orange-600" />
                        </div>
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        defaultValue={foodItem.quantity}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Expiry Date */}
                    <div className="space-y-3 group">
                      <label className="block text-lg font-semibold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <FaCalendarAlt className="text-red-600" />
                        </div>
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        name="expiryDate"
                        defaultValue={foodItem.expiryDate}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 bg-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-3 group">
                      <label className="block text-lg font-semibold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <FaInfoCircle className="text-indigo-600" />
                        </div>
                        Description
                      </label>
                      <textarea
                        name="description"
                        defaultValue={foodItem.description}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 bg-white resize-none"
                        rows="4"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* User Email */}
                    <div className="space-y-3 group">
                      <label className="block text-lg font-semibold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FcVoicemail />
                        </div>
                        User Email
                      </label>
                      <input
                        type="text"
                        name="userEmail"
                        value={user?.email}
                        readOnly
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 cursor-not-allowed"
                      />
                    </div>

                    {/* Added Date */}
                    <div className="space-y-3 group">
                      <label className="block text-lg font-semibold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                          <FaCalendarAlt className="text-teal-600" />
                        </div>
                        Added Date
                      </label>
                      <input
                        type="date"
                        value={foodItem.addedDate}
                        readOnly
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons - Fixed at bottom */}
                <div className="flex-shrink-0 pt-6 border-t border-gray-200 bg-white">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={uploading || isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      disabled={uploading || isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <FaSave />
                          Update Food Item
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        /* Ensure modal is above everything */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
        }

        /* Prevent any other content from having high z-index */
        body.modal-open {
          overflow: hidden;
          position: fixed;
          width: 100%;
        }

        /* Blob animation */
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

        /* Custom scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #3b82f6);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #2563eb);
        }

        /* Modal entrance animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .bg-black\\/70 {
          animation: fadeIn 0.3s ease-out;
        }

        .transform {
          animation: slideInUp 0.4s ease-out;
        }

        /* Loading animation */
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .max-h-\\[95vh\\] {
            max-height: 90vh;
          }
        }

        @media (max-width: 480px) {
          .max-h-\\[95vh\\] {
            max-height: 85vh;
          }
        }
      `}</style>
    </div>
  );
};

export default EditFoodModal;