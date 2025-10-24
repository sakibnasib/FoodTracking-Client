// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../ApiHook/axiosInstance';
// import useAuth from '../../hook/useAuth';

// const AddToCart = () => {
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const [loading, setLoading] = useState(true);
//   const [mydata, setMydata] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [selectedItem, setSelectedItem] = useState(null); 
//   const [modalOpen, setModalOpen] = useState(false);
//   const limit = 10;

//   const fetchData = () => {
//     if (!user?.email) return;

//     setLoading(true);
//     axiosSecure.get(`/card/${user.email}?page=${page}&limit=${limit}`)
//       .then((res) => {
//         console.log(res.data.items)
//         setMydata(res.data.items || []);
//         setTotalPages(Math.ceil(res.data.total / limit) || 1);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   };

//   useEffect(() => {
//     fetchData();
//   }, [user, page]);

//   const handleView = (item) => {
//     setSelectedItem(item);
//     setModalOpen(true);
//   };

//   const handleDelete = async (id) => {
  
//     try {
//       await axiosSecure.delete(`/cart/${id}`);
//       // After delete, refetch data or remove locally:
//       setMydata((prev) => prev.filter((item) => item._id !== id));
//     } catch (error) {
//       alert('Failed to delete item');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="w-12/12 mx-auto mx-auto p-4">
//       <h2 className="text-center text-2xl font-bold mb-4">{user?.displayName} Cart Items</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : mydata.length === 0 ? (
//         <p>No items in your cart.</p>
//       ) : (
//         <>
//           <table className="w-full border-collapse border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="border border-gray-300 p-2">Image</th>
//                 <th className="border border-gray-300 p-2">Title</th>
//                 <th className="border border-gray-300 p-2">Category</th>
//                 <th className="border border-gray-300 p-2">Expiry Date</th>
//                 <th className="border border-gray-300 p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {mydata.map((item) => (
//                 <tr key={item._id}>
//                   <td className="border border-gray-300 p-2">
//                     <img src={item.foodImage} alt={item.foodTitle} className="w-20 h-20 object-cover rounded" />
//                   </td>
//                   <td className="border border-gray-300 p-2 text-center">{item.foodTitle}</td>
//                   <td className="border border-gray-300 p-2 text-center">{item.category}</td>
//                   <td className="border border-gray-300 p-2 text-center">
//                     {new Date(item.expiryDate).toLocaleDateString()}
//                   </td>
//                   <td className=" p-2 space-x-2 flex justify-center items-center">
//                     <button
//                       onClick={() => handleView(item)}
//                       className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                     >
//                       View
//                     </button>
//                     <button
//                       onClick={() => handleDelete(item._id)}
//                       className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           <div className="flex justify-center mt-4 space-x-4">
//             <button
//               onClick={() => setPage((p) => Math.max(p - 1, 1))}
//               disabled={page === 1}
//               className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//             >
//               Prev
//             </button>
//             <span className="self-center">
//               Page {page} of {totalPages}
//             </span>
//             <button
//               onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
//               disabled={page === totalPages}
//               className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}

//       {/* Modal */}
//       {modalOpen && selectedItem && (
//         <div
//           onClick={() => setModalOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white rounded-lg max-w-md w-full p-6 relative"
//           >
//             <button
//               onClick={() => setModalOpen(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 font-bold text-xl"
//             >
//               &times;
//             </button>
//             <h3 className="text-xl font-semibold mb-4">{selectedItem.foodTitle}</h3>
//             <img
//               src={selectedItem.foodImage}
//               alt={selectedItem.foodTitle}
//               className="w-full h-48 object-cover rounded mb-4"
//             />
//             <p><strong>Category:</strong> {selectedItem.category}</p>
//             <p><strong>Expiry Date:</strong> {new Date(selectedItem.expiryDate).toLocaleDateString()}</p>
//             <p><strong>Added At:</strong> {new Date(selectedItem.addedAt).toLocaleString()}</p>
//             <p><strong>User Email:</strong> {selectedItem.userEmail}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddToCart;


import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../ApiHook/axiosInstance';
import useAuth from '../../hook/useAuth';
import Loader from '../../Components/Loader/Loader';

const AddToCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [loading, setLoading] = useState(true);
  const [mydata, setMydata] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const limit = 10;

  // Function to show a message and automatically hide it
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const fetchData = () => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    setLoading(true);
    axiosSecure
      .get(`/card/${user.email}?page=${page}&limit=${limit}`)
      .then((res) => {
        setMydata(res.data.items || []);
        setTotalPages(Math.ceil(res.data.total / limit) || 1);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        showMessage('Failed to fetch cart items.');
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [user, page]);

  const handleView = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  // Function to prepare for item deletion, showing a confirmation modal
  const handleConfirmDelete = (item) => {
    setSelectedItem(item);
    setShowDeleteConfirm(true);
  };

  const handleDelete = async () => {
    if (!selectedItem) return;

    setShowDeleteConfirm(false); // Close the confirmation modal

    try {
      await axiosSecure.delete(`/cart/${selectedItem._id}`);
      setMydata((prev) => prev.filter((item) => item._id !== selectedItem._id));
      showMessage('Item removed from cart successfully.');
    } catch (error) {
      showMessage('Failed to delete item.');
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
            Your Food Cart
          </h2>
          <p className="text-lg text-gray-600">
            Welcome, {user?.displayName}. Here are the items you have added.
          </p>
        </div>

        {/* Message Alert */}
        {message && (
          <div className="fixed top-4 right-4 z-50 transition-opacity duration-500 ease-in-out bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg shadow-lg">
            <p className="font-bold">Success!</p>
            <p>{message}</p>
          </div>
        )}

        {/* Loading and Empty States */}
        {loading ? (
         <Loader/>
        ) : mydata.length === 0 ? (
          <div className="text-center py-20">
            <svg
              className="mx-auto h-24 w-24 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.183 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Your cart is empty!
            </h3>
            <p className="mt-2 text-md text-gray-500">
              Start adding some healthy items to get started.
            </p>
          </div>
        ) : (
          <>
            {/* Responsive Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mydata.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <img
                    src={item.foodImage}
                    alt={item.foodTitle}
                    className="w-full h-48 object-cover rounded-t-3xl"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.foodTitle}
                    </h3>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                      <span>
                        <strong className="text-gray-700">Category:</strong>{' '}
                        {item.category}
                      </span>
                      <span>
                        <strong className="text-gray-700">Expires:</strong>{' '}
                        {new Date(item.expiryDate).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => handleView(item)}
                        className="flex-1 py-2 px-4 rounded-full text-white font-semibold bg-green-500 hover:bg-green-600 transition-colors shadow-lg"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleConfirmDelete(item)}
                        className="flex-1 py-2 px-4 rounded-full text-white font-semibold bg-red-500 hover:bg-red-600 transition-colors shadow-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-10 space-x-4">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-full disabled:opacity-50 hover:bg-gray-300 transition-colors"
              >
                Previous
              </button>
              <span className="text-lg font-medium text-gray-700">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-full disabled:opacity-50 hover:bg-gray-300 transition-colors"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* View Details Modal */}
        {modalOpen && selectedItem && (
          <div
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center p-4 z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative transform scale-100 transition-transform duration-300"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold"
              >
                &times;
              </button>
              <div className="flex justify-center mb-6">
                <img
                  src={selectedItem.foodImage}
                  alt={selectedItem.foodTitle}
                  className="w-48 h-48 object-cover rounded-full border-4 border-green-500 shadow-md"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
                {selectedItem.foodTitle}
              </h3>
              <div className="space-y-3 text-lg text-gray-600">
                <p>
                  <strong className="text-gray-800">Category:</strong>{' '}
                  {selectedItem.category}
                </p>
                <p>
                  <strong className="text-gray-800">Expiry Date:</strong>{' '}
                  {new Date(selectedItem.expiryDate).toLocaleDateString()}
                </p>
                <p>
                  <strong className="text-gray-800">Added At:</strong>{' '}
                  {new Date(selectedItem.addedAt).toLocaleDateString()}
                </p>
                <p>
                  <strong className="text-gray-800">User Email:</strong>{' '}
                  {selectedItem.userEmail}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && selectedItem && (
          <div
            onClick={() => setShowDeleteConfirm(false)}
            className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center p-4 z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 relative transform scale-100 transition-transform duration-300 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Are you sure?
              </h3>
              <p className="text-gray-600 mb-6">
                Do you really want to delete "{selectedItem.foodTitle}" from your cart? This action cannot be undone.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleDelete}
                  className="py-3 px-6 rounded-full text-white font-semibold bg-red-500 hover:bg-red-600 transition-colors shadow-lg"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="py-3 px-6 rounded-full text-gray-800 font-semibold bg-gray-200 hover:bg-gray-300 transition-colors shadow-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
