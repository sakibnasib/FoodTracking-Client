
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/nMfwsgvJ/flat-lay-vegetables-arrangement-dark-background-with-copy-space.jpg",
    title: "The Best & Fastest Roommate Finder.",
    description:
      "Looking for a roommate, renting out a room, or teaming up to find a new place?",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/p6cT1cnn/bright-vegetables-cut-chicken-plate.jpg",
    title: "The roommate finder you can trust.",
    description:
      "Looking for a roommate, renting out a room, or teaming up to find a new place?",
  },
  {
    id: 3,
    image: "https://i.ibb.co/VWxLpd9z/2903540.jpg",
    title: "Find roommates with ease & confidence.",
    description:
      "Looking for a roommate, renting out a room, or teaming up to find a new place?",
  },
];

const Banner = () => {
  return (
    <div >
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        navigation
        loop
        className="px-4"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-10 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-2xl md:text-4xl font-bold drop-shadow">
                  {slide.title}
                </h2>
                <p className="mt-3 text-sm md:text-lg max-w-xl drop-shadow">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;