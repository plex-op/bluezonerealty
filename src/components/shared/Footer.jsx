import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Brand } from "..";
import { NavLink } from "react-router-dom";
import { socialLinks } from "../../data/social.media.js";
import { quickLinks } from "../../data/links.js";

const Footer = () => {
  const MotionNavLink = motion.create(NavLink);

  return (
    <footer className="bg-indigo-950 text-white relative overflow-hidden">
      <div className="relative z-10 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Brand />

              <motion.p
                className="text-slate-300 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Bluezone Realty is dedicated to providing safety and comfort. We
                design and build modern homes with attention to detail and
                lasting comfort. Our projects deliver complete value for your
                investment. Discover your future home with us today.
              </motion.p>

              <motion.div
                className="flex items-center space-x-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <div className="space-y-4">
                {quickLinks.map((item, index) => (
                  <MotionNavLink
                    key={index}
                    to={item.link}
                    className="flex items-center space-x-3 text-slate-300 hover:text-red-500 transition-colors duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform duration-200" />
                    <span>{item.label}</span>
                  </MotionNavLink>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="space-y-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Reach Us</h3>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <a
                  href={`tel:+91${import.meta.env.VITE_BLUEZONE_MOBILE}`}
                  className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>+91 {import.meta.env.VITE_BLUEZONE_MOBILE}</span>
                </a>

                <a
                  href={`mailto:${import.meta.env.VITE_BLUEZONE_EMAIL}`}
                  className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{import.meta.env.VITE_BLUEZONE_EMAIL}</span>
                </a>

                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <address>
                    <p>No. 110, Rajas Garden,</p>
                    <p>Near Vanagaram Tollgate,</p>
                    <p>Vanagaram, Chennai-600116.</p>
                  </address>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-slate-600 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="text-slate-400 text-sm text-center">
              © 2025 THANU Homes & Developers. All rights reserved.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
