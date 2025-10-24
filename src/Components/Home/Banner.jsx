// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const slides = [
//   {
//     id: 1,
//     image: "https://i.ibb.co.com/0j0bks6q/batch-cooking-arrangement-with-copy-space.jpg",
//     title: "Fresh Picks, Before They're Gone!",
//     description: "Discover the freshest ingredients delivered to your doorstep",
//     cta: "Shop Now",
//     badge: "Limited Time"
//   },
//   {
//     id: 2,
//     image: "https://i.ibb.co.com/fdzpfrkG/tasty-batch-food-cooked-with-empty-notebook.jpg",
//     title: "Track What's Fresh — and What's Not",
//     description: "Smart expiry tracking to keep your kitchen organized",
//     cta: "Learn More",
//     badge: "New Feature"
//   },
//   {
//     id: 3,
//     image: "https://i.ibb.co.com/nMfwsgvJ/flat-lay-vegetables-arrangement-dark-background-with-copy-space.jpg",
//     title: "Stay Ahead of Expiry Dates",
//     description: "Never waste food again with our intelligent reminder system",
//     cta: "Get Started",
//     badge: "Popular"
//   },
// ];

// const Banner = () => {
//   return (
//     <div className="relative">
//       <Swiper
//         modules={[Autoplay, Navigation, Pagination]}
//         autoplay={{ 
//           delay: 5000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true
//         }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         pagination={{
//           clickable: true,
//           dynamicBullets: true,
//         }}
//         loop
//         className="hero-swiper"
//         speed={800}
//         effect="fade"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative h-[400px] md:h-[500px] lg:h-[500px]  overflow-hidden mx-4  shadow-2xl">
//               {/* Background Image */}
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-fit transition-transform duration-700 hover:scale-105"
//               />
              
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
              
//               {/* Content Container */}
//               <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-8 md:px-12 lg:px-16">
//                 {/* Badge */}
//                 <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
//                   <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
//                   {slide.badge}
//                 </div>
                
//                 {/* Title */}
//                 <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-2xl">
//                   {slide.title}
//                 </h2>
                
//                 {/* Description */}
//                 <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-gray-200 leading-relaxed drop-shadow-lg">
//                   {slide.description}
//                 </p>
                
//                 {/* Call to Action Button */}
//                 <button className="group relative inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transform">
//                   <span>{slide.cta}</span>
//                   <svg 
//                     className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </button>
//               </div>
              
//               {/* Decorative Elements */}
//               <div className="absolute top-8 right-8 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"></div>
//               <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"></div>
//             </div>
//           </SwiperSlide>
//         ))}
        
//         {/* Custom Navigation Buttons */}
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//       </Swiper>
      
//       {/* Inline Styles */}
//       <style jsx>{`
//         .hero-swiper {
//           position: relative;
//         }

//         .hero-swiper .swiper-pagination-bullet {
//           background: rgba(255, 255, 255, 0.5);
//           opacity: 1;
//           width: 12px;
//           height: 12px;
//           transition: all 0.3s ease;
//           margin: 0 4px;
//         }

//         .hero-swiper .swiper-pagination-bullet-active {
//           background: white;
//           transform: scale(1.2);
//           box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
//         }

//         .hero-swiper .swiper-pagination {
//           bottom: 20px;
//           z-index: 10;
//         }

//         .hero-swiper .swiper-button-prev,
//         .hero-swiper .swiper-button-next {
//           color: white !important;
//           background: rgba(255, 255, 255, 0.2) !important;
//           backdrop-filter: blur(10px) !important;
//           width: 48px !important;
//           height: 48px !important;
//           border-radius: 50% !important;
//           border: 1px solid rgba(255, 255, 255, 0.3) !important;
//           transition: all 0.3s ease !important;
//           z-index: 10;
//         }

//         .hero-swiper .swiper-button-prev:hover,
//         .hero-swiper .swiper-button-next:hover {
//           background: rgba(255, 255, 255, 0.3) !important;
//           transform: scale(1.1);
//           box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
//         }

