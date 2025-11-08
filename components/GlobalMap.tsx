import React from 'react';
import { motion } from 'framer-motion';

const GlobalMap: React.FC = () => {
  // Sample coordinates for major countries/regions (simplified for demo)
  const countryStars = [
    // North America
    { x: 15, y: 25, country: 'USA' },
    { x: 12, y: 20, country: 'Canada' },
    { x: 18, y: 35, country: 'Mexico' },
    
    // South America
    { x: 25, y: 55, country: 'Brazil' },
    { x: 22, y: 50, country: 'Argentina' },
    { x: 20, y: 45, country: 'Colombia' },
    
    // Europe
    { x: 50, y: 20, country: 'UK' },
    { x: 52, y: 22, country: 'France' },
    { x: 54, y: 20, country: 'Germany' },
    { x: 56, y: 18, country: 'Sweden' },
    { x: 58, y: 25, country: 'Italy' },
    { x: 60, y: 22, country: 'Poland' },
    { x: 65, y: 18, country: 'Russia' },
    
    // Asia
    { x: 75, y: 30, country: 'China' },
    { x: 80, y: 25, country: 'Japan' },
    { x: 72, y: 35, country: 'India' },
    { x: 68, y: 28, country: 'Kazakhstan' },
    { x: 78, y: 40, country: 'Thailand' },
    { x: 82, y: 45, country: 'Indonesia' },
    
    // Middle East
    { x: 62, y: 32, country: 'UAE' },
    { x: 60, y: 30, country: 'Saudi Arabia' },
    { x: 58, y: 28, country: 'Turkey' },
    
    // Africa
    { x: 52, y: 45, country: 'South Africa' },
    { x: 48, y: 35, country: 'Nigeria' },
    { x: 55, y: 38, country: 'Kenya' },
    { x: 50, y: 32, country: 'Egypt' },
    
    // Oceania
    { x: 85, y: 55, country: 'Australia' },
    { x: 88, y: 48, country: 'New Zealand' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-silver/5 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <svg
        viewBox="0 0 100 60"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 20px rgba(192, 192, 192, 0.1))' }}
      >
        {/* World Map Outline - Simplified continents */}
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(192, 192, 192, 0.3)" />
            <stop offset="50%" stopColor="rgba(192, 192, 192, 0.1)" />
            <stop offset="100%" stopColor="rgba(192, 192, 192, 0.05)" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* North America */}
        <motion.path
          d="M5,15 Q8,10 15,12 Q20,8 25,15 Q22,25 18,30 Q15,35 12,32 Q8,28 5,25 Z"
          fill="url(#mapGradient)"
          stroke="rgba(192, 192, 192, 0.4)"
          strokeWidth="0.2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        />

        {/* South America */}
        <motion.path
          d="M18,35 Q22,32 25,40 Q28,50 25,58 Q20,60 18,55 Q15,45 18,35 Z"
          fill="url(#mapGradient)"
          stroke="rgba(192, 192, 192, 0.4)"
          strokeWidth="0.2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />

        {/* Europe */}
        <motion.path
          d="M45,15 Q52,10 58,15 Q62,18 60,25 Q55,28 50,25 Q45,22 45,15 Z"
          fill="url(#mapGradient)"
          stroke="rgba(192, 192, 192, 0.4)"
          strokeWidth="0.2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
        />

        {/* Africa */}
        <motion.path
          d="M45,25 Q52,22 58,28 Q60,35 55,45 Q50,50 45,45 Q42,35 45,25 Z"
          fill="url(#mapGradient)"
          stroke="rgba(192, 192, 192, 0.4)"
          strokeWidth="0.2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
        />

        {/* Asia */}
        <motion.path
          d="M60,15 Q75,8 85,18 Q88,25 85,35 Q80,40 70,38 Q62,32 60,25 Q58,20 60,15 Z"
          fill="url(#mapGradient)"
          stroke="rgba(192, 192, 192, 0.4)"
          strokeWidth="0.2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 2.5 }}
        />

        {/* Australia */}
        <motion.path
          d="M80,50 Q88,48 92,52 Q90,58 85,58 Q80,55 80,50 Z"
          fill="url(#mapGradient)"
          stroke="rgba(192, 192, 192, 0.4)"
          strokeWidth="0.2"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 3 }}
        />

        {/* Country Stars */}
        {countryStars.map((star, index) => (
          <motion.g key={star.country}>
            {/* Star glow */}
            <motion.circle
              cx={star.x}
              cy={star.y}
              r="0.8"
              fill="rgba(192, 192, 192, 0.1)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.5, 1],
                opacity: [0, 0.6, 0.3]
              }}
              transition={{ 
                duration: 2,
                delay: 3.5 + index * 0.1,
                repeat: Infinity,
                repeatDelay: 5
              }}
            />
            
            {/* Star */}
            <motion.polygon
              points={`${star.x},${star.y-0.4} ${star.x+0.12},${star.y-0.12} ${star.x+0.4},${star.y-0.12} ${star.x+0.2},${star.y+0.08} ${star.x+0.32},${star.y+0.36} ${star.x},${star.y+0.2} ${star.x-0.32},${star.y+0.36} ${star.x-0.2},${star.y+0.08} ${star.x-0.4},${star.y-0.12} ${star.x-0.12},${star.y-0.12}`}
              fill="rgba(192, 192, 192, 0.8)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                scale: { duration: 0.5, delay: 3.5 + index * 0.1 },
                opacity: { 
                  duration: 3,
                  delay: 4 + index * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{ filter: 'drop-shadow(0 0 2px rgba(192, 192, 192, 0.5))' }}
            />
            
            {/* Pulsing ring */}
            <motion.circle
              cx={star.x}
              cy={star.y}
              r="1"
              fill="none"
              stroke="rgba(192, 192, 192, 0.4)"
              strokeWidth="0.1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 4,
                delay: 4.5 + index * 0.15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.g>
        ))}

        {/* Connecting lines between major regions */}
        <motion.g opacity="0.2">
          {/* Trans-Atlantic */}
          <motion.path
            d="M25,25 Q35,20 45,22"
            stroke="rgba(192, 192, 192, 0.3)"
            strokeWidth="0.1"
            fill="none"
            strokeDasharray="1,1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 5 }}
          />
          
          {/* Europe-Asia */}
          <motion.path
            d="M58,20 Q62,18 65,20"
            stroke="rgba(192, 192, 192, 0.3)"
            strokeWidth="0.1"
            fill="none"
            strokeDasharray="1,1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 5.5 }}
          />
          
          {/* Asia-Australia */}
          <motion.path
            d="M78,38 Q82,42 85,50"
            stroke="rgba(192, 192, 192, 0.3)"
            strokeWidth="0.1"
            fill="none"
            strokeDasharray="1,1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 6 }}
          />
        </motion.g>

        {/* Global coverage text */}
        <motion.text
          x="50"
          y="8"
          textAnchor="middle"
          fill="rgba(192, 192, 192, 0.6)"
          fontSize="2"
          fontFamily="Inter, sans-serif"
          fontWeight="300"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 7 }}
        >
          200+ Countries Worldwide
        </motion.text>
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-silver/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default GlobalMap; 