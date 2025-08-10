// import React, { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import { useLoaderData } from 'react-router';
// import Swal from 'sweetalert2';
// import useAuth from '../../hook/useAuth';
// import useAxiosSecure from '../../ApiHook/axiosInstance';

// const FoodDetails = () => {
//   const { data } = useLoaderData();
//   const {user}=useAuth()
//   const axiosSecure=useAxiosSecure()
//   const [timeRemaining, setTimeRemaining] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//     expired: false
//   });

//   useEffect(() => {
//     const calculateTimeRemaining = () => {
//       const now = new Date();
//       const expiryDate = new Date(data.expiryDate);
//       const diff = expiryDate.getTime() - now.getTime();

//       if (diff <= 0) {
//         setTimeRemaining({
//           days: 0,
//           hours: 0,
//           minutes: 0,
//           seconds: 0,
//           expired: true
//         });
//         return;
//       }

//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((diff / (1000 * 60)) % 60);
//       const seconds = Math.floor((diff / 1000) % 60);

//       setTimeRemaining({ days, hours, minutes, seconds, expired: false });
//     };

//     calculateTimeRemaining();
//     const interval = setInterval(calculateTimeRemaining, 1000);

//     return () => clearInterval(interval);
//   }, [data.expiryDate]);

//   const getStatusColor = () => {
//     if (timeRemaining.expired) return 'bg-red-500';
//     if (timeRemaining.days <= 1) return 'bg-orange-500';
//     if (timeRemaining.days <= 3) return 'bg-yellow-500';
//     return 'bg-green-500';
//   };

//   const getStatusText = () => {
//     if (timeRemaining.expired) return 'Expired';
//     if (timeRemaining.days <= 1) return 'Expiring Soon';
//     if (timeRemaining.days <= 3) return 'Warning';
//     return 'Fresh';
//   };

//   const haqndleAddToCart=async(food)=>{
// if (!user?.email) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Login Required',
//       text: 'Please log in to add items to your cart.'
//     });
//     return;
//   }
// if(user?.email===food.userEmail){
//      Swal.fire({
//       icon: 'error',
//       title: 'You Can not Add to Cart ',
//       text: 'You Can not Add to Cart Your Food.'
//     });
//     return;
// }
//   // Prepare the cart data
//   const cartData = {
//     foodId: food._id,
//     foodTitle: food.foodTitle,
//     foodImage: food.foodImage,
//     category: food.category,
//     expiryDate: food.expiryDate,
//     userEmail: user.email,
//     addedAt: new Date()
//   };
// try {
//     const res = await axiosSecure.post('/cart', cartData);
//     if (res.data.insertedId || res.status === 200) {
//       Swal.fire({
//         icon: 'success',
//         title: 'Added to Cart',
//         text: `${food.foodTitle} has been added to your cart.`
//       });
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Failed to add item to cart.'
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: 'Something went wrong while adding to cart.'
//     });
//   }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">Food Details</h1>
//           <p className="text-gray-600">Track your food inventory and expiration dates</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           {/* Hero Section with Image */}
//           <div className="relative h-80 md:h-96 overflow-hidden">
//             <img 
//               src={data.foodImage} 
//               alt={data.foodTitle}
//               className="w-full h-full object-cover"
//             />
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
//             {/* Status Badge */}
//             <div className="absolute top-6 right-6">
//               <div className={`px-4 py-2 rounded-full text-white font-semibold shadow-lg ${getStatusColor()}`}>
//                 {getStatusText()}
//               </div>
//             </div>

//             {/* Food Title Overlay */}
//             <div className="absolute bottom-6 left-6 right-6">
//               <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
//                 {data.foodTitle}
//               </h1>
//               <div className="flex flex-wrap gap-2">
//                 <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
//                   {data.category}
//                 </span>
//                 <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
//                   {data.quantity}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="p-6 md:p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {/* Main Info */}
//               <div className="lg:col-span-2 space-y-6">
//                 {/* Description */}
//                 <div className="bg-gray-50 rounded-xl p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
//                   <p className="text-gray-600 leading-relaxed">{data.description}</p>
//                 </div>

//                 {/* Expiration Timer */}
//                 <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4">Expiration Countdown</h3>
                  
//                   {timeRemaining.expired ? (
//                     <div className="text-center">
//                       <div className="text-6xl text-red-500 mb-4">⚠️</div>
//                       <p className="text-2xl font-bold text-red-600 mb-2">Expired</p>
//                       <p className="text-gray-600">This item has passed its expiration date</p>
//                     </div>
//                   ) : (
//                     <div className="text-center">
//                       <div className="grid grid-cols-4 gap-4 mb-4">
//                         <div className="bg-white rounded-lg p-4 shadow-sm">
//                           <div className="text-3xl font-bold text-blue-600">{timeRemaining.days}</div>
//                           <div className="text-sm text-gray-500">Days</div>
//                         </div>
//                         <div className="bg-white rounded-lg p-4 shadow-sm">
//                           <div className="text-3xl font-bold text-green-600">{timeRemaining.hours}</div>
//                           <div className="text-sm text-gray-500">Hours</div>
//                         </div>
//                         <div className="bg-white rounded-lg p-4 shadow-sm">
//                           <div className="text-3xl font-bold text-orange-600">{timeRemaining.minutes}</div>
//                           <div className="text-sm text-gray-500">Minutes</div>
//                         </div>
//                         <div className="bg-white rounded-lg p-4 shadow-sm">
//                           <div className="text-3xl font-bold text-purple-600">{timeRemaining.seconds}</div>
//                           <div className="text-sm text-gray-500">Seconds</div>
//                         </div>
//                       </div>
//                       <p className="text-gray-600">
//                         Expires on: <span className="font-semibold">{format(new Date(data.expiryDate), 'PPP')}</span>
//                       </p>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex justify-center items-center">
//   <button
//    onClick={() => haqndleAddToCart(data)}
//    className='font-bold px-2 py-2 bg-green-400 text-white rounded-md text-sm  hover:bg-green-600 transition-colors duration-200'>Add to Cart </button>
//                  </div>
//               </div>