//         .hero-swiper .swiper-button-prev::after,
//         .hero-swiper .swiper-button-next::after {
//           font-size: 18px !important;
//           font-weight: bold !important;
//         }

//         /* Slide animations */
//         .hero-swiper .swiper-slide {
//           transition: transform 0.3s ease;
//         }

//         .hero-swiper .swiper-slide-active {
//           transform: scale(1.02);
//         }

//         /* Responsive adjustments */
//         @media (max-width: 768px) {
//           .hero-swiper .swiper-button-prev,
//           .hero-swiper .swiper-button-next {
//             width: 40px !important;
//             height: 40px !important;
//           }
          
//           .hero-swiper .swiper-button-prev::after,
//           .hero-swiper .swiper-button-next::after {
//             font-size: 16px !important;
//           }
          
//           .hero-swiper .swiper-pagination-bullet {
//             width: 10px;
//             height: 10px;
//           }
//         }

//         /* Loading animation for images */
//         .hero-swiper img {
//           animation: fadeIn 0.5s ease-in-out;
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: scale(1.1);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         /* Hover effects for interactive elements */
//         .hero-swiper .swiper-slide:hover img {
//           transform: scale(1.05);
//         }

//         /* Custom scrollbar for webkit browsers */
//         .hero-swiper::-webkit-scrollbar {
//           display: none;
//         }

//         /* Ensure proper z-index stacking */
//         .hero-swiper .swiper-wrapper {
//           z-index: 1;
//         }

//         .hero-swiper .swiper-slide {
//           z-index: 2;
//         }

//         /* Accessibility improvements */
//         .hero-swiper .swiper-button-prev:focus,
//         .hero-swiper .swiper-button-next:focus {
//           outline: 2px solid white;
//           outline-offset: 2px;
//         }

//         .hero-swiper .swiper-pagination-bullet:focus {
//           outline: 2px solid white;
//           outline-offset: 2px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Banner;




