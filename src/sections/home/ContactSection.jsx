/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send, MessageSquare, User } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_mobile: "",
    sender_email: "",
    sender_message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // console.log({ formData, isSubmitting });

  const contactInfo = [
    {
      id: "address",
      icon: MapPin,
      title: "Office Address",
      addressLine1: "No. 110, Rajas Garden,",
      addressLine2: "Near Vanagaram Tollgate,",
      addressLine3: "Vanagaram, Chennai-600116.",
      color: "text-red-500",
    },
    {
      id: "phone",
      icon: Phone,
      title: "Phone Number",
      primary: `+91 ${import.meta.env.VITE_BLUEZONE_MOBILE}`,
      secondary: `+91 ${import.meta.env.VITE_BLUEZONE_MOBILE2}`,
      color: "text-blue-500",
    },
    {
      id: "email",
      icon: Mail,
      title: "Email Address",
      primary: `${import.meta.env.VITE_BLUEZONE_EMAIL}`,
      secondary: `${import.meta.env.VITE_BLUEZONE_EMAIL2}`,
      color: "text-green-500",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.sender_name.trim()) {
      toast.error("Name is Required!");
      return false;
    }
    if (formData.sender_name.length < 3) {
      toast.error("Name must be at least 3 Characters!");
      return false;
    }
    if (!formData.sender_mobile.trim()) {
      toast.error("Mobile Number is Required!");
      return false;
    }
    if (!/^[0-9]{10}$/.test(formData.sender_mobile)) {
      toast.error("Invalid Mobile Number!");
      return false;
    }
    if (!formData.sender_email.trim()) {
      toast.error("Email is Required!");
      return false;
    }
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.sender_email)
    ) {
      toast.error("Invalid Email Address");
      return false;
    }
    if (!formData.sender_message.trim()) {
      toast.error("Message is Required!");
      return false;
    }
    if (formData.sender_message.length < 4) {
      toast.error("Message must be at least 4 Characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      sender_name: formData.sender_name,
      sender_email: formData.sender_email,
      sender_mobile: formData.sender_mobile,
      sender_message: formData.sender_message,
      recipient_name: "Bluezone Realty",
    };

    try {
      toast.loading("Sending your message...", { id: "send-message" });

      const result = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
        limitRate: {
          id: "landing-page-form",
          throttle: 60000,
        },
      });

      // console.log(result); // {status: 200, text: 'OK'} || {status: 429, text: 'Too Many Requests'}

      toast.success("Message sent successfully!", { id: "send-message" });

      setFormData({
        sender_name: "",
        sender_mobile: "",
        sender_email: "",
        sender_message: "",
      });
    } catch (error) {
      // console.error(error);

      toast.error("Failed to send message!", {
        id: "send-message",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" id="contact">
      <div className="relative z-10 container">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-8 h-0.5 bg-rose-500"></div>
            <Phone className="w-6 h-6 text-rose-500" />
            <span className="text-rose-500 font-semibold text-lg uppercase tracking-wide">
              Contact Us
            </span>
            <div className="w-8 h-0.5 bg-rose-500"></div>
          </motion.div>

          {/* <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let’s Talk About <br />
            <span className="text-rose-500">Your Property Needs</span>
          </motion.h2> */}

          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 mb-8"
          >
            Buying, selling, or investing—whatever your need, we’re here to
            guide you. Reach out and let’s find the right property together.
          </motion.p> */}
        </div>

        {/* Contact Form Section */}
        <motion.div
          className="grid grid-cols-12 gap-6 items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Left Side - Image */}
          <div className="h-full col-span-12 lg:col-span-6 xl:col-span-7">
            <div className="w-full h-full overflow-hidden">
              <motion.img
                src={
                  "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg"
                }
                alt="Contact Us"
                className="w-full h-full object-cover rounded-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <motion.div
              className="w-full bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.h3
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Get In Touch
              </motion.h3>

              <form onSubmit={handleSubmit} ref={formRef} className="space-y-6">
                {/* Full Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="sender_name"
                      value={formData.sender_name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </motion.div>

                {/* Phone Number */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="sender_mobile"
                      value={formData.sender_mobile}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </motion.div>

                {/* Email Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="sender_email"
                      value={formData.sender_email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="sender_message"
                      value={formData.sender_message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Enter your message"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 resize-none"
                    ></textarea>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-rose-500 text-white px-6 py-4 rounded-lg font-medium text-lg hover:bg-rose-600 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12 mt-12"
          variants={itemVariants}
        >
          {contactInfo.map((info) => (
            <motion.div
              key={info?.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
                <div className={`p-3 rounded-full bg-gray-50 ${info?.color}`}>
                  <info.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info?.title}
                  </h3>
                  {info?.primary && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {info?.primary}
                    </p>
                  )}
                  {info?.secondary && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {info?.secondary}
                    </p>
                  )}
                  {info?.addressLine1 && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {info?.addressLine1}
                    </p>
                  )}
                  {info?.addressLine2 && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {info?.addressLine2}
                    </p>
                  )}
                  {info?.addressLine3 && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {info?.addressLine3}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
