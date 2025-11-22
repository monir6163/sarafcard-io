"use client";
import { CardsImage } from "@/lib/CardsImage";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";

export default function SlickSliderCards() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {CardsImage.map((cardImage, i) => {
          return (
            <motion.div
              key={i}
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
                className="w-full relative overflow-visible py-2"
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
                  src={cardImage.src.src}
                  alt={cardImage.alt}
                  className="w-full h-full drop-shadow-2xl relative z-20"
                  width={cardImage.src.width}
                  height={cardImage.src.height}
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
          );
        })}
      </Slider>
    </div>
  );
}
