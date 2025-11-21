// Updated ContactSection with redirect after success

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
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.sender_email)) {
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

      toast.success("Message sent successfully!", { id: "send-message" });

      setFormData({
        sender_name: "",
        sender_mobile: "",
        sender_email: "",
        sender_message: "",
      });

      // Redirect to thank-you page
      window.location.href = "/thankyou";
    } catch (error) {
      toast.error("Failed to send message!", {
        id: "send-message",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" id="contact">
      {/* ... UI unchanged ... */}
    </section>
  );
};

export default ContactSection;
