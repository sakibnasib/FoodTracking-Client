import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaUtensils, FaCalendarAlt, FaWeightHanging, FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../ApiHook/axiosInstance';
import EditFoodModal from './EditFoodModal';
import SkeletonTableRow from '../../Components/Skeleton/SkeletonTableRow';

const MyAddFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFoodItem, setSelectedFoodItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch user's food items
  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    setLoading(true);
    axiosSecure
      .get(`/foods?email=${user.email}`)
      .then((res) => {
        setMydata(res.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching foods:', error);
        setLoading(false);
      });
  }, [user, axiosSecure]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/foods/${_id}?email=${user.email}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your food item has been deleted.',
                icon: 'success'
              });
              const remaining = mydata.filter((item) => item._id !== _id);
              setMydata(remaining);
            }
          })
          .catch((error) => {
            console.error('Error deleting food:', error);
            Swal.fire({
              title: 'Error!',
              text: 'Failed to delete food item.',
              icon: 'error'
            });
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
    if (days < 0)
      return { status: 'Expired', color: 'red', bg: 'bg-red-100', text: 'text-red-700' };
    if (days <= 3)
      return { status: 'Urgent', color: 'red', bg: 'bg-red-100', text: 'text-red-700' };
    if (days <= 7)
      return { status: 'Soon', color: 'orange', bg: 'bg-orange-100', text: 'text-orange-700' };
    return { status: 'Fresh', color: 'green', bg: 'bg-green-100', text: 'text-green-700' };
  };

  const getCategoryColor = (category) => {
    const colors = {
      '🥛 Dairy': 'bg-yellow-100 text-yellow-800',
      '🥩 Meat': 'bg-red-100 text-red-800',
      '🥬 Vegetables': 'bg-green-100 text-green-800',
      '🍿 Snacks': 'bg-purple-100 text-purple-800',
      '🍎 Fruits': 'bg-orange-100 text-orange-800',
      '🌾 Grains': 'bg-blue-100 text-blue-800',
      '📦 Other': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const handleEdit = (foodItem) => {
    setSelectedFoodItem(foodItem);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedFoodItem(null);
    // Refresh data after edit
    if (user?.email) {
      axiosSecure
        .get(`/foods?email=${user.email}`)
        .then((res) => {
          setMydata(res.data || []);
        })
        .catch((error) => {
          console.error('Error refreshing foods:', error);
        });
    }
  };

  return (
    <section className="min-h-screen py-16 px-4 md:px-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              My Added Foods
            </h1>
            <p className="text-gray-600">Manage your food inventory</p>
          </div>
          <button
            onClick={() => navigate('/addfood')}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FaPlus /> Add New Food
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {loading ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Food</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Quantity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Expiry Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <SkeletonTableRow key={i} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : mydata.length === 0 ? (
            <div className="text-center py-20">
              <FaUtensils className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No Foods Added Yet</h3>
              <p className="text-gray-500 mb-6">Start by adding your first food item!</p>
              <button
                onClick={() => navigate('/addfood')}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Add Food Now
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Food</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Quantity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Expiry Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mydata.map((data, index) => {
                    const daysUntilExpiry = getDaysUntilExpiry(data.expiryDate);
                    const expiryStatus = getExpiryStatus(daysUntilExpiry);

                    return (
                      <tr
                        key={data._id}
                        className="hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300 border-b border-gray-100"
                        style={{ animationDelay: `${index * 100}ms` }}
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
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-800">
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
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(data.category)}`}>
                            {data.category}
                          </span>
                        </td>

                        {/* Quantity */}
                        <td className="px-6 py-6">
                          <div className="flex items-center gap-2">
                            <FaWeightHanging className="text-blue-500" />
                            <span className="font-semibold text-gray-800">{data.quantity}</span>
                          </div>
                        </td>

                        {/* Expiry Status */}
                        <td className="px-6 py-6">
                          <div className="flex flex-col gap-1">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${expiryStatus.bg} ${expiryStatus.text} inline-block w-fit`}>
                              {expiryStatus.status}
                            </span>
                            <span className="text-xs text-gray-500">
                              {daysUntilExpiry < 0
                                ? `${Math.abs(daysUntilExpiry)} days ago`
                                : `${daysUntilExpiry} days left`}
                            </span>
                          </div>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-6">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleEdit(data)}
                              className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-110"
                              title="Edit"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(data._id)}
                              className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 transform hover:scale-110"
                              title="Delete"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        {!loading && mydata.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <FaUtensils className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Total Foods</p>
                  <p className="text-3xl font-bold text-gray-800">{mydata.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <FaCalendarAlt className="text-orange-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Expiring Soon</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {mydata.filter((item) => {
                      const days = getDaysUntilExpiry(item.expiryDate);
                      return days >= 0 && days <= 7;
                    }).length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <FaCalendarAlt className="text-red-600 text-xl" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Expired</p>
                  <p className="text-3xl font-bold text-gray-800">
                    {mydata.filter((item) => getDaysUntilExpiry(item.expiryDate) < 0).length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {selectedFoodItem && (
        <EditFoodModal
          isOpen={isModalOpen}
          foodItem={selectedFoodItem}
          onClose={handleModalClose}
        />
      )}

      {/* Styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        tr {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
          transform: translateX(30px);
        }
        @keyframes slideIn {
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default MyAddFood;
