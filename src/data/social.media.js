import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const socialLinks = [
  {
    icon: Facebook,
    link: import.meta.env.VITE_BLUEZONE_FACEBOOK,
    label: "Facebook",
  },
  {
    icon: Instagram,
    link: import.meta.env.VITE_BLUEZONE_INSTAGRAM,
    label: "Instagram",
  },
  // {
  //   icon: Linkedin,
  //   link: import.meta.env.VITE_BLUEZONE_LINKEDIN,
  //   label: "LinkedIn",
  // },
  {
    icon: Youtube,
    link: import.meta.env.VITE_BLUEZONE_YOUTUBE,
    label: "Youtube",
  },
];
