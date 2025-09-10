/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "motion/react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { PropertyCard } from "../../components";
import { properties } from "../../data/properties.js";
import {
  Bath,
  Bed,
  CircleCheckBig,
  Compass,
  MapPinned,
  PhoneCall,
  Square,
} from "lucide-react";

const PropertiesSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "House / Villa", "Land / Plot"];

  const filteredProperties =
    activeTab === "All"
      ? properties
      : properties?.filter((property) => property.type === activeTab);

  return (
    <section className="py-20 bg-slate-50" id="properties">
      <div className="container">
        <div className="w-full">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Subtitle */}
            <motion.div
              className="flex items-center justify-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-0.5 bg-red-500"></div>
                <span className="text-red-500 font-medium text-lg">
                  Popular Properties
                </span>
                <div className="w-8 h-0.5 bg-red-500"></div>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-slate-800 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore Your Next Home Today
            </motion.h2>

            {/* Filter Tabs */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-red-500 text-white shadow-lg"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {tab}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Property Cards */}
          {filteredProperties?.map((property, index) => (
            <div key={property.id}>
              <div className="bg-slate-100 p-2 md:p-4 lg:p-6 mb-6 rounded-lg">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 py-2">
                  <div className="col-span-1 md:col-span-6 lg:col-span-6">
                    <Gallery
                      withCaption
                      options={{
                        arrowPrev: true,
                        arrowNext: true,
                        zoom: true,
                        close: true,
                        counter: true,
                        bgOpacity: 0.8,
                        padding: { top: 10, bottom: 10, left: 10, right: 10 },
                      }}
                    >
                      {property?.images?.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 rounded-lg">
                          {property?.images.map((img, imgIndex) => {
                            const isFirst = imgIndex === 0;
                            const isLastVisible = imgIndex === 2;
                            const remaining = property.images.length - 3;

                            return (
                              <Item
                                key={img.id}
                                original={img.original}
                                thumbnail={img.thumbnail}
                                width={img.width}
                                height={img.height}
                                caption={img.caption}
                              >
                                {({ ref, open }) =>
                                  imgIndex < 3 ? (
                                    <div
                                      ref={ref}
                                      onClick={open}
                                      className={`relative overflow-hidden rounded-lg cursor-pointer shadow-md 
                        ${
                          isFirst
                            ? "col-span-2 md:row-span-2 md:col-span-2 aspect-[4/3]"
                            : "aspect-[4/3]"
                        }`}
                                    >
                                      <img
                                        src={img.original}
                                        alt={img.caption}
                                        className="w-full h-full object-cover"
                                      />

                                      {/* Overlay on third image */}
                                      {isLastVisible && remaining > 0 && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-bold">
                                          +{remaining} Photos
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <span ref={ref} />
                                  )
                                }
                              </Item>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="h-full bg-slate-100 flex items-center justify-center rounded-md">
                          <h3 className="text-2xl font-bold">
                            No images to preview!
                          </h3>
                        </div>
                      )}
                    </Gallery>
                  </div>
                  <div className="col-span-1 md:col-span-6 lg:col-span-6">
                    {/* Title */}
                    <motion.h3
                      className="text-2xl font-bold text-slate-800 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {property.title}
                    </motion.h3>

                    <div className="flex flex-col space-y-1 xl:flex-row xl:items-center xl:justify-between">
                      {/* Location */}
                      <motion.div
                        className="flex items-center space-x-2 text-slate-600 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <MapPinned className="w-4 h-4 text-red-500" />
                        <span className="text-sm">{property.location}</span>
                      </motion.div>

                      <motion.a
                        href={property.mapUrl}
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
                      className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-4 border-t border-slate-200 mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {property.bedrooms > 0 && (
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Bed className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {property.bedrooms} Bedrooms
                          </span>
                        </div>
                      )}

                      {property.bathrooms > 0 && (
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Bath className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {property.bathrooms} Bathrooms
                          </span>
                        </div>
                      )}

                      {property.sqft > 0 && (
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Square className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {property.sqft} sq.ft
                          </span>
                        </div>
                      )}

                      {property.facing && (
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Compass className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {property.facing} Facing
                          </span>
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
                        {property.perSqft}
                      </div>
                    </motion.div>

                    <div className="flex flex-col xl:flex-row gap-4 mt-4">
                      {/* Video Button */}
                      {property.video !== "" && (
                        <motion.button
                          className="w-full bg-slate-300 hover:bg-slate-200 text-slate-700 font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-md cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          onClick={() => window.open(property.video, "_blank")}
                        >
                          Video
                        </motion.button>
                      )}

                      {/* Download PDF Button */}
                      {property.pdfName !== "" && (
                        <motion.button
                          className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-100 font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-md cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          onClick={() =>
                            window.open(
                              `/properties/${property.pdfName}.pdf`,
                              "_blank"
                            )
                          }
                        >
                          Download PDF
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
                <hr className="border-t border-slate-300 my-4" />
                <div className="w-full mb-4">
                  <motion.h3
                    className="text-2xl font-bold text-slate-800 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Find Your Property Details
                  </motion.h3>

                  {property.description.length > 0 &&
                    property.description.map((desc, descIndex) => (
                      <motion.p
                        key={descIndex}
                        className="text-md text-slate-700 max-w-5xl leading-relaxed indent-5 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {desc}
                      </motion.p>
                    ))}
                </div>

                {/* Highlights */}
                <div className="w-full">
                  {property.highlights.length > 0 && (
                    <motion.h3
                      className="text-xl font-bold text-emerald-600 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Highlights
                    </motion.h3>
                  )}

                  {property.highlights.length > 0 && (
                    <ul className="list-inside">
                      {property.highlights.map((highlight, hiIndex) => (
                        <motion.li
                          key={hiIndex}
                          className="flex items-center text-md text-slate-700 max-w-5xl leading-relaxed mb-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <CircleCheckBig className="w-4 h-4 inline-block mr-3 text-emerald-600" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Heading after first card */}
              {index === 0 && (
                <motion.h3
                  className="text-3xl font-bold text-slate-800 mb-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Landed Property @ Poonamallee
                </motion.h3>
              )}
            </div>
          ))}

          {/* Empty State */}
          {filteredProperties.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-slate-400 text-lg">
                No properties found for "{activeTab}" category.
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
