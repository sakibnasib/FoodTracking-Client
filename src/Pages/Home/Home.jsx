import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Home/Banner';
import DonationInfo from '../../Components/Home/DonationInfo';
import PreservationTips from '../../Components/Home/PreservationTips';
import Faqs from '../../Components/Home/Faqs';
import QuickRecipes from '../../Components/Home/QuickRecipes';
import AllExpiry from '../../Components/Home/AllExpiry';
import axios from 'axios';
import Heading from '../../Components/Heading/Heading';
import SkeletonCard from '../../Components/Skeleton/SkeletonCard';
import FoodsCard from '../../Components/FoodsCard/FoodsCard';

const Home = () => {
     const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLength, setDataLength] = useState(0);
  useEffect(() => {
    axios("http://localhost:3000/nearexpiring").then(
      (res) => {
        setData(res.data);
        setLoading(false);
      }
    );
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      setDataLength(data.length);
    }
  }, [data]);
  
    return (
        <div>
           <Banner/>
           <div className="w-11/12 mx-auto">
           <div className=" mt-10">
          <Heading text={"NearlyExpiryFoods"}></Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 ">
            {loading
              ? [...Array(dataLength || 8)].map((_, idx) => (
                  <SkeletonCard key={idx} />
                ))
              : data.map((food) => (
                  <FoodsCard key={food._id} food={food} />
                ))}
          </div>
        </div>
        <DonationInfo/>
           <AllExpiry/>
             
           <PreservationTips/>
           <Faqs/>
          <QuickRecipes/>
           </div>
           
        </div>
    );
};

export default Home;