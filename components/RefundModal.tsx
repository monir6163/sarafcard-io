import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RefundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RefundModal: React.FC<RefundModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-matte-black to-gray-900 border border-silver/20 rounded-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-silver/20">
              <h2 className="text-2xl font-bold text-soft-white">Refund Policy</h2>
              <button
                onClick={onClose}
                className="p-2 text-silver/60 hover:text-silver transition-colors duration-200 rounded-lg hover:bg-silver/10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto scrollbar-thin scrollbar-track-silver/10 scrollbar-thumb-silver/30">
              <div className="text-silver/90 leading-relaxed space-y-6">
                <div className="mb-6">
                  <p className="text-sm text-silver/80 font-medium mb-3">Last Updated: September 17, 2025</p>
                  <p className="text-sm">
                    At SarafCard.io, we provide access to instant, non-reloadable prepaid cards and related services. Because these products are delivered digitally and tied to regulated financial processes, all orders are considered final once issued.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">1. Service Finality</h3>
                    <p className="text-sm mb-2">
                      When you redeem a code or purchase a prepaid card, the product is created and activated in real-time. For this reason:
                    </p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Orders cannot be reversed once the code has been redeemed or the card has been issued.</li>
                      <li>Unused or inactive cards cannot be refunded.</li>
                      <li>Any balance remaining after a card&apos;s expiry date will be automatically dissolved and is non-refundable.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">2. Order Cancellation</h3>
                    <p className="text-sm mb-2">You may request an order cancellation only if:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                      <li>The prepaid card has not yet been issued or displayed in your portal.</li>
                      <li>The redemption code has not been activated, used, or shared.</li>
                      <li>The cancellation request is submitted within 1 hour of completing the purchase.</li>
                    </ul>
                    <p className="text-sm">
                      To request a cancellation, please email support@sarafcard.io with your Order ID and the subject line:
                    </p>
                    <div className="bg-silver/10 border border-silver/20 rounded-lg p-3 mt-2">
                      <p className="text-sm font-mono text-silver">
                        &quot;Order Cancellation Request – [Your Order ID]&quot;
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">3. Refund Eligibility</h3>
                    <p className="text-sm mb-2">Refunds are strictly limited to the following circumstances:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                      <li>A verified system error prevented card delivery.</li>
                      <li>You were charged more than once for the same order.</li>
                      <li>A compliance or technical issue on SarafCard&apos;s side prevented card issuance.</li>
                    </ul>
                    
                    <p className="text-sm mb-2 font-medium text-soft-white">Approved refunds will:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                      <li>Be credited back to the original payment method, where possible.</li>
                      <li>Be processed within 10 business days of approval.</li>
                    </ul>

                    <p className="text-sm mb-2 font-medium text-soft-white">Refunds are not provided for:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Change of mind after purchase.</li>
                      <li>Inactivity, non-use, or expired balances.</li>
                      <li>Misuse or fraudulent use of card details after delivery.</li>
                      <li>Transactions declined due to sanctions, restricted countries, or prohibited merchants (e.g., gambling, betting, adult, pornography).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">4. Platform Integrity & Abuse Prevention</h3>
                    <p className="text-sm mb-2">SarafCard reserves the right to:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Deny refunds where suspicious activity is detected.</li>
                      <li>Suspend or terminate accounts found abusing refund requests.</li>
                      <li>Report fraudulent or unlawful activity to issuing institutions and regulators.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">5. Support Process</h3>
                    <p className="text-sm mb-2">
                      For assistance with cancellations or refund eligibility, please email support@sarafcard.io and include:
                    </p>
                    <ul className="text-sm list-disc pl-5 space-y-1 mb-2">
                      <li>Your full name</li>
                      <li>Order or Card ID</li>
                      <li>A description of the issue</li>
                      <li>Relevant screenshots (if available)</li>
                    </ul>
                    <p className="text-sm">
                      Our team will review and respond within 48 business hours.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">6. Compliance Notice</h3>
                    <p className="text-sm mb-2">SarafCard operates in cooperation with licensed financial institutions and complies with:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1 mb-2">
                      <li>PCI-DSS (secure card data handling)</li>
                      <li>KYC/AML obligations under international financial regulations</li>
                      <li>Best-practice privacy standards (GDPR, CCPA) voluntarily, but not as binding law</li>
                    </ul>
                    <p className="text-sm">
                      Refunds and cancellations may require identity verification before processing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">7. Our Commitment</h3>
                    <p className="text-sm mb-2">
                      While digital prepaid cards cannot be refunded once consumed, we commit to acting in good faith to resolve legitimate issues fairly and quickly. Our goal is to ensure transparency, trust, and a safe experience for every customer.
                    </p>
                    <p className="text-sm font-medium text-soft-white">
                      Thank you for choosing SarafCard.io.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            {/* <div className="flex justify-end p-6 border-t border-silver/20">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gradient-to-r from-silver/20 to-silver/30 rounded-lg border border-silver/40 text-soft-white font-medium hover:from-silver/30 hover:to-silver/40 transition-all duration-300"
              >
                Close
              </button>
            </div> */}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RefundModal;
