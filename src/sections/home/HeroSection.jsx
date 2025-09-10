/* eslint-disable no-unused-vars */
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${"https://ik.imagekit.io/bluezonerealty/landingpage/images/villa-in-mudichur/630235257O-1754651679423.jpg"}')`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            {/* Heading */}
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-sky-500">Discover</span>{" "}
                  <span>Your Future Home</span>
                  <span className="block mt-2 text-2xl md:text-3xl text-slate-200 font-medium">
                    Here & Now
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* Tagline List */}
            <AnimatePresence mode="wait">
              <motion.ul
                className="list-none space-y-2 text-base md:text-lg text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <li>
                  Bluezone Realty is dedicated to providing safety and comfort.
                </li>
                <li>
                  We design and build modern homes with attention to detail and
                  lasting comfort.
                </li>
                <li>
                  Our projects deliver complete value for your investment.
                </li>
                <li>Discover your future home with us today.</li>
              </motion.ul>
            </AnimatePresence>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                className="group bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/#properties")}
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.a
                href={`tel:+91${import.meta.env.VITE_BLUEZONE_MOBILE}`}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-md hover:shadow-lg transition-all duration-300"
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
    </section>
  );
};

export default HeroSection;
  