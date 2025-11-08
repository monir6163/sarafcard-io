import React from 'react';
import { motion } from 'framer-motion';

// Clean Modern Professional Icons (Lucide-inspired)
const PremiumIcon = ({ type, className = "w-10 h-10" }: { type: string; className?: string }) => {
  const iconStyle = {
    filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
  };

  switch (type) {
    case 'lightning':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
        </svg>
      );
    case 'globe':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'mobile':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5E5E5" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#C0C0C0" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#A0A0A0" stopOpacity="0.7"/>
            </linearGradient>
          </defs>
          <path 
            d="M12 2l8 4.5v6.5c0 5.5-3.84 10.74-9 12-5.16-1.26-9-6.5-9-12V6.5L12 2z" 
            fill="url(#shieldGradient)" 
            stroke="#D0D0D0" 
            strokeWidth="2.5" 
            opacity="0.9"
          />
          <polyline 
            points="9,12 12,15 20,7" 
            stroke="#F0F0F0" 
            strokeWidth="2.8" 
            fill="none"
          />
        </svg>
      );
    case 'zap':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
        </svg>
      );
    case 'diamond':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
          <path d="M6 3h12l4 6-10 13L2 9l4-6z" />
          <path d="M11 3L6 9l6 13 6-13-5-6" />
          <path d="M2 9h20" />
        </svg>
      );
    default:
      return null;
  }
};

const Features: React.FC = () => {
  const features = [
    {
      icon: 'lightning',
      title: 'Instant Virtual Card',
      description: 'Get your virtual card instantly after KYC approval. Start spending immediately with no waiting time.'
    },
    {
      icon: 'globe',
      title: 'Global Acceptance',
      description: 'Accepted in 200+ countries worldwide. Use anywhere VISA and MasterCard are accepted.'
    },
    {
      icon: 'mobile',
      title: 'Digital Wallet Ready',
      description: 'Add to Apple Pay and Google Pay instantly. Tap to pay anywhere contactless payments are accepted.'
    },
    {
      icon: 'shield',
      title: 'Secure & Private',
      description: 'Bank-grade security with advanced fraud protection. Your data stays private and secure.'
    },
    {
      icon: 'zap',
      title: 'Fast KYC',
      description: 'Complete verification in minutes, not days. Get approved quickly with our streamlined process.'
    },
    {
      icon: 'diamond',
      title: 'Premium Experience',
      description: 'Enjoy premium features and dedicated support. Experience banking reimagined for the digital age.'
    },
  ];

  return (
    <section id="features" className="section-padding bg-matte-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="absolute inset-0 texture-overlay opacity-20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-silver/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-silver/3 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
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
            <span className="text-silver text-sm font-medium">Why Choose SarafCard</span>
          </motion.div>
          
          <motion.h2
            className="heading-lg text-soft-white mb-6 text-glow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Powerful Features
          </motion.h2>
          
          <motion.p
            className="text-body text-silver max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of digital banking with cutting-edge features designed for modern users who demand excellence.
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid - 2 columns on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Enhanced Feature Card */}
              <motion.div
                className="relative h-full"
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 3,
                  z: 50
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ perspective: 1000 }}
              >
                {/* Card background with enhanced effects */}
                <div className="relative h-full bg-gradient-to-br from-silver/10 to-silver/5 rounded-xl border border-silver/20 backdrop-blur-sm p-3 md:p-6 overflow-hidden card-hover premium-glow">
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{ 
                      background: [
                        'radial-gradient(circle at 0% 0%, rgba(192, 192, 192, 0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 100%, rgba(192, 192, 192, 0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at 0% 0%, rgba(192, 192, 192, 0.1) 0%, transparent 50%)'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-silver/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                    style={{ transform: 'skewX(-45deg)' }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-2 md:space-y-4 h-full">
                    {/* Enhanced Premium 3D Icon */}
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-silver/20 to-silver/10 flex items-center justify-center border border-silver/20 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Icon glow */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-silver/30 to-transparent rounded-xl"
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <motion.div
                        className="relative z-10"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <PremiumIcon type={feature.icon} className="w-6 h-6 md:w-8 md:h-8" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Enhanced Title */}
                    <motion.h3
                      className="heading-sm font-semibold text-soft-white group-hover:text-premium transition-all duration-500 relative"
                      whileHover={{ y: -2 }}
                    >
                      {feature.title}
                      
                      {/* Underline effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-silver to-transparent"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.h3>
                    
                    {/* Description - hidden on mobile to save space */}
                    <motion.p
                      className="hidden md:block text-sm text-silver/80 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                  
                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-3 right-3 w-1.5 h-1.5 bg-silver/60 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </div>
                
                {/* Enhanced shadow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-silver/5 to-transparent rounded-xl blur-lg -z-10"
                  whileHover={{ 
                    scale: 1.05,
                    opacity: 0.8
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 md:mt-16"
        >
          {/* Premium separator */}
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-silver to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          
          <motion.p
            className="text-caption text-silver mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Ready to experience the difference?
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block"
          >
            <motion.a
              href="https://customer.sarafcard.io"
              className="relative group cursor-pointer touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                userSelect: 'none'
              }}
              onTouchStart={(e) => {
                // Ensure proper touch feedback on mobile
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onTouchEnd={(e) => {
                // Reset transform on touch end
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-silver/30 to-silver/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-r from-silver/20 to-silver/30 backdrop-blur-sm border border-silver/40 rounded-2xl px-8 py-4 group-hover:from-silver/30 group-hover:to-silver/40 transition-all duration-300 flex items-center gap-3">
                <span className="text-body font-semibold bg-gradient-to-r from-silver to-white bg-clip-text text-transparent">
                  Get Started Now
                </span>
                <motion.span
                  className="text-body bg-gradient-to-r from-silver to-white bg-clip-text text-transparent"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
