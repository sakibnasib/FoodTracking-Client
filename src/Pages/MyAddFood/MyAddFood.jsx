import React, { useEffect, useState } from 'react';
import TableBody from './TableBody';
import SkeletonTableRow from '../../Components/Skeleton/SkeletonTableRow';
import useAxiosSecure from '../../ApiHook/axiosInstance';
import useAuth from '../../hook/useAuth';

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
    <div>
      <h1 className="text-center font-bold text-[2rem] mt-5">{user?.displayName} AllAddFood</h1>

      <div className="overflow-x-auto mt-5 mb-6 w-full mx-auto border rounded-lg shadow-md">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          {loading ? (
            <>
              {[...Array(5)].map((_, i) => (
                <SkeletonTableRow key={i} />
              ))}
            </>
          ) : (
            mydata?.map((data) => (
              <TableBody key={data._id} data={data} mydata={mydata} setMydata={setMydata} />
            ))
          )}
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="self-center">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyAddFood;
