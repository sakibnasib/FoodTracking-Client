import React, { useEffect, useState } from 'react';
import TableBody from './TableBody';
import SkeletonTableRow from '../../Components/Skeleton/SkeletonTableRow';
import useAxiosSecure from '../../ApiHook/axiosInstance';
import useAuth from '../../hook/useAuth';
import { FaUtensils, FaUser, FaList, FaArrowLeft, FaArrowRight, FaPlus, FaChartBar, FaClock } from 'react-icons/fa';

const MyAddFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [loading, setLoading] = useState(true);
  const [mydata, setMydata] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    axiosSecure
      .get(`/foods/user/${user.email}?page=${page}&limit=${limit}`)
      .then((res) => {
        setMydata(res.data.items || []);
        setTotalPages(Math.ceil(res.data.total / limit) || 1);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user, page, axiosSecure]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm font-medium mb-6 shadow-lg">
              <FaUser className="mr-2" />
              Personal Food Inventory
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {user?.displayName}'s <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Food Collection</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Manage and track all your added food items. View details, update information, and keep your inventory organized.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Items</p>
                  <p className="text-3xl font-bold text-gray-800">{mydata.length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <FaUtensils className="text-xl text-white" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Current Page</p>
                  <p className="text-3xl font-bold text-gray-800">{page}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <FaList className="text-xl text-white" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Pages</p>
                  <p className="text-3xl font-bold text-gray-800">{totalPages}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <FaChartBar className="text-xl text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <FaList className="text-green-600" />
                  Food Items Table
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaClock className="text-blue-500" />
                  <span>Last updated: {new Date().toLocaleDateString()}</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                          <FaUtensils className="text-green-600" />
                          Name
                        </div>
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {loading ? (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <tr key={i} className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="px-6 py-4">
                              <div className="animate-pulse">
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="animate-pulse">
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="animate-pulse">
                                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="animate-pulse">
                                <div className="h-8 bg-gray-200 rounded w-20"></div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </>
                    ) : mydata.length > 0 ? (
                      mydata.map((data) => (
                        <TableBody key={data._id} data={data} mydata={mydata} setMydata={setMydata} />
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="px-6 py-12 text-center">
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                              <FaUtensils className="text-3xl text-gray-400" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">No Food Items Found</h3>
                              <p className="text-gray-600">Start by adding your first food item to your inventory.</p>
                            </div>
                            <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                              <FaPlus className="text-sm" />
                              Add Food Item
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pagination Section */}
          {!loading && totalPages > 1 && (
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  Showing page {page} of {totalPages} ({mydata.length} items)
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="group flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform duration-300" />
                    Previous
                  </button>
                  
                  <div className="flex gap-1">
                    {[...Array(totalPages)].map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPage(idx + 1)}
                        className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                          page === idx + 1 
                            ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg' 
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className="group flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Next
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          )}
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
        button:focus, th:focus, td:focus {
          outline: 2px solid #10b981;
          outline-offset: 2px;
        }
        
        /* Animation for sections */
        .bg-white {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Loading animation */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        
        /* Hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
        
        /* Table hover effects */
        tbody tr:hover {
          background-color: #f8fafc;
          transform: scale(1.01);
          transition: all 0.2s ease;
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
        
        /* Card hover effects */
        .shadow-lg:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Button animations */
        button:hover {
          transform: translateY(-2px);
        }
        
        /* Icon animations */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1) rotate(5deg);
        }
        
        /* Table styling */
        table {
          border-collapse: separate;
          border-spacing: 0;
        }
        
        th {
          position: sticky;
          top: 0;
          z-index: 10;
        }
        
        /* Responsive table */
        @media (max-width: 768px) {
          .overflow-x-auto {
            border-radius: 1rem;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </div>
  );
};

export default MyAddFood;
