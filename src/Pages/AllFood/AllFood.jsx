import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkeletonCard from '../../Components/Skeleton/SkeletonCard';
import FoodsCard from '../../Components/FoodsCard/FoodsCard';

const AllFood = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState(''); // New
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8;

  const fetchFoods = async () => {
    setLoading(true);

    const params = {
      q: searchTerm,
      page,
      limit,
    };

    if (selectedCategory) params.category = selectedCategory;
    if (sortBy) params.sort = sortBy;

    try {
      const res = await axios.get('http://localhost:3000/all-foods', { params });
      const data = res.data.data || res.data;
      const totalCount = res.data.total || data.length;

      setFoods(data);
      setTotalPages(Math.ceil(totalCount / limit));
    } catch (error) {
      console.error('Failed to fetch foods:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, [searchTerm, selectedCategory, sortBy, page]);

  return (
    <div className="px-4 w-11/12 mx-auto">
      <div className="text-center mt-5 mb-6">
  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
    🧊 Community Fridge: Find Shared Foods
  </h1>
  <p className="text-gray-600 text-sm max-w-xl mx-auto">
    Browse and claim food items shared by generous members of your community. Filter by category, search by name, or sort by freshness.
  </p>
</div>

      {/* Header - Filters */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 mb-4">
        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search by name or category..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          className="input input-bordered w-full sm:w-72 md:w-80 rounded-full"
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setPage(1);
          }}
          className="select select-bordered w-full sm:w-52 md:w-56"
        >
          <option value="">All Categories</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Snacks">Snacks</option>
          <option value="Fruits">Fruits</option>
          <option value="Grains">Grains</option>
        </select>

        {/* Sort By */}
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setPage(1);
          }}
          className="select select-bordered w-full sm:w-52 md:w-56"
        >
          <option value="">Sort By</option>
          <option value="addedDate_desc">Date Added (Newest)</option>
          <option value="addedDate_asc">Date Added (Oldest)</option>
          <option value="expiryDate_asc">Expiry Date (Soonest)</option>
          <option value="expiryDate_desc">Expiry Date (Latest)</option>
        </select>
      </div>

      {/* Foods Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-8">
        {loading
          ? [...Array(8)].map((_, i) => <SkeletonCard key={i} />)
          : foods.map((food, i) => <FoodsCard key={i} food={food} />)}
      </div>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center mb-10 gap-1 flex-wrap">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="btn btn-sm btn-outline bg-[#8daa91]"
          >
            ⬅ Prev
          </button>
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`btn btn-sm   ${
                page === idx + 1 ? 'btn-primary bg-[#8daa91]' : 'btn-outline'
              }`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="btn btn-sm btn-outline bg-[#8daa91]"
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default AllFood;