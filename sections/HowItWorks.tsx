import React from 'react';
import { motion } from 'framer-motion';

// Modern Professional Icons (Lucide-style) for How It Works
const PremiumStepIcon = ({ type, className = "w-12 h-12" }: { type: string; className?: string }) => {
  const iconStyle = {
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
  };

  switch (type) {
    case 'key':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <circle cx="8" cy="8" r="6" />
          <path d="M14.5 14.5L21 21" />
          <path d="M21 15l-6-6" />
        </svg>
      );
    case 'checkmark':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.03 0 3.93.67 5.45 1.8" />
        </svg>
      );
    case 'card':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    default:
      return null;
  }
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Get PIN',
      description: 'Receive your unique redemption PIN from authorized partners.',
      icon: 'key',
    },
    {
      number: '02',
      title: 'Activate',
      description: 'Complete quick KYC verification and activate your virtual card.',
      icon: 'checkmark',
    },
    {
      number: '03',
      title: 'Use Card',
      description: 'Start spending globally with your instant virtual card.',
      icon: 'card',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-matte-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="absolute inset-0 texture-overlay opacity-15" />
      
      {/* Floating elements */}
      <div className="absolute top-32 right-20 w-24 h-24 bg-silver/10 rounded-full blur-2xl" />
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-silver/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-silver/20 bg-silver/5 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-2 h-2 bg-silver rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-silver text-sm font-medium">Simple Process</span>
          </motion.div>
          
          <motion.h2
            className="heading-lg text-soft-white mb-6 text-glow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            How It Works
          </motion.h2>
          
          <motion.p
            className="text-body text-silver max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get your virtual card in three simple steps. Experience the future of digital banking with our streamlined process.
          </motion.p>
        </motion.div>

        {/* Enhanced Steps Grid */}
        <div className="step-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Enhanced Connection Line */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-silver/60 via-silver/40 to-transparent transform -translate-y-1/2 z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                  style={{ transformOrigin: 'left' }}
                />
              )}

              <motion.div 
                className="relative z-10 text-center"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ perspective: 1000 }}
              >
                {/* Enhanced Step Number with 3D effect - Mobile optimized */}
                <motion.div
                  whileHover={{ scale: 1.15, rotateZ: 10 }}
                  className="relative w-10 h-10 md:w-24 md:h-24 mx-auto mb-1 md:mb-8"
                >
                  {/* Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-silver/30 to-silver/10 rounded-full blur-lg transform translate-x-1 translate-y-1" />
                  {/* Main circle */}
                  <div className="relative w-full h-full bg-gradient-to-br from-silver/25 to-silver/10 rounded-full flex items-center justify-center border border-silver/30 backdrop-blur-sm">
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                    <span className="relative text-silver font-space-grotesk font-bold text-caption md:heading-sm text-glow">
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Premium 3D Icon - Mobile optimized */}
                <motion.div
                  initial={{ scale: 0, rotateY: 180 }}
                  whileInView={{ scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3, type: "spring" }}
                  className="flex justify-center mb-1 md:mb-6"
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                >
                  <div className="relative">
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-silver/20 rounded-full blur-xl scale-150" />
                    <PremiumStepIcon type={step.icon} className="relative w-6 h-6 md:w-16 md:h-16" />
                  </div>
                </motion.div>

                {/* Enhanced Title - Mobile optimized */}
                <motion.h3 
                  className="text-caption md:heading-sm font-semibold font-space-grotesk text-soft-white mb-0.5 md:mb-4 text-glow"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.title}
                </motion.h3>

                {/* Enhanced Description - Mobile optimized */}
                <motion.p 
                  className="text-caption text-silver/90 mx-auto leading-tight px-1"
                  whileHover={{ color: "#E5E5E5" }}
                  transition={{ duration: 0.3 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Need a PIN Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-20 text-center"
        >
          <motion.div 
            className="relative bg-gradient-to-br from-silver/15 to-silver/5 rounded-2xl p-8 border border-silver/30 backdrop-blur-sm overflow-hidden"
            whileHover={{ scale: 1.02, borderColor: "rgba(192, 192, 192, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-silver/5 to-transparent" />
            
            <motion.h3 
              className="heading-sm text-soft-white mb-4 text-glow"
              whileHover={{ scale: 1.05 }}
            >
              Need a PIN?
            </motion.h3>
            <motion.p 
              className="text-body text-silver/90 mb-8 max-w-2xl mx-auto leading-relaxed"
              whileHover={{ color: "#E5E5E5" }}
              transition={{ duration: 0.3 }}
            >
              Contact our authorized partners to get your redemption PIN and start your SarafCard journey today.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
