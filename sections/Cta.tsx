import React from 'react';
import { motion } from 'framer-motion';

// Clean Metallic Silver Icons
const MetallicShieldIcon = () => (
  <div className="relative w-6 h-6 flex-shrink-0">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
      <path
        d="M12 2L4 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z"
        fill="#C0C0C0"
        stroke="#A0A0A0"
        strokeWidth="1"
        className="drop-shadow-lg"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  </div>
);

const MetallicBoltIcon = () => (
  <div className="relative w-6 h-6 flex-shrink-0">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        fill="#C0C0C0"
        stroke="#A0A0A0"
        strokeWidth="1"
        className="drop-shadow-lg"
      />
    </svg>
  </div>
);

const MetallicGlobeIcon = () => (
  <div className="relative w-6 h-6 flex-shrink-0">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="#C0C0C0"
        stroke="#A0A0A0"
        strokeWidth="1"
        className="drop-shadow-lg"
      />
      <path
        d="M12 2a15.3 15.3 0 004 10 15.3 15.3 0 00-4 10 15.3 15.3 0 00-4-10 15.3 15.3 0 004-10z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        className="opacity-70"
      />
      <path
        d="M2 12h20"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        className="opacity-70"
      />
    </svg>
  </div>
);

const Cta: React.FC = () => {
  return (
    <section className="section-padding bg-matte-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-silver/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-silver/3 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-silver/3 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            className="heading-lg text-soft-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get Your Card Today
          </motion.h2>
          
          <motion.p 
            className="text-body text-silver mb-8 md:mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join thousands of users who have already discovered the freedom of digital banking with SarafCard. Your financial independence starts here.
          </motion.p>
          
          <motion.div 
            className="flex justify-center mb-8 md:mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a 
              href="https://customer.sarafcard.io" 
              className="relative group cursor-pointer touch-manipulation" 
              tabIndex={0} 
              style={{ 
                WebkitTapHighlightColor: 'transparent', 
                touchAction: 'manipulation', 
                userSelect: 'none' 
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-silver/20 to-silver/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-r from-silver/10 to-silver/20 backdrop-blur-sm border border-silver/30 rounded-2xl px-8 py-4 group-hover:from-silver/20 group-hover:to-silver/30 transition-all duration-300 cursor-pointer">
                              <span className="text-body font-semibold bg-gradient-to-r from-silver to-white bg-clip-text text-transparent pointer-events-none">
                Redeem Now
              </span>
              </div>
            </motion.a>
          </motion.div>

          {/* Enhanced Trust Section */}
          <motion.div 
            className="mt-8 md:mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Premium Stats Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8">
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-silver/15 to-silver/5 rounded-2xl p-4 md:p-6 border border-silver/20 backdrop-blur-sm group-hover:from-silver/20 group-hover:to-silver/10 transition-all duration-300">
                  <motion.div 
                    className="heading-md text-soft-white mb-1 text-glow"
                    animate={{ 
                      textShadow: [
                        '0 0 10px rgba(192, 192, 192, 0.3)',
                        '0 0 20px rgba(192, 192, 192, 0.5)',
                        '0 0 10px rgba(192, 192, 192, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    50K+
                  </motion.div>
                  <div className="text-caption text-silver/80">Active Users</div>
                </div>
              </motion.div>

              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-silver/15 to-silver/5 rounded-2xl p-4 md:p-6 border border-silver/20 backdrop-blur-sm group-hover:from-silver/20 group-hover:to-silver/10 transition-all duration-300">
                  <motion.div 
                    className="heading-md text-soft-white mb-1 text-glow"
                    animate={{ 
                      textShadow: [
                        '0 0 10px rgba(192, 192, 192, 0.3)',
                        '0 0 20px rgba(192, 192, 192, 0.5)',
                        '0 0 10px rgba(192, 192, 192, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  >
                    $100M+
                  </motion.div>
                  <div className="text-caption text-silver/80">Processed</div>
                </div>
              </motion.div>

              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-silver/15 to-silver/5 rounded-2xl p-4 md:p-6 border border-silver/20 backdrop-blur-sm group-hover:from-silver/20 group-hover:to-silver/10 transition-all duration-300">
                  <motion.div 
                    className="heading-md text-soft-white mb-1 text-glow"
                    animate={{ 
                      textShadow: [
                        '0 0 10px rgba(192, 192, 192, 0.3)',
                        '0 0 20px rgba(192, 192, 192, 0.5)',
                        '0 0 10px rgba(192, 192, 192, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    200+
                  </motion.div>
                  <div className="text-caption text-silver/80">Supported Countries</div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Trust Features */}
            <motion.div 
              className="bg-gradient-to-br from-silver/10 to-silver/5 rounded-3xl p-6 md:p-8 border border-silver/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(192, 192, 192, 0.4)' }}
            >
              <div className="text-center mb-6">
                <motion.h3 
                  className="heading-sm text-soft-white mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Trusted by Financial Leaders Worldwide
                </motion.h3>
                <motion.p 
                  className="text-caption text-silver/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Enterprise-grade security meets consumer simplicity
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-silver/20 to-silver/10 rounded-2xl flex items-center justify-center mb-4 group-hover:from-silver/30 group-hover:to-silver/20 transition-all duration-300">
                    <MetallicShieldIcon />
                  </div>
                  <h4 className="text-body font-semibold text-soft-white mb-2 group-hover:text-glow transition-all duration-300">
                    Bank-Level Security
                  </h4>
                  <p className="text-caption text-silver/70 leading-relaxed">
                    PCI-DSS certified with military-grade encryption
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-silver/20 to-silver/10 rounded-2xl flex items-center justify-center mb-4 group-hover:from-silver/30 group-hover:to-silver/20 transition-all duration-300">
                    <MetallicBoltIcon />
                  </div>
                  <h4 className="text-body font-semibold text-soft-white mb-2 group-hover:text-glow transition-all duration-300">
                    Instant Activation
                  </h4>
                  <p className="text-caption text-silver/70 leading-relaxed">
                    Ready to use in seconds, not days
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-silver/20 to-silver/10 rounded-2xl flex items-center justify-center mb-4 group-hover:from-silver/30 group-hover:to-silver/20 transition-all duration-300">
                    <MetallicGlobeIcon />
                  </div>
                  <h4 className="text-body font-semibold text-soft-white mb-2 group-hover:text-glow transition-all duration-300">
                    Global Access
                  </h4>
                  <p className="text-caption text-silver/70 leading-relaxed">
                    Accepted in 200+ countries worldwide
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
