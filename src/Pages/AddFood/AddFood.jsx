import React, { useState, } from "react";

// your image upload utility
import {
  FaCamera,
  FaCalendarAlt,
  FaListAlt,
  FaBox,
  FaWeightHanging,
  FaInfoCircle,
} from "react-icons/fa";
import { FcVoicemail } from "react-icons/fc";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router";
import useAuth from "../../hook/useAuth";
import { imageUpload } from "../../api/utils";
import useAxiosSecure from "../../ApiHook/axiosInstance";

const AddFood = () => {
  const { user } = useAuth();
//   const navigate = useNavigate();
const axiosSecure=useAxiosSecure()
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

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

        // form.reset();
        setImagePreview(null);
        setUploadSuccess(false);
        // navigate("/myAddFood"); 
      }
    } catch (error) {
      console.error(error);
      setUploading(false);
      Swal.fire("Upload Failed", "Try again later.", "error");
    }
  };

  return (
    <div className="min-h-screen text-charcoal py-12 px-4 sm:px-6 lg:px-8 w-12/12 mx-auto">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-[1.01]">
          <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">
            Add New Food Item
          </h2>
          <p className="text-center mb-8">
            Fill in the details to add a new item to your inventory
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div className="p-4 w-full rounded-lg">
              <div className="file_upload px-5 py-3 border-4 border-dotted border-gray-300 rounded-lg text-center">
                <label>
                  <input
                    className="hidden"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                  <div className="bg-lime-500 text-white rounded font-semibold cursor-pointer p-2 px-4 hover:bg-lime-600 inline-block">
                    <FaCamera className="inline mr-2" /> Upload Image
                  </div>
                </label>
                {imagePreview && (
                  <div className="mt-4 flex flex-col items-center">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded-lg border-2 border-lime-400 shadow-md"
                    />
                    {uploadSuccess && (
                      <span className="text-green-600 font-semibold mt-2">
                        Image ready for upload!
                      </span>
                    )}
                  </div>
                )}
                {uploading && (
                  <div className="mt-2 flex items-center justify-center gap-2 text-sm text-violet-600">
                    <svg
                      className="animate-spin h-5 w-5"
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
                    Uploading...
                  </div>
                )}
              </div>
            </div>

            {/* Food Title */}
            <div className="space-y-2">
              <label className="block text-sm font-medium flex items-center gap-2">
                <FaListAlt className="text-green-600" /> Food Title
              </label>
              <input
                type="text"
                name="foodTitle"
                className="input input-bordered w-full"
                required
                placeholder="Enter food title"
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="block text-sm font-medium flex items-center gap-2">
                <FaBox className="text-green-600" /> Category
              </label>
              <select
                name="category"
                className="select select-bordered w-full"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Dairy">Dairy</option>
                <option value="Meat">Meat</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Snacks">Snacks</option>
                <option value="Fruits">Fruits</option>
                <option value="Grains">Grains</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="space-y-2">
              <label className="block text-sm font-medium flex items-center gap-2">
                <FaWeightHanging className="text-green-600" /> Quantity
              </label>
              <input
                type="number"
                name="quantity"
                className="input input-bordered w-full"
                required
                min="1"
                placeholder="Enter quantity"
              />
            </div>

            {/* Expiry Date */}
            <div className="space-y-2">
              <label className="block text-sm font-medium flex items-center gap-2">
                <FaCalendarAlt className="text-green-600" /> Expiry Date
              </label>
              <input
                type="date"
                name="expiryDate"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium flex items-center gap-2">
                <FaInfoCircle className="text-green-600" /> Description
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full h-24"
                required
                placeholder="Enter food description"
              />
            </div>

            {/* User Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium flex items-center gap-2">
                <FcVoicemail /> User Email
              </label>
              <input
                type="text"
                name="userEmail"
                value={user?.email || ""}
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                readOnly
              />
            </div>

            {/* Added Date */}
            <div className="space-y-2">
              <label className="block text-sm font-medium flex items-center gap-2">
                <FaCalendarAlt className="text-green-600" /> Added Date
              </label>
              <input
                type="date"
                name="addedDate"
                value={new Date().toISOString().split("T")[0]}
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                readOnly
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={uploading}
              className="btn w-full bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transform transition-all hover:scale-[1.02]"
            >
              Add Food Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;