//               {/* Sidebar Info */}
//               <div className="space-y-6">
//                 {/* Quick Info Cards */}
//                 <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Info</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-600">Category:</span>
//                       <span className="font-semibold text-gray-800">{data.category}</span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-600">Quantity:</span>
//                       <span className="font-semibold text-gray-800">{data.quantity}</span>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-600">Status:</span>
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor()}`}>
//                         {getStatusText()}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Dates Info */}
//                 <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-4">Important Dates</h3>
//                   <div className="space-y-3">
//                     <div>
//                       <p className="text-sm text-gray-500">Added on:</p>
//                       <p className="font-semibold text-gray-800">{format(new Date(data.addedDate), 'PPP')}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Expires on:</p>
//                       <p className="font-semibold text-gray-800">{format(new Date(data.expiryDate), 'PPP')}</p>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Owner Info */}
//                 <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-4">Owner Information</h3>
//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
//                       <span className="text-white font-semibold text-sm">
//                         {data.userEmail.charAt(0).toUpperCase()}
//                       </span>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Owner</p>
//                       <p className="font-semibold text-gray-800 truncate">{data.userEmail}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodDetails;




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
    <div className="min-h-screen  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Food Details
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the complete information about this food item and track its freshness
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Enhanced Hero Section */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <img 
              src={data.foodImage} 
              alt={data.foodTitle}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Enhanced Status Badge */}
            <div className="absolute top-8 right-8">
              <div className={`px-6 py-3 rounded-full text-white font-bold shadow-2xl ${getStatusColor()} transform hover:scale-105 transition-all duration-300 backdrop-blur-sm`}>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${timeRemaining.expired ? 'bg-red-300' : 'bg-white'} animate-pulse`}></div>
                  <span className="text-lg">{getStatusText()}</span>
                </div>
              </div>
            </div>

            {/* Enhanced Food Title Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl leading-tight">
                {data.foodTitle}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/25 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 hover:bg-white/35 transition-all duration-300">
                  {data.category}
                </span>
                <span className="px-4 py-2 bg-white/25 backdrop-blur-md text-white rounded-full text-sm font-semibold border border-white/30 hover:bg-white/35 transition-all duration-300">
                  {data.quantity}
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Enhanced Description */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Description</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{data.description}</p>
                </div>

                {/* Enhanced Expiration Timer */}
                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Expiration Countdown</h3>
                  </div>
                  
                  {timeRemaining.expired ? (
                    <div className="text-center py-8">
                      <div className="text-8xl text-red-500 mb-6 animate-bounce">⚠️</div>
                      <p className="text-3xl font-bold text-red-600 mb-3">Expired</p>
                      <p className="text-gray-600 text-lg">This item has passed its expiration date</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                          <div className="text-4xl font-bold text-blue-600 mb-2">{timeRemaining.days}</div>
                          <div className="text-sm text-gray-500 font-medium">Days</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-green-100">
                          <div className="text-4xl font-bold text-green-600 mb-2">{timeRemaining.hours}</div>
                          <div className="text-sm text-gray-500 font-medium">Hours</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100">
                          <div className="text-4xl font-bold text-orange-600 mb-2">{timeRemaining.minutes}</div>
                          <div className="text-sm text-gray-500 font-medium">Minutes</div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                          <div className="text-4xl font-bold text-purple-600 mb-2">{timeRemaining.seconds}</div>
                          <div className="text-sm text-gray-500 font-medium">Seconds</div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg">
                        Expires on: <span className="font-bold text-gray-900">{format(new Date(data.expiryDate), 'PPP')}</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Enhanced Add to Cart Button */}
                {!timeRemaining.expired &&  <div className="flex justify-center items-center pt-4">
                  <button
                    onClick={() => haqndleAddToCart(data)}
                    className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-300"
                  >
                    <span className="flex items-center space-x-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                      <span>Add to Cart</span>
                    </span>
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              }
               
</div>
              {/* Enhanced Sidebar Info */}
              <div className="space-y-8">
                {/* Enhanced Quick Info Cards */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Quick Info</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/60 rounded-xl">
                      <span className="text-gray-600 font-medium">Category:</span>
                      <span className="font-bold text-gray-800 px-3 py-1 bg-emerald-100 rounded-full">{data.category}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/60 rounded-xl">
                      <span className="text-gray-600 font-medium">Quantity:</span>
                      <span className="font-bold text-gray-800 px-3 py-1 bg-blue-100 rounded-full">{data.quantity}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/60 rounded-xl">
                      <span className="text-gray-600 font-medium">Status:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold text-white ${getStatusColor()}`}>
                        {getStatusText()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Dates Info */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Important Dates</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/60 rounded-xl">
                      <p className="text-sm text-gray-500 font-medium mb-1">Added on:</p>
                      <p className="font-bold text-gray-800">{format(new Date(data.addedDate), 'PPP')}</p>
                    </div>
                    <div className="p-4 bg-white/60 rounded-xl">
                      <p className="text-sm text-gray-500 font-medium mb-1">Expires on:</p>
                      <p className="font-bold text-gray-800">{format(new Date(data.expiryDate), 'PPP')}</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Owner Info */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Owner Information</h3>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {data.userEmail.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Owner</p>
                      <p className="font-bold text-gray-800 truncate max-w-[200px]">{data.userEmail}</p>
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





