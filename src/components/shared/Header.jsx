/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone, Mail, Menu, X, PhoneCall } from "lucide-react";
import { Brand } from "..";
import { NavLink, useLocation } from "react-router-dom";
import { socialLinks } from "../../data/social.media.js";
import { navigationLinks } from "../../data/links.js";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indigo-950 backdrop-blur-sm border-b border-indigo-950">
      <div className="bg-slate-900 py-2 hidden md:block">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={`mailto:${import.meta.env.VITE_BLUEZONE_EMAIL}`}
                  className="flex items-center space-x-2 text-slate-300"
                >
                  <Mail className="w-4 h-4 text-rose-500" />
                  <span>{import.meta.env.VITE_BLUEZONE_EMAIL}</span>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a
                  href={`tel:+91${import.meta.env.VITE_BLUEZONE_MOBILE}`}
                  className="flex items-center space-x-2 text-slate-300"
                >
                  <Phone className="w-4 h-4 text-rose-500" />
                  <span>+91 {import.meta.env.VITE_BLUEZONE_MOBILE}</span>
                </a>
              </motion.div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav>
        <div className="container">
          <div className="flex justify-between items-center h-24">
            <Brand />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((item, index) => {
                const isActive =
                  item.link === "/" && location.hash === ""
                    ? location.pathname === "/"
                    : location.hash === "#" + item.link.split("#")[1];

                return (
                  <motion.div
                    key={item.label}
                    className="relative group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <NavLink
                      to={item.link}
                      className={`flex items-center space-x-1 transition-colors duration-200 py-2 ${
                        isActive
                          ? "text-rose-500 font-semibold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                    </NavLink>
                  </motion.div>
                );
              })}
            </div>

            {/* Call Button and Menu */}
            <div className="flex items-center space-x-4">
              {/* Call Button */}
              <motion.a
                href={`tel:+91${import.meta.env.VITE_BLUEZONE_MOBILE}`}
                className="hidden md:inline-flex items-center justify-center px-6 py-2 text-md font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                +91 {import.meta.env.VITE_BLUEZONE_MOBILE}
              </motion.a>

              <motion.button
                className="lg:hidden text-slate-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-20 md:top-29 left-0 right-0 lg:hidden origin-top overflow-hidden bg-indigo-950 z-40"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          >
            <nav className="p-5 pb-3 space-y-1 text-center border-t border-indigo-900">
              {navigationLinks.map((item) => {
                const isActive =
                  item.link === "/" && location.hash === ""
                    ? location.pathname === "/"
                    : location.hash === "#" + item.link.split("#")[1];
                return (
                  <NavLink
                    key={item.label}
                    to={item.link}
                    className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                      isActive
                        ? " text-rose-500 font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            <div className="p-5 border-t border-indigo-900">
              <div className="space-y-2">
                <a
                  href={`mailto:${import.meta.env.VITE_BLUEZONE_EMAIL}`}
                  className="flex items-center space-x-2 text-slate-300"
                >
                  <Mail className="w-4 h-4 text-rose-500" />
                  <span className="text-sm">
                    {import.meta.env.VITE_BLUEZONE_EMAIL}
                  </span>
                </a>
                <a
                  href={`tel:+91${import.meta.env.VITE_BLUEZONE_MOBILE}`}
                  className="flex items-center space-x-2 text-slate-300"
                >
                  <Phone className="w-4 h-4 text-rose-500" />
                  <span className="text-sm">
                    +91 {import.meta.env.VITE_BLUEZONE_MOBILE}
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
