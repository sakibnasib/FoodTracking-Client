import React, { use, useEffect, useState } from 'react';


import axios from 'axios';
import Heading from '../Heading/Heading';
import SkeletonCard from '../Skeleton/SkeletonCard';
import FoodsCard from '../FoodsCard/FoodsCard';



const AllExpiry = () => {
  const [exData, setExData] = useState([]);
//   const { setCount } = use(Cou);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); // for toggling show more/less

  useEffect(() => {
    axios('http://localhost:3000/allfoods/expired')
      .then(res => {
        setExData(res.data);
        // setCount(res.data);
        console.log(res.data)
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  // Determine how many cards to show
  const cardsToShow = showAll ? exData.length : 8;

  return (
    <div className="mt-10">
     <Heading text={"All Expiry Foods"}/>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
          {[...Array(8)].map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
            {exData.slice(0, cardsToShow).map(food => (
              <FoodsCard key={food._id} food={food} />
            ))}
          </div>

          {exData.length > 8 && (
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 bg-green-400 text-white rounded "
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllExpiry;