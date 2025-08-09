// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../ApiHook/axiosInstance';
// import useAuth from '../../hook/useAuth';

// const AddToCart = () => {
//      const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();

//   const [loading, setLoading] = useState(true);
//   const [mydata, setMydata] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const limit = 10;

//   useEffect(() => {
//     if (!user?.email) return;

//     setLoading(true);
//     axiosSecure
//       .get(`/foods/user/${user.email}?page=${page}&limit=${limit}`)
//       .then((res) => {
//         setMydata(res.data.items || []);
//         setTotalPages(Math.ceil(res.data.total / limit) || 1);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, [user, page, axiosSecure]);
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default AddToCart;
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../ApiHook/axiosInstance';
import useAuth from '../../hook/useAuth';

const AddToCart = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [loading, setLoading] = useState(true);
  const [mydata, setMydata] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null); 
  const [modalOpen, setModalOpen] = useState(false);
  const limit = 10;

  const fetchData = () => {
    if (!user?.email) return;

    setLoading(true);
    axiosSecure.get(`/card/${user.email}?page=${page}&limit=${limit}`)
      .then((res) => {
        console.log(res.data.items)
        setMydata(res.data.items || []);
        setTotalPages(Math.ceil(res.data.total / limit) || 1);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [user, page]);

  const handleView = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
  
    try {
      await axiosSecure.delete(`/cart/${id}`);
      // After delete, refetch data or remove locally:
      setMydata((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      alert('Failed to delete item');
      console.error(error);
    }
  };

  return (
    <div className="w-12/12 mx-auto mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-4">{user?.displayName} Cart Items</h2>

      {loading ? (
        <p>Loading...</p>
      ) : mydata.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Image</th>
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Category</th>
                <th className="border border-gray-300 p-2">Expiry Date</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mydata.map((item) => (
                <tr key={item._id}>
                  <td className="border border-gray-300 p-2">
                    <img src={item.foodImage} alt={item.foodTitle} className="w-20 h-20 object-cover rounded" />
                  </td>
                  <td className="border border-gray-300 p-2 text-center">{item.foodTitle}</td>
                  <td className="border border-gray-300 p-2 text-center">{item.category}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    {new Date(item.expiryDate).toLocaleDateString()}
                  </td>
                  <td className=" p-2 space-x-2 flex justify-center items-center">
                    <button
                      onClick={() => handleView(item)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="self-center">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-md w-full p-6 relative"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 font-bold text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">{selectedItem.foodTitle}</h3>
            <img
              src={selectedItem.foodImage}
              alt={selectedItem.foodTitle}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p><strong>Category:</strong> {selectedItem.category}</p>
            <p><strong>Expiry Date:</strong> {new Date(selectedItem.expiryDate).toLocaleDateString()}</p>
            <p><strong>Added At:</strong> {new Date(selectedItem.addedAt).toLocaleString()}</p>
            <p><strong>User Email:</strong> {selectedItem.userEmail}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
