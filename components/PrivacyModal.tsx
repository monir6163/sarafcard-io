import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
              <h2 className="text-2xl font-bold text-soft-white">Privacy Policy</h2>
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
                    This Privacy Policy explains how SarafCard.io (&quot;SarafCard,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects your personal information when you use our website, customer portal, and prepaid card services (the &quot;Service&quot;).
                    By accessing or using the Service, you confirm that you have read and understood this Policy.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">1. DEFINITIONS</h3>
                    <p className="text-sm mb-2"><strong>Personal Data:</strong> Any information that identifies or relates to an individual, including what is defined as &quot;personal information&quot; under applicable data protection laws.</p>
                    <p className="text-sm"><strong>Processing:</strong> Any operation performed on Personal Data, such as collection, storage, transfer, or deletion.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">2. ELIGIBILITY</h3>
                    <p className="text-sm">
                      SarafCard services are available only to individuals who are 18 years or older (or the age of majority in their jurisdiction). We do not knowingly collect data from persons under 18.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">3. DATA WE COLLECT</h3>
                    <p className="text-sm mb-2">We may collect the following Personal Data:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li><strong>Identity Data:</strong> First name, last name, email, phone number, date of birth, government-issued ID (if required for KYC).</li>
                      <li><strong>Contact Data:</strong> Address information, if necessary for verification.</li>
                      <li><strong>Transaction Data:</strong> Card redemptions, spending activity, transaction limits, wallet linking (Apple Pay, Google Pay).</li>
                      <li><strong>Technical Data:</strong> Device type, browser, IP address, operating system.</li>
                      <li><strong>Usage Data:</strong> Login history, redemption activity, portal interactions.</li>
                      <li><strong>Compliance Data:</strong> Information from KYC/AML checks required by law.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">4. HOW WE USE YOUR DATA</h3>
                    <p className="text-sm mb-2">Your Personal Data may be used to:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Deliver and manage prepaid card services.</li>
                      <li>Verify identity and comply with KYC/AML regulations.</li>
                      <li>Process payments and enforce transaction limits.</li>
                      <li>Provide security features such as 3D Secure (3DS).</li>
                      <li>Prevent fraud, abuse, and prohibited activities (e.g., gambling, betting, adult content, restricted countries).</li>
                      <li>Communicate with you about updates, security alerts, and promotions.</li>
                      <li>Comply with applicable laws and issuer requirements.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">5. LEGAL BASIS & CONSENT</h3>
                    <p className="text-sm mb-2">
                      SarafCard is operated under the laws of its place of incorporation. While we follow international best practices (e.g., GDPR, CCPA, PCI-DSS), we are not legally bound by EU or California-specific laws unless required by our operating jurisdiction.
                    </p>
                    <p className="text-sm mb-2">By using SarafCard, you explicitly:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Consent to the collection and processing of your data outside your jurisdiction, including in Canada, the United States, or other regions where SarafCard or its partners operate.</li>
                      <li>Accept that SarafCard may voluntarily honor privacy requests (e.g., access, correction, deletion) on a good-faith basis, but without creating legal obligations under GDPR/CCPA.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">6. YOUR RIGHTS</h3>
                    <p className="text-sm mb-2">Depending on your jurisdiction, you may have rights to:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Access the data we hold about you.</li>
                      <li>Request correction or deletion.</li>
                      <li>Restrict or object to processing.</li>
                      <li>Withdraw consent to marketing communications.</li>
                    </ul>
                    <p className="text-sm mt-2">
                      To submit a request, contact us at privacy@sarafcard.io with the subject line &quot;Privacy Request.&quot; We may require proof of identity before processing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">7. DATA SHARING</h3>
                    <p className="text-sm mb-2">We may share Personal Data with:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Issuing financial institutions (to deliver prepaid card services).</li>
                      <li>KYC/AML providers (for identity verification).</li>
                      <li>Payment processors and gateways (PCI-DSS certified).</li>
                      <li>Fraud prevention partners (to block unauthorized or prohibited use).</li>
                      <li>Regulators and law enforcement, where legally required.</li>
                    </ul>
                    <p className="text-sm mt-2">We never sell Personal Data.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">8. DATA RETENTION</h3>
                    <p className="text-sm mb-2">We retain Personal Data only as long as necessary to:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Provide prepaid card services.</li>
                      <li>Comply with AML/KYC record-keeping laws.</li>
                      <li>Resolve disputes or enforce our Terms.</li>
                    </ul>
                    <p className="text-sm mt-2">Once retention is no longer required, data will be securely deleted.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">9. SECURITY MEASURES</h3>
                    <p className="text-sm mb-2">We use industry-standard protections, including:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>End-to-end encryption of sensitive data.</li>
                      <li>Multi-factor authentication for account access.</li>
                      <li>PCI-DSS compliance for cardholder data.</li>
                      <li>Monitoring and detection of suspicious transactions.</li>
                    </ul>
                    <p className="text-sm mt-2">Despite these safeguards, no system is fully secure. You use SarafCard at your own risk.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">10. INTERNATIONAL DATA TRANSFERS</h3>
                    <p className="text-sm">
                      Your data may be transferred and processed outside your country of residence, including in jurisdictions where SarafCard or its partners operate. By using the Service, you consent to such transfers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">11. CHILDREN&apos;S PRIVACY</h3>
                    <p className="text-sm">
                      SarafCard does not provide services to individuals under 18 years of age. If we become aware that data has been collected from someone under 18, we will delete it immediately.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">12. POLICY UPDATES</h3>
                    <p className="text-sm">
                      We may revise this Privacy Policy from time to time. Updates will be posted on this page with a new &quot;Last Updated&quot; date. If material changes occur, we may notify you by email or through the Platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-2">13. CONTACT US</h3>
                    <p className="text-sm mb-2">For questions or privacy-related requests:</p>
                    <div className="text-sm space-y-1">
                      <p><strong>SarafCard Privacy Office</strong></p>
                      <p>📧 Email: privacy@sarafcard.io</p>
                      <p>📧 Support: support@sarafcard.io</p>
                      <p>🌐 Website: www.sarafcard.io</p>
                    </div>
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

export default PrivacyModal;
