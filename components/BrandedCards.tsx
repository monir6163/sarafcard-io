import { motion } from "framer-motion";
import React from "react";
import SlickSliderCards from "./SlickSliderCards";

const BrandedCards: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      className="relative w-full py-12"
    >
      <SlickSliderCards />
      {/* <div className="relative flex flex-col lg:flex-row justify-center items-center gap-3 sm:gap-8 lg:gap-12">
        <MobileBannerCards />
        // desktop view
        <div className="hidden lg:flex lg:flex-row justify-center items-center gap-3 lg:gap-12">
          <CardsImage />
        </div>
      </div> */}
    </motion.div>
  );
};

export default BrandedCards;
