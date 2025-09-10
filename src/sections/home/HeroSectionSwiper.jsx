/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
const HeroSectionSwiper = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();

  const heroSlides = [
    {
      id: 1,
      backgroundImage:
        "https://images.pexels.com/photos/144632/pexels-photo-144632.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Where Lifestyle",
      subtitle: "Meets Your ",
      highlight: "Home",
      description:
        "Find your perfect property with our expert real estate solutions. We provide comprehensive services to help you discover and secure your dream home.",
      stats: [
        { value: "250+", label: "Properties Sold" },
        { value: "15+", label: "Years Experience" },
        { value: "99%", label: "Client Satisfaction" },
      ],
    },
    {
      id: 2,
      backgroundImage:
        "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Bringing Families",
      subtitle: "Closer To",
      highlight: "Dreams",
      description:
        "Experience the finest in luxury real estate. Our premium properties offer unmatched elegance, comfort, and sophistication for discerning clients.",
      stats: [
        { value: "150+", label: "Luxury Homes" },
        { value: "20+", label: "Prime Locations" },
        { value: "100%", label: "Premium Service" },
      ],
    },
    {
      id: 3,
      backgroundImage:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Homes Crafted",
      subtitle: "For Modern",
      highlight: "Living",
      description:
        "Discover cutting-edge architectural marvels that blend innovation with functionality. Our modern properties represent the future of urban living.",
      stats: [
        { value: "80+", label: "Modern Designs" },
        { value: "10+", label: "Award Winning" },
        { value: "95%", label: "Energy Efficient" },
      ],
    },
    {
      id: 4,
      backgroundImage:
        "https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Find Comfort",
      subtitle: "In Every",
      highlight: "Corner",
      description:
        "Maximize your returns with strategic real estate investments. Our expert team identifies high-potential properties for long-term growth.",
      stats: [
        { value: "300+", label: "Successful Deals" },
        { value: "25%", label: "Average ROI" },
        { value: "500+", label: "Happy Investors" },
      ],
    },
  ];

  const currentSlide = heroSlides[activeSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Swiper Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="w-full h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${slide.backgroundImage}')`,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={() => swiperInstance?.slidePrev()}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => swiperInstance?.slideNext()}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="block">{currentSlide.title}</span>
                    <span className="block mt-2">
                      {currentSlide.subtitle}{" "}
                      <span className="text-rose-500">
                        {currentSlide.highlight}
                      </span>
                    </span>
                  </h1>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${activeSlide}`}
                  className="text-md md:text-xl text-slate-300 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {currentSlide.description}
                </motion.p>
              </AnimatePresence>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="group bg-rose-500 hover:bg-rose-600 text-white px-5 py-3 rounded-full font-semibold hidden md:flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/#properties")}
                >
                  <span>Explore Properties</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.a
                  href={`tel:+91${import.meta.env.VITE_BLUEZONE_MOBILE}`}
                  className="w-50 inline-flex items-center justify-center md:hidden px-6 py-2 text-md font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  +91 {import.meta.env.VITE_BLUEZONE_MOBILE}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <motion.div
          className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperInstance?.slideToLoop(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "bg-rose-500 scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionSwiper;
