/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  MapPinned,
  Heart,
  ExternalLink,
  Video,
} from "lucide-react";
import { Item } from "react-photoswipe-gallery";

const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  sqft,
  perSqft,
  thumbnailUrl,
  images = [],
  videos = [],
  forSale = true,
  mapUrl,
  referLink,
  className = "",
}) => {
  let openFirst;
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${className}`}
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {/* Top-Right Icons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 z-30">
          {/* Redirect */}
          <button
            onClick={() => window.open(referLink, "_blank")}
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition cursor-pointer"
          >
            <ExternalLink className="w-5 h-5 text-emerald-600" />
          </button>

          {/* Video */}
          {videos.length > 0 && (
            <button
              onClick={() => window.open(videos[0].link, "_blank")}
              className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition cursor-pointer"
            >
              <Video className="w-5 h-5 text-rose-600" />
            </button>
          )}
        </div>

        <motion.img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* For Sale Badge */}
        {forSale && (
          <motion.div
            className="absolute top-4 left-4 bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>For Sale</span>
          </motion.div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <motion.h3
          className="text-2xl font-bold text-slate-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>

        <div className="flex flex-col space-y-1 xl:flex-row xl:items-center xl:justify-between">
          {/* Location */}
          <motion.div
            className="flex items-center space-x-2 text-slate-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-sm">{location}</span>
          </motion.div>

          <motion.a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-slate-600 mb-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <MapPinned className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-emerald-600">
              Open in Google Maps
            </span>
          </motion.a>
        </div>

        {/* Property Details */}
        <motion.div
          className="grid grid-cols-2 gap-4 py-4 border-t border-slate-200 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {bedrooms > 0 && (
            <div className="flex items-center space-x-2 text-slate-600">
              <Bed className="w-4 h-4" />
              <span className="text-sm font-medium">{bedrooms} Bedrooms</span>
            </div>
          )}

          {bathrooms > 0 && (
            <div className="flex items-center space-x-2 text-slate-600">
              <Bath className="w-4 h-4" />
              <span className="text-sm font-medium">{bathrooms} Bathrooms</span>
            </div>
          )}

          {sqft > 0 && (
            <div className="flex items-center space-x-2 text-slate-600">
              <Square className="w-4 h-4" />
              <span className="text-sm font-medium">{sqft} sq.ft</span>
            </div>
          )}
        </motion.div>

        {/* Price */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-3xl font-bold text-slate-800">
            ₹{price}
            <span className="text-sm text-slate-400 font-medium">
              {" "}
              {perSqft}
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-4 mt-4">
          {images.map((image, idx) => (
            <Item
              key={idx}
              original={image.original}
              thumbnail={image.thumbnail}
              width={image.width}
              height={image.height}
              caption={image.caption}
            >
              {({ ref, open }) => {
                if (idx === 0) openFirst = open;
                return <span ref={ref} style={{ display: "none" }} />;
              }}
            </Item>
          ))}
          {/* Explore Button */}
          <motion.button
            className="w-full bg-slate-300 hover:bg-slate-200 text-slate-700 font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-md cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            // onClick={() => window.open(referLink, "_blank")}
            onClick={() => openFirst && openFirst()}
          >
            Photos
          </motion.button>

          {/* Download PDF Button */}
          <motion.button
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-100 font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-md cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            onClick={() => window.open(`/properties/${id}.pdf`, "_blank")}
          >
            Download PDF
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
