import React from 'react';
import { motion } from 'framer-motion';
import GlobalMap from './GlobalMap';

const GlobalCoverage: React.FC = () => {
  const stats = [
    { number: '200+', label: 'Countries' },
    { number: '500M+', label: 'Merchants' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section className="section-padding bg-matte-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-matte-black via-transparent to-matte-black z-10" />
        <motion.div
          className="absolute inset-0 opacity-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <GlobalMap />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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
            <span className="text-silver text-sm font-medium">Global Reach</span>
          </motion.div>
          
          <motion.h2
            className="heading-lg text-soft-white mb-6 text-glow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Accepted Worldwide
          </motion.h2>
          
          <motion.p
            className="text-body text-silver max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your SarafCard works seamlessly across the globe. From bustling cities to remote destinations, 
            experience the freedom of universal acceptance with Apple Pay and Google Pay support.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-silver/10 to-silver/5 border border-silver/20 backdrop-blur-sm premium-glow"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                transition={{ duration: 0.4 }}
                style={{ perspective: 1000 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-silver/10 to-transparent rounded-2xl"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{ transform: 'skewX(-45deg)' }}
                />
                
                <motion.div
                  className="heading-md text-soft-white mb-2 group-hover:text-glow"
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(192, 192, 192, 0.3)',
                      '0 0 20px rgba(192, 192, 192, 0.5)',
                      '0 0 10px rgba(192, 192, 192, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-silver text-sm font-medium">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Digital Wallets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.h3
            className="heading-sm text-soft-white mb-8"
            whileHover={{ scale: 1.02 }}
          >
            Add to Your Digital Wallet
          </motion.h3>
          
          <div className="flex justify-center items-center gap-16">
            {/* Apple Pay */}
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-32 h-20 bg-gradient-to-br from-silver/20 to-silver/10 rounded-2xl border border-silver/20 flex items-center justify-center premium-glow relative overflow-hidden backdrop-blur-sm">
                {/* Apple Pay Logo */}
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-silver">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-silver text-body font-medium">Pay</span>
                </motion.div>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-silver/20 to-transparent rounded-2xl"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transform: 'skewX(-45deg)' }}
                />
              </div>
            </motion.div>

            {/* Google Pay */}
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-32 h-20 bg-gradient-to-br from-silver/20 to-silver/10 rounded-2xl border border-silver/20 flex items-center justify-center premium-glow relative overflow-hidden backdrop-blur-sm">
                {/* Google Pay Logo */}
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-silver">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                  </svg>
                  <span className="text-silver text-body font-medium">Pay</span>
                </motion.div>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-silver/20 to-transparent rounded-2xl"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ transform: 'skewX(-45deg)' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCoverage; 