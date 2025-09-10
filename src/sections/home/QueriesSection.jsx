/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import { MessageCircleQuestionMark, PhoneCall } from "lucide-react";

const QueriesSection = () => {
  return (
    <section
      className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat -z-0"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 to-indigo-950/30"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-3 mb-6"
        >
          <div className="w-8 h-0.5 bg-rose-500"></div>
          <MessageCircleQuestionMark className="w-6 h-6 text-rose-500" />
          <span className="text-rose-500 font-semibold text-lg uppercase tracking-wide">
            Queries
          </span>
          <div className="w-8 h-0.5 bg-rose-500"></div>
        </motion.div>

        {/* Main CTA */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100 leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Have Any Queries? <br />
          <span className="text-rose-500">Call Us Today</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-200 mb-8"
        >
          Our team is here to answer all your real estate questions. Whether
          you’re buying, selling, or investing, we’ll guide you every step of
          the way with expert advice and trusted insights.
        </motion.p>

        {/* Call Button */}
        <motion.a
          href={`tel:+91${import.meta.env.VITE_BLUEZONE_MOBILE}`}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-rose-500 hover:bg-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <PhoneCall className="w-5 h-5 mr-2" />
          +91 {import.meta.env.VITE_BLUEZONE_MOBILE}
        </motion.a>
      </div>
    </section>
  );
};

export default QueriesSection;
