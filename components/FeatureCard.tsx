import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group"
    >
      <div className="gradient-border">
        <div className="gradient-border-inner h-full">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              className="w-16 h-16 rounded-full bg-silver/10 flex items-center justify-center group-hover:bg-silver/20 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-silver text-body">
                {icon}
              </div>
            </motion.div>
            <h3 className="heading-sm text-soft-white group-hover:text-silver transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