import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/0j0bks6q/batch-cooking-arrangement-with-copy-space.jpg",
    title: "Fresh Picks, Before They're Gone!",
    description: "Discover the freshest ingredients delivered to your doorstep",
    cta: "Shop Now",
    badge: "Limited Time",
    badgeColor: "bg-red-500"
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/fdzpfrkG/tasty-batch-food-cooked-with-empty-notebook.jpg",
    title: "Track What's Fresh — and What's Not",
    description: "Smart expiry tracking to keep your kitchen organized",
    cta: "Learn More",
    badge: "New Feature",
    badgeColor: "bg-blue-500"
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/nMfwsgvJ/flat-lay-vegetables-arrangement-dark-background-with-copy-space.jpg",
    title: "Stay Ahead of Expiry Dates",
    description: "Never waste food again with our intelligent reminder system",
    cta: "Get Started",
    badge: "Popular",
    badgeColor: "bg-green-500"
  },
];

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative bg-gray-900">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          renderBullet: function (index, className) {
            return `<span class="${className} !w-3 !h-3 !mx-1 transition-all duration-300"></span>`;
          },
        }}
        loop={true}
        className="hero-swiper"
        speed={800}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        preloadImages={true}
        watchSlidesProgress={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
              {/* Background Image with Loading State */}
              <div className="absolute inset-0 bg-gray-800">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out"
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                {/* Fallback background */}
                <div 
                  className="absolute inset-0 hidden"
                  style={{
                    background: `linear-gradient(135deg, ${index % 2 === 0 ? '#1e40af' : '#059669'}, ${index % 2 === 0 ? '#059669' : '#1e40af'})`
                  }}
                />
              </div>
              
              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
              
              {/* Content Container */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    <div className={`inline-flex items-center px-4 py-2 ${slide.badgeColor} backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6 border border-white/20 shadow-lg`}>
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      {slide.badge}
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-2xl text-gray-200 leading-relaxed font-light">
                      {slide.description}
                    </p>
                    
                    {/* Call to Action Button */}
                    <button className="group relative inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-xl text-lg transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-2xl active:scale-95 transform shadow-lg">
                      <span className="relative z-10">{slide.cta}</span>
                      <svg 
                        className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 group-hover:translate-x-full opacity-0 group-hover:opacity-100"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !hidden md:!flex">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next !hidden md:!flex">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
      
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div className="h-full bg-white/80 swiper-progress-bar transition-all duration-100 ease-linear"></div>
      </div>
      
      {/* Inline Styles */}
      <style jsx>{`
        .hero-swiper {
          position: relative;
        }

        .swiper-progress-bar {
          width: 100%;
          animation: progress 5s linear infinite;
        }

        .hero-swiper.autoplay-paused .swiper-progress-bar {
          animation-play-state: paused;
        }

        @keyframes progress {
          0% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }

        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
          margin: 0 6px;
          border: 2px solid transparent;
        }

        .hero-swiper .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.3);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .hero-swiper .swiper-pagination {
          bottom: 40px;
          z-index: 10;
        }

        .hero-swiper .swiper-button-prev,
        .hero-swiper .swiper-button-next {
          color: white !important;
          background: rgba(255, 255, 255, 0.15) !important;
          backdrop-filter: blur(20px) !important;
          width: 60px !important;
          height: 60px !important;
          border-radius: 50% !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          z-index: 10;
          margin: 0 20px;
          opacity: 0;
        }

        .hero-swiper:hover .swiper-button-prev,
        .hero-swiper:hover .swiper-button-next {
          opacity: 1;
        }

        .hero-swiper .swiper-button-prev:hover,
        .hero-swiper .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          transform: scale(1.15);
          box-shadow: 0 8px 32px rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .hero-swiper .swiper-button-prev:active,
        .hero-swiper .swiper-button-next:active {
          transform: scale(0.95);
        }

        .hero-swiper .swiper-button-prev::after,
        .hero-swiper .swiper-button-next::after {
          content: none;
        }

        /* Image loading animation */
        .hero-swiper img {
          animation: smoothZoom 20s ease-in-out infinite;
        }

        @keyframes smoothZoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-swiper .swiper-button-prev,
          .hero-swiper .swiper-button-next {
            width: 50px !important;
            height: 50px !important;
            margin: 0 10px;
          }
          
          .hero-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }

          .hero-swiper .swiper-pagination {
            bottom: 60px;
          }
        }

        @media (max-width: 480px) {
          .hero-swiper .swiper-pagination {
            bottom: 80px;
          }
        }

        /* Accessibility improvements */
        .hero-swiper .swiper-button-prev:focus,
        .hero-swiper .swiper-button-next:focus {
          outline: 3px solid white;
          outline-offset: 2px;
        }

        .hero-swiper .swiper-pagination-bullet:focus {
          outline: 2px solid white;
          outline-offset: 2px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .hero-swiper img,
          .swiper-progress-bar {
            animation: none;
          }
          
          .hero-swiper .swiper-button-prev,
          .hero-swiper .swiper-button-next,
          .hero-swiper .swiper-pagination-bullet {
            transition: none;
          }
        }
      `}</style>

      {/* Auto-play progress bar script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const swiper = document.querySelector('.hero-swiper').swiper;
            const progressBar = document.querySelector('.swiper-progress-bar');
            
            if (swiper && progressBar) {
              swiper.on('autoplayTimeLeft', function(s, time, progress) {
                progressBar.style.width = (progress * 100) + '%';
              });
              
              swiper.on('mouseenter', function() {
                document.querySelector('.hero-swiper').classList.add('autoplay-paused');
              });
              
              swiper.on('mouseleave', function() {
                document.querySelector('.hero-swiper').classList.remove('autoplay-paused');
              });
            }
          });
        `
      }} />
    </div>
  );
};

export default Banner;