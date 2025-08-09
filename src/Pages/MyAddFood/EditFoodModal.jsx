// import React, {  useState,  } from 'react';
// import { FaCamera, FaCalendarAlt, FaListAlt, FaBox, FaWeightHanging, FaInfoCircle } from 'react-icons/fa';
// import { FcVoicemail } from 'react-icons/fc';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router';
// import { imageUpload } from '../../api/utils';
// import useAuth from '../../hook/useAuth';
// import useAxiosSecure from '../../ApiHook/axiosInstance';

// const EditFoodModal = ({ isOpen, onClose, foodItem }) => {
//   const navigate = useNavigate();
//   const { user } =useAuth()
// const axiosSecure=useAxiosSecure()
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(foodItem?.foodImage);
//   const [uploading, setUploading] = useState(false);

//   if (!isOpen) return null;

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     let imageUrl = foodItem.foodImage;

//     try {
//       if (imageFile) {
//         setUploading(true);
//         imageUrl = await imageUpload(imageFile);
//         setUploading(false);
//       }

//       const updatedFoodData = {
//         foodImage: imageUrl,
//         foodTitle: form.foodTitle.value,
//         category: form.category.value,
//         quantity: form.quantity.value,
//         expiryDate: form.expiryDate.value,
//         description: form.description.value,
//         addedDate: foodItem.addedDate,
//         userEmail: user?.email,
//       };

//       const res = await axiosSecure.patch(`/food/${foodItem._id}`,updatedFoodData);

//       if (res.data.modifiedCount) {
//         Swal.fire({
//           position: "top-center",
//           icon: "success",
//           title: "Your food item has been updated",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         navigate('/myitams');
//         onClose();
//       }
//     } catch (err) {
//       console.error('Image upload or update failed', err);
//       Swal.fire({
//         icon: 'error',
//         title: 'Update Failed',
//         text: 'Something went wrong!',
//       });
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-30">
//       <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800">Edit Food Item</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Food Image Upload */}
//           <div className="space-y-2 group">
//             <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
//               <FaCamera className="text-green-600" /> Food Image
//             </label>
//             <input type="file" accept="image/*" onChange={handleImageChange} className="file-input file-input-bordered w-full" />
//             {imagePreview && (
//               <div className="mt-3">
//                 <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded shadow" />
//               </div>
//             )}
//             {uploading && (
//               <div className="text-sm text-violet-600 flex items-center gap-2">
//                 <svg className="animate-spin h-5 w-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
//                 </svg>
//                 Uploading image...
//               </div>
//             )}
//           </div>

//           {/* Food Title */}
//           <div className="space-y-2 group">
//             <label className="block text-sm font-medium flex items-center gap-2"><FaListAlt className="text-green-600" /> Food Title</label>
//             <input type="text" name="foodTitle" defaultValue={foodItem.foodTitle} className="input input-bordered w-full" required />
//           </div>

//           {/* Category */}
//           <div className="space-y-2 group">
//             <label className="block text-sm font-medium flex items-center gap-2"><FaBox className="text-green-600" /> Category</label>
//             <select name="category" defaultValue={foodItem.category} className="select select-bordered w-full" required>
//               <option>Dairy</option>
//               <option>Meat</option>
//               <option>Vegetables</option>
//               <option>Snacks</option>
//               <option>Fruits</option>
//               <option>Grains</option>
//               <option>Other</option>
//             </select>
//           </div>

//           {/* Quantity */}
//           <div className="space-y-2 group">
//             <label className="block text-sm font-medium flex items-center gap-2"><FaWeightHanging className="text-green-600" /> Quantity</label>
//             <input type="number" name="quantity" defaultValue={foodItem.quantity} className="input input-bordered w-full" required />
//           </div>

//           {/* Expiry Date */}
//           <div className="space-y-2 group">
//             <label className="block text-sm font-medium flex items-center gap-2"><FaCalendarAlt className="text-green-600" /> Expiry Date</label>
//             <input type="date" name="expiryDate" defaultValue={foodItem.expiryDate} className="input input-bordered w-full" required />
//           </div>

//           {/* Description */}
//           <div className="space-y-2 group">
//             <label className="block text-sm font-medium flex items-center gap-2"><FaInfoCircle className="text-green-600" /> Description</label>
//             <textarea name="description" defaultValue={foodItem.description} className="textarea textarea-bordered w-full h-24" required />
//           </div>

