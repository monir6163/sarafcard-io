import { motion } from "framer-motion";
import React from "react";

interface LogoComponentProps {
  variant?: "image" | "text";
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const LogoComponent: React.FC<LogoComponentProps> = ({
  variant = "text",
  size = "md",
  orientation = "horizontal",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-16",
  };

  if (variant === "image") {
    const logoSrc =
      orientation === "horizontal"
        ? "/assets/logos/logo-horizontal.png"
        : "/assets/logos/logo-vertical.png";

    return (
      <motion.div
        className={`flex items-center ${className}`}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={logoSrc}
          alt="SarafCard Logo"
          className={`${sizeClasses[size]} w-auto object-contain`}
        />
      </motion.div>
    );
  }

  // Text version (current implementation)
  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <div
        className={`${sizeClasses[size]} aspect-square bg-silver rounded-lg flex items-center justify-center mr-3`}
      >
        <span className="text-matte-black font-bold text-xl">S</span>
      </div>
      <span className="text-soft-white font-space-grotesk font-bold text-xl">
        SarafCard
      </span>
    </motion.div>
  );
};

export default LogoComponent;
