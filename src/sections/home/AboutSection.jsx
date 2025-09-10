/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { Phone } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute -top-8 left-[20%] md:-top-8 md:-left-8 z-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 border-l-4 border-red-500">
                <div className="text-left">
                  <div className="text-sm font-semibold text-slate-600 transform origin-center whitespace-nowrap">
                    Your Property,
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-1">
                    Our Priority
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern Luxury House"
                className="w-full h-[640px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.div
                className="flex items-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-0.5 bg-red-500"></div>
                  <h3 className="text-red-500 font-medium text-lg">About Us</h3>
                  <div className="w-8 h-0.5 bg-red-500"></div>
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Where Finding House
                <br />
                <span className="text-slate-600">Feels Like Home</span>
              </motion.h2>

              <motion.p
                className="text-slate-600 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Bluezone Realty is the division of Thanu Homes & Developers. It
                was founded in 2020.
              </motion.p>

              <motion.p
                className="text-slate-600 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                At Bluezone Realty, we believe a home is more than just walls
                and a roof — it’s the foundation of your future. With years of
                expertise in real estate development, we specialize in building
                modern, high-quality houses designed to meet the needs of
                today’s families. From thoughtfully planned designs to premium
                locations, every property we create reflects our commitment to
                comfort, style, and long-term value.
              </motion.p>

              <motion.p
                className="text-slate-600 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Whether you’re searching for your dream home or exploring
                investment opportunities, Bluezone Realty is here to guide you
                every step of the way. Our dedicated team ensures a seamless
                buying experience, combining trusted service with homes that are
                built to last.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.div
                className="text-right"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Phone className="w-6 h-6 text-white" />
                  </motion.div>
                  <a
                    href={`tel:+91${import.meta.env.VITE_BLUEZONE_MOBILE}`}
                    className="flex flex-col items-start"
                  >
                    <div className="text-sm text-slate-600 mb-1">
                      Call Us 24/7
                    </div>
                    <div className="text-2xl font-bold text-slate-800">
                      +91 {import.meta.env.VITE_BLUEZONE_MOBILE}
                    </div>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
