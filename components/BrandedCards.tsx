import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import MasterCardBlack from "../public/assets/cards/sarafcard-mastercard-black.png";
import MasterCardgrey from "../public/assets/cards/sarafcard-mastercard-grey.png";
import SarafcardSapp from "../public/assets/cards/sarafcard-sapphire.png";
import VisaBlue from "../public/assets/cards/sarafcard-visa-blue.png";
import VisaGreen from "../public/assets/cards/sarafcard-visa-grey.png";

const BrandedCards: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-6xl mx-auto px-4 py-12"
    >
      <div className="relative flex flex-col lg:flex-row justify-center items-center gap-3 sm:gap-8 lg:gap-12">
        {/* Mobile & Tablet: First Row */}
        <div className="flex flex-row justify-center items-center gap-3 lg:hidden">
          {/* MasterCard Black Card */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.08,
              z: 100,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Card Container */}
            <motion.div
              className="w-40 sm:w-44 aspect-[1.586/1] relative overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-25deg)",
              }}
            >
              {/* Galaxy Background Layer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Premium Card Image */}
              <Image
                src={MasterCardBlack.src}
                alt="SarafCard MasterCard Black"
                className="w-full h-full object-contain drop-shadow-2xl relative z-20"
                height={500}
                width={300}
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                }}
              />

              {/* Premium Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 rounded-3xl"
                animate={{ x: [-400, 400] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>

            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 py-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(239, 68, 68, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* VISA Blue Card */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.08,
              z: 100,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {/* Card Container */}
            <motion.div
              className="w-40 sm:w-44 aspect-[1.586/1] relative overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-15deg)",
              }}
            >
              {/* Galaxy Background Layer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Premium Card Image */}
              <Image
                src={VisaBlue.src}
                alt="SarafCard VISA Blue"
                height={500}
                width={300}
                className="w-full h-full object-contain drop-shadow-2xl relative z-20"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                }}
              />

              {/* Premium Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 rounded-3xl"
                animate={{ x: [-400, 400] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                  delay: 0.5,
                }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>

            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 py-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </div>

        {/* Mobile & Tablet: Second Row */}
        <div className="flex flex-row justify-center items-center gap-3 lg:hidden">
          {/* VISA Green Card */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.08,
              z: 100,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Card Container */}
            <motion.div
              className="w-40 sm:w-44 aspect-[1.586/1] relative overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(15deg)",
              }}
            >
              {/* Galaxy Background Layer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Premium Card Image */}
              <Image
                src={VisaGreen.src}
                alt="SarafCard VISA Green"
                height={500}
                width={300}
                className="w-full h-full object-contain drop-shadow-2xl relative z-20"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                }}
              />

              {/* Premium Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 rounded-3xl"
                animate={{ x: [-400, 400] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                  delay: 1,
                }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>

            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 py-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(34, 197, 94, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          {/* MasterCard Grey Card */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.08,
              z: 100,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {/* Card Container */}
            <motion.div
              className="w-40 sm:w-44 aspect-[1.586/1] relative overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(25deg)",
              }}
            >
              {/* Galaxy Background Layer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Premium Card Image */}
              <Image
                src={MasterCardgrey.src}
                alt="SarafCard MasterCard Grey"
                height={500}
                width={300}
                className="w-full h-full object-contain drop-shadow-2xl relative z-20"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                }}
              />

              {/* Premium Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 rounded-3xl"
                animate={{ x: [-400, 400] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                  delay: 1.5,
                }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>

            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 py-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(107, 114, 128, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
        </div>

        {/* Mobile & Tablet: Second Row */}
        <div className="flex flex-row justify-center items-center gap-3 lg:hidden">
          {/* MasterCard blue Card */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.08,
              z: 100,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {/* Card Container */}
            <motion.div
              className="w-40 sm:w-44 aspect-[1.586/1] relative overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(25deg)",
              }}
            >
              {/* Galaxy Background Layer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Premium Card Image */}
              <Image
                src={SarafcardSapp.src}
                alt="SarafCard MasterCard Grey"
                height={500}
                width={300}
                className="w-full h-full object-contain drop-shadow-2xl relative z-20"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                }}
              />

              {/* Premium Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 rounded-3xl"
                animate={{ x: [-400, 400] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                  delay: 1.5,
                }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>

            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 py-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(107, 114, 128, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
        </div>

        {/* Desktop: All cards in one row (hidden on mobile and tablet) */}
        <div className="hidden lg:flex lg:flex-row justify-center items-center gap-3 lg:gap-12">
          {/* MasterCard Black Card */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.08,
              z: 100,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {/* Card Container */}
            <motion.div
              className="w-24 sm:w-48 lg:w-56 aspect-[1.586/1] relative overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-25deg)",
              }}
            >
              {/* Galaxy Background Layer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Premium Card Image */}
              <Image
                src={MasterCardBlack.src}
                alt="SarafCard MasterCard Black"
                className="w-full h-full object-contain drop-shadow-2xl relative z-20"
                height={500}
                width={300}
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                }}
              />

              {/* Premium Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 rounded-3xl"
                animate={{ x: [-400, 400] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>

            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 py-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(239, 68, 68, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* VISA Blue Card */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.08,
              z: 100,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {/* Card Container */}
            <motion.div
              className="w-24 sm:w-48 lg:w-56 aspect-[1.586/1] relative overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(-15deg)",
              }}
            >
              {/* Galaxy Background Layer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Premium Card Image */}
              <Image
                src={VisaBlue.src}
                alt="SarafCard VISA Blue"
                height={500}
                width={300}
                className="w-full h-full object-contain drop-shadow-2xl relative z-20"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                }}
              />

              {/* Premium Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 rounded-3xl"
                animate={{ x: [-400, 400] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                  delay: 0.5,
                }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>

            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 py-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          {/* VISA Green Card */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.08,
              z: 100,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Card Container */}
            <motion.div
              className="w-24 sm:w-48 lg:w-56 aspect-[1.586/1] relative overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(15deg)",
              }}
            >
              {/* Galaxy Background Layer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Premium Card Image */}
              <Image
                src={VisaGreen.src}
                alt="SarafCard VISA Green"
                height={500}
                width={300}
                className="w-full h-full object-contain drop-shadow-2xl relative z-20"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                }}
              />

              {/* Premium Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 rounded-3xl"
                animate={{ x: [-400, 400] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                  delay: 1,
                }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>

            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 py-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(34, 197, 94, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          {/* MasterCard Grey Card */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.08,
              z: 100,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {/* Card Container */}
            <motion.div
              className="w-24 sm:w-48 lg:w-56 aspect-[1.586/1] relative overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(25deg)",
              }}
            >
              {/* Galaxy Background Layer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Premium Card Image */}
              <Image
                src={MasterCardgrey.src}
                alt="SarafCard MasterCard Grey"
                height={500}
                width={300}
                className="w-full h-full object-contain drop-shadow-2xl relative z-20"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                }}
              />

              {/* Premium Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 rounded-3xl"
                animate={{ x: [-400, 400] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                  delay: 1.5,
                }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>

            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 py-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(107, 114, 128, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>

          {/* blue */}
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{
              rotateY: 0,
              rotateX: 0,
              scale: 1.08,
              z: 100,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {/* Card Container */}
            <motion.div
              className="w-24 sm:w-48 lg:w-56 aspect-[1.586/1] relative overflow-visible"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(25deg)",
              }}
            >
              {/* Galaxy Background Layer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.8) 70%)",
                  backdropFilter: "blur(10px)",
                }}
              />

              {/* Premium Card Image */}
              <Image
                src={SarafcardSapp.src}
                alt="SarafCard MasterCard Grey"
                height={500}
                width={300}
                className="w-full h-full object-contain drop-shadow-2xl relative z-20"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))",
                }}
              />

              {/* Premium Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 rounded-3xl"
                animate={{ x: [-400, 400] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                  delay: 1.5,
                }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>

            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-2xl -z-10 py-8"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(107, 114, 128, 0.4) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandedCards;
