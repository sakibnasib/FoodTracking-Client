
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const slides = [
//   {
//     id: 1,
//     image: "https://i.ibb.co.com/nMfwsgvJ/flat-lay-vegetables-arrangement-dark-background-with-copy-space.jpg",
//     title: "Fresh Picks, Before They’re Gone!",
//   },
//   {
//     id: 2,
//     image: "https://i.ibb.co.com/p6cT1cnn/bright-vegetables-cut-chicken-plate.jpg",
//     title: "Track What’s Fresh — and What’s Not",
//   },
//   {
//     id: 3,
//     image: "https://i.ibb.co/VWxLpd9z/2903540.jpg",
//     title: "Stay Ahead of Expiry Dates",
//     description:
//       "Looking for a roommate, renting out a room, or teaming up to find a new place?",
//   },
// ];

// const Banner = () => {
//   return (
//     <div >
//       <Swiper
//         modules={[Autoplay, Navigation]}
//         autoplay={{ delay: 3000 }}
//         navigation
//         loop
//         className="px-4"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0  bg-opacity-10 flex flex-col items-center justify-center text-white text-center px-4">
//                 <h2 className="text-2xl md:text-4xl font-bold drop-shadow">
//                   {slide.title}
//                 </h2>
//                 <p className="mt-3 text-sm md:text-lg max-w-xl drop-shadow">
//                   {slide.description}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;




import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/0j0bks6q/batch-cooking-arrangement-with-copy-space.jpg",
    title: "Fresh Picks, Before They're Gone!",
    description: "Discover the freshest ingredients delivered to your doorstep",
    cta: "Shop Now",
    badge: "Limited Time"
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/fdzpfrkG/tasty-batch-food-cooked-with-empty-notebook.jpg",
    title: "Track What's Fresh — and What's Not",
    description: "Smart expiry tracking to keep your kitchen organized",
    cta: "Learn More",
    badge: "New Feature"
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/nMfwsgvJ/flat-lay-vegetables-arrangement-dark-background-with-copy-space.jpg",
    title: "Stay Ahead of Expiry Dates",
    description: "Never waste food again with our intelligent reminder system",
    cta: "Get Started",
    badge: "Popular"
  },
];

const Banner = () => {
  return (
    <div className="relative">
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
        }}
        loop
        className="hero-swiper"
        speed={800}
        effect="fade"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] md:h-[500px] lg:h-[500px]  overflow-hidden mx-4  shadow-2xl">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-fit transition-transform duration-700 hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
              
              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-8 md:px-12 lg:px-16">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  {slide.badge}
                </div>
                
                {/* Title */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-2xl">
                  {slide.title}
                </h2>
                
                {/* Description */}
                <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-gray-200 leading-relaxed drop-shadow-lg">
                  {slide.description}
                </p>
                
                {/* Call to Action Button */}
                <button className="group relative inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transform">
                  <span>{slide.cta}</span>
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"></div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      
      {/* Inline Styles */}
      <style jsx>{`
        .hero-swiper {
          position: relative;
        }

        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
          margin: 0 4px;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        .hero-swiper .swiper-pagination {
          bottom: 20px;
          z-index: 10;
        }

        .hero-swiper .swiper-button-prev,
        .hero-swiper .swiper-button-next {
          color: white !important;
          background: rgba(255, 255, 255, 0.2) !important;
          backdrop-filter: blur(10px) !important;
          width: 48px !important;
          height: 48px !important;
          border-radius: 50% !important;
          border: 1px solid rgba(255, 255, 255, 0.3) !important;
          transition: all 0.3s ease !important;
          z-index: 10;
        }

        .hero-swiper .swiper-button-prev:hover,
        .hero-swiper .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          transform: scale(1.1);
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.3);
        }

        .hero-swiper .swiper-button-prev::after,
        .hero-swiper .swiper-button-next::after {
          font-size: 18px !important;
          font-weight: bold !important;
        }

        /* Slide animations */
        .hero-swiper .swiper-slide {
          transition: transform 0.3s ease;
        }

        .hero-swiper .swiper-slide-active {
          transform: scale(1.02);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-swiper .swiper-button-prev,
          .hero-swiper .swiper-button-next {
            width: 40px !important;
            height: 40px !important;
          }
          
          .hero-swiper .swiper-button-prev::after,
          .hero-swiper .swiper-button-next::after {
            font-size: 16px !important;
          }
          
          .hero-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }

        /* Loading animation for images */
        .hero-swiper img {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.1);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Hover effects for interactive elements */
        .hero-swiper .swiper-slide:hover img {
          transform: scale(1.05);
        }

        /* Custom scrollbar for webkit browsers */
        .hero-swiper::-webkit-scrollbar {
          display: none;
        }

        /* Ensure proper z-index stacking */
        .hero-swiper .swiper-wrapper {
          z-index: 1;
        }

        .hero-swiper .swiper-slide {
          z-index: 2;
        }

        /* Accessibility improvements */
        .hero-swiper .swiper-button-prev:focus,
        .hero-swiper .swiper-button-next:focus {
          outline: 2px solid white;
          outline-offset: 2px;
        }

        .hero-swiper .swiper-pagination-bullet:focus {
          outline: 2px solid white;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default Banner;