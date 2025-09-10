import { lazy } from "react";

export const HeroSection = lazy(() => import("./home/HeroSection"));
export const AboutSection = lazy(() => import("./home/AboutSection"));
export const PropertiesSection = lazy(() => import("./home/PropertiesSection"));
export const QueriesSection = lazy(() => import("./home/QueriesSection"));
export const ContactSection = lazy(() => import("./home/ContactSection"));
