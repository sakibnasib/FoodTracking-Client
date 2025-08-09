import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../ApiHook/axiosInstance';

const FoodDetails = () => {
  const { data } = useLoaderData();
  const {user}=useAuth()
  const axiosSecure=useAxiosSecure()
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const expiryDate = new Date(data.expiryDate);
      const diff = expiryDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds, expired: false });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [data.expiryDate]);

  const getStatusColor = () => {
    if (timeRemaining.expired) return 'bg-red-500';
    if (timeRemaining.days <= 1) return 'bg-orange-500';
    if (timeRemaining.days <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStatusText = () => {
    if (timeRemaining.expired) return 'Expired';
    if (timeRemaining.days <= 1) return 'Expiring Soon';
    if (timeRemaining.days <= 3) return 'Warning';
    return 'Fresh';
  };

  const haqndleAddToCart=async(food)=>{
if (!user?.email) {
    Swal.fire({
      icon: 'error',
      title: 'Login Required',
      text: 'Please log in to add items to your cart.'
    });
    return;
  }
if(user?.email===food.userEmail){
     Swal.fire({
      icon: 'error',
      title: 'You Can not Add to Cart ',
      text: 'You Can not Add to Cart Your Food.'
    });
    return;
}
  // Prepare the cart data
  const cartData = {
    foodId: food._id,
    foodTitle: food.foodTitle,
    foodImage: food.foodImage,
    category: food.category,
    expiryDate: food.expiryDate,
    userEmail: user.email,
    addedAt: new Date()
  };
try {
    const res = await axiosSecure.post('/cart', cartData);
    if (res.data.insertedId || res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Added to Cart',
        text: `${food.foodTitle} has been added to your cart.`
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add item to cart.'
      });
    }
  } catch (err) {
    console.error(err);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Something went wrong while adding to cart.'
    });
  }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Food Details</h1>
          <p className="text-gray-600">Track your food inventory and expiration dates</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Hero Section with Image */}
          <div className="relative h-80 md:h-96 overflow-hidden">
            <img 
              src={data.foodImage} 
              alt={data.foodTitle}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Status Badge */}
            <div className="absolute top-6 right-6">
              <div className={`px-4 py-2 rounded-full text-white font-semibold shadow-lg ${getStatusColor()}`}>
                {getStatusText()}
              </div>
            </div>

            {/* Food Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                {data.foodTitle}
              </h1>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                  {data.category}
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                  {data.quantity}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{data.description}</p>
                </div>

                {/* Expiration Timer */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Expiration Countdown</h3>
                  
                  {timeRemaining.expired ? (
                    <div className="text-center">
                      <div className="text-6xl text-red-500 mb-4">⚠️</div>
                      <p className="text-2xl font-bold text-red-600 mb-2">Expired</p>
                      <p className="text-gray-600">This item has passed its expiration date</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-3xl font-bold text-blue-600">{timeRemaining.days}</div>
                          <div className="text-sm text-gray-500">Days</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-3xl font-bold text-green-600">{timeRemaining.hours}</div>
                          <div className="text-sm text-gray-500">Hours</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-3xl font-bold text-orange-600">{timeRemaining.minutes}</div>
                          <div className="text-sm text-gray-500">Minutes</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-3xl font-bold text-purple-600">{timeRemaining.seconds}</div>
                          <div className="text-sm text-gray-500">Seconds</div>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        Expires on: <span className="font-semibold">{format(new Date(data.expiryDate), 'PPP')}</span>
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex justify-center items-center">
  <button
   onClick={() => haqndleAddToCart(data)}
   className='font-bold px-2 py-2 bg-green-400 text-white rounded-md text-sm  hover:bg-green-600 transition-colors duration-200'>Add to Cart </button>
                 </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Quick Info Cards */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-semibold text-gray-800">{data.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Quantity:</span>
                      <span className="font-semibold text-gray-800">{data.quantity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor()}`}>
                        {getStatusText()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dates Info */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Dates</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Added on:</p>
                      <p className="font-semibold text-gray-800">{format(new Date(data.addedDate), 'PPP')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Expires on:</p>
                      <p className="font-semibold text-gray-800">{format(new Date(data.expiryDate), 'PPP')}</p>
                    </div>
                  </div>
                </div>
                {/* Owner Info */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Owner Information</h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {data.userEmail.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Owner</p>
                      <p className="font-semibold text-gray-800 truncate">{data.userEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;




