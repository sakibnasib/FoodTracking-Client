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

  // Cleanup preview URL on unmount or file change
  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith('blob:')) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl opacity-50"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <FaEdit className="text-xl text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Edit Food Item</h2>
                <p className="text-gray-600">Update your food item details</p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300 transform hover:scale-110"
              disabled={uploading || isSubmitting}
            >
              <FaTimes className="text-lg" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

            {/* Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
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
          </form>
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
        input:focus, select:focus, textarea:focus, button:focus {
          outline: 2px solid #10b981;
          outline-offset: 2px;
        }
        
        /* Modal animation */
        .bg-black\\/50 {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        /* Form animation */
        form {
          animation: slideInUp 0.5s ease-out;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Input focus effects */
        input:focus, select:focus, textarea:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        /* Button hover effects */
        button:hover:not(:disabled) {
          transform: translateY(-2px);
        }
        
        /* Image hover effects */
        .group:hover img {
          transform: scale(1.05);
        }
        
        /* Loading animation */
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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
        
        /* Responsive design */
        @media (max-width: 768px) {
          .grid-cols-2 {
            grid-template-columns: 1fr;
          }
          
          .max-w-4xl {
            max-width: 95vw;
          }
        }
      `}</style>
    </div>
  );
};

export default EditFoodModal;
