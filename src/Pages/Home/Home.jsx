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
import SmartSuggestions from '../../Components/Home/SmartSuggestions';

const Home = () => {
     const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLength, setDataLength] = useState(0);
  useEffect(() => {
    axios("https://server-indol-nu.vercel.app/nearexpiring").then(
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
           <div className="">
           <div className=" mt-10 relative">
              {/* Background Pattern */}
      
          
              <Heading text={"NearlyExpiryFoods"}></Heading>
          
          <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6 ">
            {loading
              ? [...Array(dataLength || 8)].map((_, idx) => (
                  <SkeletonCard key={idx} />
                ))
              : data.map((food) => (
                  <FoodsCard key={food._id} food={food} />
                ))}
          </div>
        </div>
           <AllExpiry/>
            <QuickRecipes/>
             <SmartSuggestions/>
           <PreservationTips/>
            <DonationInfo/>
         <Faqs/>
           </div>
           
        </div>
    );
};

export default Home;