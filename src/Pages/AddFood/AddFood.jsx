import React, { useState, } from "react";

// your image upload utility
import {
  FaCamera,
  FaCalendarAlt,
  FaListAlt,
  FaBox,
  FaWeightHanging,
  FaInfoCircle,
  FaPlus,
  FaUpload,
  FaSpinner,
  FaTimes,
  FaCheck
} from "react-icons/fa";
import { FcVoicemail } from "react-icons/fc";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";
import { imageUpload } from "../../api/utils";
import useAxiosSecure from "../../ApiHook/axiosInstance";

const AddFood = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];

    if (!image) {
      Swal.fire({
        icon: "error",
        title: "No Image Selected",
        text: "Please select an image.",
      });
      return;
    }

    setUploading(true);
    setUploadSuccess(false);
    setIsSubmitting(true);

    try {
      // Upload image using your utility function
      const imageUrl = await imageUpload(image);

      setUploading(false);
      setUploadSuccess(true);

      const foodData = {
        foodImage: imageUrl,
        foodTitle: form.foodTitle.value,
        category: form.category.value,
        quantity: parseInt(form.quantity.value, 10),
        expiryDate: form.expiryDate.value,
        description: form.description.value,
        addedDate: new Date().toISOString().split("T")[0],
        userEmail: user.email,
      };

      // Use your axios instance for backend API call
      const res = await axiosSecure.post(`/food`, foodData);

      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Food data has been saved",
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();
        setImagePreview(null);
        setUploadSuccess(false);
        navigate("/myAddFood");
      }
    } catch (error) {
      console.error(error);
      setUploading(false);
      Swal.fire("Upload Failed", "Try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 py-16 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <FaPlus className="mr-2" />
              Add New Food Item
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Share Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Food</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Help reduce food waste by sharing your excess food items with the community. Fill in the details below to add a new item to your inventory.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Image Upload */}
                    <div className="space-y-4 group">
                      <label className="block text-lg font-semibold text-gray-800 flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FaCamera className="text-blue-600" />
                        </div>
                        Food Image
                      </label>
                      <div className="relative">
                        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition-all duration-300 bg-gray-50 hover:bg-blue-50">
                          {/* <input
                            // className="hidden"
                            // type="file" name="image" accept="image/*"
                            // onChange={handleImageChange}
                            // require

                              type="file"
    name="image"
    accept="image/*"
    onChange={handleImageChange}
    required
    className="hidden"
                          />
                          <label className="cursor-pointer">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <FaUpload className="text-2xl text-white" />
                            </div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">Upload Food Image</p>
                            <p className="text-sm text-gray-500">Click to select an image file</p>
                          </label> */}
                          <label className="cursor-pointer">
  <input
    type="file"
    name="image"
    accept="image/*"
    onChange={handleImageChange}
    required
    className="hidden"
  />
  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
    <FaUpload className="text-2xl text-white" />
  </div>
  <p className="text-lg font-semibold text-gray-700 mb-2">Upload Food Image</p>
  <p className="text-sm text-gray-500">Click to select an image file</p>
</label>

                        </div>
                        
                        {imagePreview && (
                          <div className="mt-6 relative group">
                            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                              <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            {uploadSuccess && (
                              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                                <FaCheck className="text-sm" />
                                Ready!
                              </div>
                            )}
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white"
                        required
                        placeholder="Enter food title"
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 bg-white appearance-none cursor-pointer"
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Select a category</option>
                        <option value="Dairy">🥛 Dairy</option>
                        <option value="Meat">🥩 Meat</option>
                        <option value="Vegetables">🥬 Vegetables</option>
                        <option value="Snacks">🍿 Snacks</option>
                        <option value="Fruits">🍎 Fruits</option>
                        <option value="Grains">🌾 Grains</option>
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-300 bg-white"
                        required
                        min="1"
                        placeholder="Enter quantity"
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300 bg-white resize-none"
                        rows="4"
                        required
                        placeholder="Enter food description"
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
                        value={user?.email || ""}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 cursor-not-allowed"
                        readOnly
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
                        name="addedDate"
                        value={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 cursor-not-allowed"
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-gray-200">
                  <button
                    type="submit"
                    disabled={uploading || isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Adding Food Item...
                      </>
                    ) : (
                      <>
                        <FaPlus />
                        Add Food Item
                      </>
                    )}
                  </button>
                </div>
              </form>
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
        
        /* Form animation */
        form {
          animation: slideInUp 0.8s ease-out;
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

export default AddFood;