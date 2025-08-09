import React from 'react';
import Heading from '../Heading/Heading';

const DonationInfo = () => {
  return (
    <div className="bg-[#8daa91] py-10 px-5 rounded-2xl shadow-md text-center my-5">
      <Heading text={"Help Reduce Food Waste"}/>
      <p className="text-gray-700 mb-4">
        Donate your excess food and support communities in need. Every small contribution counts!
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-200">
        Donate Now
      </button>
    </div>
  );
};

export default DonationInfo;