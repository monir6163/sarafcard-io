import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
              <h2 className="text-2xl font-bold text-soft-white">Terms & Conditions</h2>
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
                  <h1 className="text-xl font-bold text-soft-white mb-2">SarafCard Terms & Conditions</h1>
                  <p className="text-sm text-silver/80 font-medium mb-3">Last Updated: October 13, 2025</p>
                  <div className="text-sm text-yellow-200 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <strong>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS WEBSITE OR OUR SERVICES. BY ACCESSING OR USING SARAFCARD.IO (THE &quot;PLATFORM&quot;), YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE, DO NOT USE THE PLATFORM OR ANY RELATED SERVICES.</strong>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">1. Agreement to Terms</h3>
                    <p className="text-sm mb-3">
                      These Terms and Conditions (&quot;Terms&quot;) form a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and SarafCard.io (&quot;SarafCard,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of the Platform, including our website, customer portal, and prepaid virtual card services.
                    </p>
                    <p className="text-sm">
                      By using the Platform or any SarafCard product, you confirm that you have read, understood, and accepted these Terms. We may modify these Terms at any time, and updated versions will be posted at <strong>www.sarafcard.io/terms</strong> and/or within your <strong>Customer Portal</strong>. <strong>Changes become effective upon posting</strong>, unless a later effective date is stated. <strong>You are responsible for reviewing the Terms regularly in the Portal</strong>; continued use of SarafCard services after posting constitutes acceptance of the updated Terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">2. Governing Law & Jurisdiction</h3>
                    <p className="text-sm mb-3">
                      SarafCard provides access to prepaid card services issued by regulated financial institutions. Each card is governed by the rules and regulations of its issuing institution and card network (Mastercard® or Visa®).
                    </p>
                    <p className="text-sm mb-3">
                      These Terms shall be governed by general principles of law recognized in international commerce, including the <strong>UNIDROIT Principles of International Commercial Contracts</strong>, unless superseded by mandatory law in the jurisdiction where SarafCard or its relevant issuer is organized. Nothing herein shall be construed as submitting SarafCard to the laws or exclusive jurisdiction of any particular nation, except as required by applicable regulation.
                    </p>
                    <p className="text-sm">
                      By using SarafCard, you consent to your data being processed in jurisdictions where SarafCard or its partners operate. SarafCard follows international privacy and compliance best practices (e.g., PCI-DSS, GDPR, CCPA principles) on a voluntary basis and is not legally bound by foreign regulations outside its place of incorporation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">3. Program Structure</h3>
                    <p className="text-sm mb-3">SarafCard offers four prepaid card programs (&quot;Programs&quot;):</p>
                    
                    <div className="bg-silver/10 rounded-lg p-4 mb-3">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-silver/20">
                            <th className="text-left py-2 text-soft-white font-semibold">Program Name</th>
                            <th className="text-left py-2 text-soft-white font-semibold">Network</th>
                            <th className="text-left py-2 text-soft-white font-semibold">Wallet Support</th>
                          </tr>
                        </thead>
                        <tbody className="text-silver/90">
                          <tr className="border-b border-silver/10">
                            <td className="py-2">SarafCard Black</td>
                            <td className="py-2">Mastercard®</td>
                            <td className="py-2">Apple Pay, Google Pay</td>
                          </tr>
                          <tr className="border-b border-silver/10">
                            <td className="py-2">SarafCard Silver</td>
                            <td className="py-2">Mastercard®</td>
                            <td className="py-2">Not supported</td>
                          </tr>
                          <tr className="border-b border-silver/10">
                            <td className="py-2">SarafCard Blue</td>
                            <td className="py-2">Visa®</td>
                            <td className="py-2">Not supported</td>
                          </tr>
                          <tr>
                            <td className="py-2">SarafCard Green</td>
                            <td className="py-2">Visa®</td>
                            <td className="py-2">Not supported</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-sm">
                      All SarafCard programs are <strong>non-reloadable</strong>, <strong>virtual-only</strong>, and <strong>issued by licensed financial institutions</strong>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">4. User Eligibility</h3>
                    <p className="text-sm mb-2">By using SarafCard, you represent that:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>You are at least <strong>18 years old</strong> (or the legal age of majority in your jurisdiction).</li>
                      <li>You have the authority and capacity to accept these Terms.</li>
                      <li>You will not use the Platform for unlawful, fraudulent, or unauthorized purposes.</li>
                      <li>You will comply with all KYC/AML checks when required by SarafCard or its issuing partners.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">5. Card Redemption & KYC Requirements</h3>
                    <p className="text-sm mb-2">To activate a SarafCard:</p>
                    <p className="text-sm mb-3">Visit <strong>www.sarafcard.io</strong>, enter your redemption code, and complete KYC verification, including:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                      <li><strong>First Name</strong></li>
                      <li><strong>Last Name</strong></li>
                      <li><strong>Email Address</strong></li>
                      <li><strong>Phone Number</strong></li>
                      <li><strong>Date of Birth (DOB)</strong></li>
                      <li><strong>Billing Address</strong> (country, city, postal code)</li>
                    </ul>
                    <p className="text-sm mb-2">
                      Once redeemed, card details (number, expiry, CVV) will be displayed securely in your customer portal.
                    </p>
                    <p className="text-sm">
                      Previously redeemed cards can be accessed by logging into your account. Each card is <strong>single-use</strong>, <strong>non-reloadable</strong>, and must be used before its expiry date.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">6. Restricted Countries</h3>
                    <p className="text-sm mb-4">
                      SarafCard services are not available to individuals or businesses <strong>residing in</strong>, <strong>located in</strong>, or <strong>transacting from</strong> countries or territories subject to trade restrictions, financial sanctions, or card-network prohibitions.
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-md font-semibold text-soft-white mb-2">A. SarafCard Black (Mastercard Program)</h4>
                      <p className="text-sm mb-2">SarafCard Black cards may not be purchased, issued, or used <strong>while physically located in</strong>:</p>
                      <p className="text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                        <strong>Afghanistan, Belarus, Cuba, El Salvador, Honduras, Iran, Iraq, North Korea, Russia, South Sudan, Sudan, Syria, Ukraine (including Crimea, Donetsk, and Luhansk regions), Venezuela, Yemen.</strong>
                      </p>
                    </div>

                    <div className="mb-3">
                      <h4 className="text-md font-semibold text-soft-white mb-2">B. SarafCard Silver, Blue, and Green (Mastercard & Visa Programs)</h4>
                      <p className="text-sm mb-2">SarafCard Silver, Blue, and Green cards may not be purchased, issued, or used <strong>while physically located in</strong>:</p>
                      <p className="text-sm bg-orange-500/10 p-3 rounded-lg border border-orange-500/20">
                        <strong>Afghanistan, Algeria, Angola, Belarus, Bosnia and Herzegovina, Côte d&apos;Ivoire, Cuba, Democratic Republic of the Congo, Ghana, Guyana, Iran, Iraq, Laos, Libya, Myanmar (Burma), North Korea, Panama, Papua New Guinea, Russia, South Sudan, Sudan, Syria, Uganda, Ukraine (including Crimea, Donetsk, and Luhansk regions), Yemen, Zimbabwe.</strong>
                      </p>
                    </div>

                    <p className="text-sm">
                      SarafCard reserves the right to restrict or suspend card usage in any jurisdiction where required by applicable law, card-network policy, or issuer directive. Restrictions may change without prior notice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">7. Prohibited Activities</h3>
                    <p className="text-sm mb-2">You agree not to use SarafCard for:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Misuse, resale, or unauthorized distribution of cards.</li>
                      <li>Providing false, misleading, or stolen information.</li>
                      <li>Engaging in fraud, money laundering, or illegal transactions.</li>
                      <li>Funding gambling, adult entertainment, or restricted industries.</li>
                      <li>Hacking, reverse-engineering, or bypassing platform security.</li>
                      <li>Transactions connected to sanctioned countries or individuals listed under OFAC, UN, EU, or similar restrictions.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">8. Card Features</h3>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li><strong>Non-Reloadable:</strong> Each card is single-load; once the balance is used, it cannot be recharged.</li>
                      <li><strong>Currency:</strong> Cards are issued in U.S. Dollars (USD) unless otherwise specified.</li>
                      <li><strong>3D Secure:</strong> Online transactions are protected with 3DS authentication.</li>
                      <li><strong>Wallet Support:</strong> Only SarafCard Black supports Apple Pay and Google Pay.</li>
                      <li><strong>Global Use:</strong> Accepted globally wherever the respective network (Mastercard® or Visa®) is accepted, excluding restricted countries and merchant categories.</li>
                      <li><strong>Expiry:</strong> Cards expire on the date shown in the portal. Upon expiry of any SarafCard, any remaining balance will be automatically forfeited and permanently unrecoverable. By accepting these Terms, you waive any right to claim or recover such funds after expiry, to the fullest extent permitted by applicable law.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">9. Transaction Limits & Monitoring</h3>
                    <p className="text-sm mb-2">The following limits apply to all SarafCard programs (Black, Silver, Blue, and Green):</p>
                    <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                      <li><strong>Maximum single transaction:</strong> $10,000 USD</li>
                      <li><strong>Daily transaction limit:</strong> $50,000 USD</li>
                      <li><strong>Monthly transaction limit:</strong> $400,000 USD</li>
                    </ul>
                    <p className="text-sm">
                      SarafCard reserves the right to adjust these limits without prior notice based on issuer, network, or regulatory requirements. SarafCard may block, delay, or review transactions for compliance purposes and is not liable for any delays caused by such investigations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">10. Fees</h3>
                    <div className="mb-3">
                      <h4 className="text-md font-semibold text-soft-white mb-2">Fee Disclosure:</h4>
                      <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                        <li>All applicable fees and charges are displayed transparently in your <strong>SarafCard Customer Portal</strong>, including in your account&apos;s <strong>&quot;Fees&quot;</strong> section and <strong>transaction history</strong> reports.</li>
                        <li>Some fees may be included within the transaction amounts and may not appear as separate line items at the time of payment or confirmation.</li>
                      </ul>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-md font-semibold text-soft-white mb-2">Fee Types:</h4>
                      <p className="text-sm mb-2">Common fees include, but are not limited to:</p>
                      <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                        <li>Card issuance or activation fees</li>
                        <li>Foreign exchange and cross-border transaction fees</li>
                        <li>Network and processing fees applied by Mastercard® or Visa®</li>
                        <li>Dormancy or inactivity fees, where applicable</li>
                      </ul>
                    </div>

                    <p className="text-sm mb-3">
                      Additional or program-specific fees may apply; all current and applicable fees are displayed in your SarafCard Customer Portal.
                    </p>

                    <div className="mb-3">
                      <h4 className="text-md font-semibold text-soft-white mb-2">How Fees Are Applied:</h4>
                      <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                        <li>Fees may be automatically deducted from your card balance or included in the total transaction amount, depending on issuer or card network rules.</li>
                        <li>Fee details are available for review in your Customer Portal and transaction history, but may not be itemized or visible at the point of payment.</li>
                        <li>All fees and charges less than $0.01 shall be rounded up and deducted at $0.01 per transaction.</li>
                        <li>SarafCard does not charge hidden fees.</li>
                      </ul>
                    </div>

                    <div className="mb-3">
                      <h4 className="text-md font-semibold text-soft-white mb-2">Fee Updates:</h4>
                      <p className="text-sm mb-3">
                        SarafCard may modify, add, or remove fees to reflect issuer or compliance requirements. Updated fees appear in the Customer Portal and take effect upon posting.
                      </p>
                    </div>
                    
                    <p className="text-sm">
                      <strong>Currency Conversion:</strong> For non-USD transactions, Mastercard® or Visa® exchange rates apply, plus any applicable foreign-exchange fee shown in your Portal&apos;s <strong>&quot;Fees&quot;</strong> section.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">11. Privacy & Data Use</h3>
                    <p className="text-sm mb-2">
                      Your use of SarafCard is governed by our <strong>Cookie &amp; Privacy Principles Policy</strong>. By using SarafCard, you agree that:
                    </p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Data may be processed securely in jurisdictions where SarafCard or its partners operate.</li>
                      <li>SarafCard follows internationally recognized standards such as PCI-DSS, GDPR, and CCPA on a voluntary basis.</li>
                      <li>SarafCard is not legally bound by any foreign regulation but strives to meet or exceed those standards in good faith.</li>
                      <li>KYC and transaction data may be shared with regulators or issuers when required by law.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">12. Disclaimers & Limitation of Liability</h3>
                    <p className="text-sm mb-2">
                      SarafCard is <strong>not a bank</strong> and does not directly hold customer funds. Cards are issued by regulated third-party institutions. Services are provided <strong>&quot;AS IS&quot;</strong> and <strong>&quot;AS AVAILABLE.&quot;</strong>
                    </p>
                    <p className="text-sm">
                      SarafCard makes no warranties regarding uninterrupted service or merchant acceptance. SarafCard is not liable for indirect, incidental, or consequential losses, including expired balances, third-party errors, or service interruptions caused by events beyond our reasonable control.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">13. Dispute Resolution</h3>
                    <p className="text-sm">
                      Any dispute, claim, or controversy arising from or related to these Terms shall be resolved through good faith negotiations first. If resolution cannot be achieved within 60 days, disputes may be resolved by <strong>binding arbitration</strong> under internationally recognized commercial arbitration rules, unless both parties agree otherwise in writing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">14. Termination</h3>
                    <p className="text-sm">
                      SarafCard may suspend, freeze, or terminate your account or card access without notice if: You breach these Terms; Suspicious or unlawful activity is detected; or Required by regulatory authorities. Any remaining balance will be handled in accordance with issuer policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">15. Indemnification</h3>
                    <p className="text-sm">
                      You agree to indemnify and hold harmless SarafCard, its affiliates, partners, employees, and service providers from any claim, damage, or loss arising from your use of the Platform or breach of these Terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">16. Force Majeure</h3>
                    <p className="text-sm">
                      SarafCard shall not be liable for any failure or delay in performance under these Terms due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, government actions, or network failures.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">17. Severability</h3>
                    <p className="text-sm">
                      If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">18. Assignment</h3>
                    <p className="text-sm">
                      SarafCard may assign or transfer its rights and obligations under these Terms to any affiliate or successor entity without your consent. You may not assign your rights under these Terms without our written consent.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">19. Intellectual Property</h3>
                    <p className="text-sm">
                      All SarafCard trademarks, logos, designs, and platform interfaces are the exclusive property of SarafCard. You may not use, reproduce, or distribute any SarafCard intellectual property without written permission.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">20. Language</h3>
                    <p className="text-sm">
                      These Terms are drafted in English. In case of any translation, the English version shall prevail.
                    </p>
                  </div>

                  

                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">21. Regulatory & Issuer Disclosure</h3>
                    <p className="text-sm mb-2">
                      SarafCard is a <strong>technology company</strong>, not a bank or financial institution. The SarafCard Platform provides secure technology infrastructure that enables the digital issuance, management, and reloading of prepaid and virtual card programs.
                    </p>
                    <p className="text-sm mb-2">
                      All SarafCard-branded cards are issued by one or more licensed U.S. financial institutions that are duly regulated and, where applicable, <strong>Members of the Federal Deposit Insurance Corporation (FDIC)</strong>. Banking, payment-processing, and compliance services are provided through these authorized issuing banks and licensed program partners, each operating under applicable U.S. federal and state regulations and network rules.
                    </p>
                    <p className="text-sm mb-2">
                      SarafCard does not hold or manage customer funds, perform KYC/AML verification, or issue cards directly. All cardholder funds are held and insured by the issuing financial institutions within the limits established by U.S. law. SarafCard functions solely as a technology and distribution provider.
                    </p>
                    <p className="text-sm">
                      SarafCard-branded prepaid cards are issued pursuant to licenses from <strong>Visa U.S.A. Inc.</strong> and <strong>Mastercard International Incorporated</strong>, and may be used wherever Visa® or Mastercard® are accepted, subject to these Terms and applicable network and jurisdictional restrictions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-soft-white mb-3">22. Contact Information</h3>
                    <div className="text-sm">
                      <p className="font-semibold text-soft-white mb-1">SarafCard Support</p>
                      <p>📧 Email: <strong>support@sarafcard.io</strong></p>
                      <p>🌐 Website: <strong>www.sarafcard.io</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;