//           {/* User Email */}
//           <div className="space-y-2 group">
//             <label className="block text-sm font-medium flex items-center gap-2"><FcVoicemail /> User Email</label>
//             <input type="text" name="userEmail" value={user?.email} readOnly className="input input-bordered w-full bg-gray-50 cursor-not-allowed" />
//           </div>

//           {/* Added Date */}
//           <div className="space-y-2 group">
//             <label className="block text-sm font-medium flex items-center gap-2"><FaCalendarAlt className="text-green-600" /> Added Date</label>
//             <input type="date" value={foodItem.addedDate} readOnly className="input input-bordered w-full bg-gray-50 cursor-not-allowed" />
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4 mt-4">
//             <button type="button" onClick={onClose} className="btn flex-1 bg-gray-200 text-gray-800 hover:bg-gray-300">Cancel</button>
//             <button type="submit" className="btn flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700">Update Food Item</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditFoodModal;

import React, { useState, useEffect } from 'react';
import {
  FaCamera,
  FaCalendarAlt,
  FaListAlt,
  FaBox,
  FaWeightHanging,
  FaInfoCircle
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

    let imageUrl = foodItem.foodImage;

    try {
      if (imageFile) {
        setUploading(true);
        const uploadResult = await imageUpload(imageFile);
        // Handle both string or object return types
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
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-30">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Edit Food Item</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Food Image Upload */}
          <div className="space-y-2 group">
            <label className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <FaCamera className="text-green-600" /> Food Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
            />
            {imagePreview && (
              <div className="mt-3">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded shadow"
                />
              </div>
            )}
            {uploading && (
              <div className="text-sm text-violet-600 flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-violet-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Uploading image...
              </div>
            )}
          </div>

          {/* Food Title */}
          <div className="space-y-2 group">
            <label className="block text-sm font-medium flex items-center gap-2">
              <FaListAlt className="text-green-600" /> Food Title
            </label>
            <input
              type="text"
              name="foodTitle"
              defaultValue={foodItem.foodTitle}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div className="space-y-2 group">
            <label className="block text-sm font-medium flex items-center gap-2">
              <FaBox className="text-green-600" /> Category
            </label>
            <select
              name="category"
              defaultValue={foodItem.category}
              className="select select-bordered w-full"
              required
            >
              <option>Dairy</option>
              <option>Meat</option>
              <option>Vegetables</option>
              <option>Snacks</option>
              <option>Fruits</option>
              <option>Grains</option>
              <option>Other</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="space-y-2 group">
            <label className="block text-sm font-medium flex items-center gap-2">
              <FaWeightHanging className="text-green-600" /> Quantity
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={foodItem.quantity}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Expiry Date */}
          <div className="space-y-2 group">
            <label className="block text-sm font-medium flex items-center gap-2">
              <FaCalendarAlt className="text-green-600" /> Expiry Date
            </label>
            <input
              type="date"
              name="expiryDate"
              defaultValue={foodItem.expiryDate}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2 group">
            <label className="block text-sm font-medium flex items-center gap-2">
              <FaInfoCircle className="text-green-600" /> Description
            </label>
            <textarea
              name="description"
              defaultValue={foodItem.description}
              className="textarea textarea-bordered w-full h-24"
              required
            />
          </div>

          {/* User Email */}
          <div className="space-y-2 group">
            <label className="block text-sm font-medium flex items-center gap-2">
              <FcVoicemail /> User Email
            </label>
            <input
              type="text"
              name="userEmail"
              value={user?.email}
              readOnly
              className="input input-bordered w-full bg-gray-50 cursor-not-allowed"
            />
          </div>

          {/* Added Date */}
          <div className="space-y-2 group">
            <label className="block text-sm font-medium flex items-center gap-2">
              <FaCalendarAlt className="text-green-600" /> Added Date
            </label>
            <input
              type="date"
              value={foodItem.addedDate}
              readOnly
              className="input input-bordered w-full bg-gray-50 cursor-not-allowed"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="btn flex-1 bg-gray-200 text-gray-800 hover:bg-gray-300"
              disabled={uploading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700"
              disabled={uploading}
            >
              {uploading ? 'Updating...' : 'Update Food Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFoodModal;
