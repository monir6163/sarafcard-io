import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../public/assets/logos/latest-logo.png';
import PrivacyModal from './PrivacyModal';
import RefundModal from './RefundModal';
import TermsModal from './TermsModal';

// Clean Metallic Silver Icons for Footer
const MetallicShieldIcon = () => (
  <div className="relative w-5 h-5 flex-shrink-0">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
      <path
        d="M12 1l8.25 4.5v6.75c0 4.418-3.582 8-8 8s-8.25-3.582-8.25-8V5.5L12 1z"
        fill="#C0C0C0"
        stroke="#A0A0A0"
        strokeWidth="0.5"
        className="drop-shadow-md"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="drop-shadow-sm"
      />
    </svg>
  </div>
);

const MetallicBoltIcon = () => (
  <div className="relative w-5 h-5 flex-shrink-0">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        fill="#C0C0C0"
        stroke="#A0A0A0"
        strokeWidth="0.5"
        className="drop-shadow-lg"
      />
    </svg>
  </div>
);

const MetallicGlobeIcon = () => (
  <div className="relative w-5 h-5 flex-shrink-0">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="#C0C0C0"
        stroke="#A0A0A0"
        strokeWidth="0.5"
        className="drop-shadow-md"
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

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <>
      <footer id="footer" className="bg-matte-black border-t border-silver/20">
      <div className="max-w-7xl mx-auto container-padding pt-12 pb-2 lg:pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-4"
            >
              <Image
                src={logo} 
                alt="SarafCard Logo" 
                height={240}
                width={120}
                className="object-contain w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 -mt-8"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 text-silver/60 mb-6"
            >
              <span className="text-xs">Powered by</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs font-medium">VISA</span>
                <div className="w-1 h-1 bg-silver/40 rounded-full" />
                <span className="text-xs font-medium">MasterCard</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6"
            >
              <motion.a
                href="https://www.linkedin.com/company/sarafcard"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-silver/10 to-silver/5 rounded-lg border border-silver/20 hover:from-silver/20 hover:to-silver/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-silver">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xs font-medium text-silver">LinkedIn</span>
              </motion.a>
              
              <motion.a
                href="https://t.me/sarafcardbot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-r from-silver/10 to-silver/5 rounded-lg border border-silver/20 hover:from-silver/20 hover:to-silver/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-silver">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="text-xs font-medium text-silver">Telegram</span>
              </motion.a>
            </motion.div>

            {/* Made with Love */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-silver/60 text-xs"
            >
              <span>Made with ❤️ for the future of banking</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-soft-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base"
            >
              Quick Links
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 sm:space-y-3"
            >
              <motion.a
                href="#faq"
                className="block text-silver/70 hover:text-silver transition-colors duration-300 text-xs sm:text-sm"
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                FAQ
              </motion.a>
              <motion.a
                href="#"
                className="block text-silver/70 hover:text-silver transition-colors duration-300 text-xs sm:text-sm"
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsTermsModalOpen(true);
                }}
              >
                Terms & Conditions
              </motion.a>
              <motion.a
                href="#"
                className="block text-silver/70 hover:text-silver transition-colors duration-300 text-xs sm:text-sm"
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsPrivacyModalOpen(true);
                }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="block text-silver/70 hover:text-silver transition-colors duration-300 text-xs sm:text-sm"
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsRefundModalOpen(true);
                }}
              >
                Refund Policy
              </motion.a>
            </motion.div>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-soft-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base"
            >
              Support
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 sm:space-y-3"
            >
              <motion.a
                href="mailto:support@sarafcard.io"
                className="block text-silver/70 hover:text-silver transition-colors duration-300 text-xs sm:text-sm"
                whileHover={{ x: 5 }}
              >
                Support
              </motion.a>
              <motion.a
                href="https://partner.sarafcard.io"
                className="block text-silver/70 hover:text-silver transition-colors duration-300 text-xs sm:text-sm"
                whileHover={{ x: 5 }}
              >
                Partnership
              </motion.a>
              <motion.a
                href="mailto:legal@sarafcard.io"
                className="block text-silver/70 hover:text-silver transition-colors duration-300 text-xs sm:text-sm"
                whileHover={{ x: 5 }}
              >
                Legal Team
              </motion.a>
              <motion.a
                href="mailto:info@sarafcard.io"
                className="block text-silver/70 hover:text-silver transition-colors duration-300 text-xs sm:text-sm"
                whileHover={{ x: 5 }}
              >
                General Info
              </motion.a>
            </motion.div>
          </div>

          {/* Features with Metallic Icons */}
          <div className="col-span-1">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-soft-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base"
            >
              Features
            </motion.h3>
            <div className="space-y-2 sm:space-y-3">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <MetallicShieldIcon />
                <span className="text-silver/70 text-xs sm:text-sm">Bank-Level Security</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <MetallicBoltIcon />
                <span className="text-silver/70 text-xs sm:text-sm">Instant Access</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <MetallicGlobeIcon />
                <span className="text-silver/70 text-xs sm:text-sm">Global Acceptance</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Full Width Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-silver/20"
        >
          <p className="text-silver/80 leading-relaxed text-center" style={{ fontSize: '13px' }}>
           © {currentYear} SarafCard. All rights reserved. 
SarafCard is a technology company and not a bank. 
Banking and payment services are provided by SarafCard’s regulated banking partners, each of which is a licensed U.S. financial institution and, where applicable, a Member FDIC. 
SarafCard-branded cards are issued by these banking partners pursuant to licenses from Visa U.S.A. Inc. and Mastercard International Incorporated, and may be used everywhere Visa and Mastercard are accepted, subject to applicable terms and network restrictions.
          </p>
        </motion.div>
      </div>
    </footer>

    {/* Privacy Modal */}
    <PrivacyModal 
      isOpen={isPrivacyModalOpen} 
      onClose={() => setIsPrivacyModalOpen(false)} 
    />

    {/* Refund Modal */}
    <RefundModal 
      isOpen={isRefundModalOpen} 
      onClose={() => setIsRefundModalOpen(false)} 
    />

    {/* Terms Modal */}
    <TermsModal 
      isOpen={isTermsModalOpen} 
      onClose={() => setIsTermsModalOpen(false)} 
    />
  </>
  );
};

export default Footer;
