import React from 'react';
import venue_map from '../../assets/venue_map.png';
import { motion } from "motion/react";

const VenueMap = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 0.2,
          ease: "easeInOut",
        }}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 noto-serif-tc-regular">展場地圖</h2>
        </div>
        <div className="venue-map-container">
          <img 
            src={venue_map} 
            alt="場地地圖" 
            className="venue-map mx-auto rounded-lg shadow-lg"
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '80vh'
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default VenueMap;
