import React from 'react';
import { motion } from 'framer-motion';

const Terms: React.FC = () => {

  return (
    <section id="terms" className="py-8 md:py-12 bg-gradient-to-b from-matte-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-silver/2 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-silver/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-silver/20 bg-silver/5 backdrop-blur-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-2 h-2 bg-silver rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-silver text-sm font-medium">Legal</span>
          </motion.div>

          <h2 className="heading-lg text-soft-white mb-4">
            Terms & Conditions
          </h2>

          <p className="text-body text-silver max-w-2xl mx-auto">
            Complete Terms and Conditions governing the use of SarafCard services. This document outlines all legal requirements, restrictions, and user obligations.
          </p>
        </motion.div>

        {/* Terms Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-silver/10 to-silver/5 rounded-xl border border-silver/20 backdrop-blur-sm p-6 md:p-8"
        >
          <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-silver/10 scrollbar-thumb-silver/30 pr-4">
            <div className="text-silver/90 leading-relaxed space-y-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-soft-white mb-2">SarafCard Terms & Conditions</h3>
                <p className="text-sm text-silver/80 font-medium">Last Updated: October 13, 2025</p>
                <p className="text-sm text-yellow-200 mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <strong>PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS WEBSITE OR OUR SERVICES. BY ACCESSING OR USING SARAFCARD.IO (THE &quot;PLATFORM&quot;), YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE, DO NOT USE THE PLATFORM OR ANY RELATED SERVICES.</strong>
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">1. Agreement to Terms</h4>
                  <p className="text-sm">
                    These Terms and Conditions (&quot;Terms&quot;) form a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and SarafCard.io (&quot;SarafCard,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of the Platform, including our website, customer portal, and prepaid virtual card services.
                  </p>
                  <p className="text-sm mt-2">
                    By using the Platform or any SarafCard product, you confirm that you have read, understood, and accepted these Terms. We may modify these Terms at any time, and updated versions will be posted at <strong>www.sarafcard.io/terms</strong> and/or within your <strong>Customer Portal</strong>. <strong>Changes become effective upon posting</strong>, unless a later effective date is stated. <strong>You are responsible for reviewing the Terms regularly in the Portal</strong>; continued use of SarafCard services after posting constitutes acceptance of the updated Terms.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">2. Governing Law & Jurisdiction</h4>
                  <p className="text-sm mb-2">
                    SarafCard provides access to prepaid card services issued by regulated financial institutions. Each card is governed by the rules and regulations of its issuing institution and card network (Mastercard® or Visa®).
                  </p>
                  <p className="text-sm mb-2">
                    These Terms shall be governed by general principles of law recognized in international commerce, including the <strong>UNIDROIT Principles of International Commercial Contracts</strong>, unless superseded by mandatory law in the jurisdiction where SarafCard or its relevant issuer is organized. Nothing herein shall be construed as submitting SarafCard to the laws or exclusive jurisdiction of any particular nation, except as required by applicable regulation.
                  </p>
                  <p className="text-sm">
                    By using SarafCard, you consent to your data being processed in jurisdictions where SarafCard or its partners operate. SarafCard follows international privacy and compliance best practices (e.g., PCI-DSS, GDPR, CCPA principles) on a voluntary basis and is not legally bound by foreign regulations outside its place of incorporation.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">3. Program Structure</h4>
                  <p className="text-sm mb-3">SarafCard offers four prepaid card programs (&quot;Programs&quot;):</p>
                  <div className="bg-silver/10 rounded-lg p-4 mb-3">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-silver/20">
                          <th className="text-left py-2 text-soft-white">Program Name</th>
                          <th className="text-left py-2 text-soft-white">Network</th>
                          <th className="text-left py-2 text-soft-white">Wallet Support</th>
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
                  <h4 className="text-lg font-semibold text-soft-white mb-2">4. User Eligibility</h4>
                  <p className="text-sm mb-2">By using SarafCard, you represent that:</p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>You are at least <strong>18 years old</strong> (or the legal age of majority in your jurisdiction).</li>
                    <li>You have the authority and capacity to accept these Terms.</li>
                    <li>You will not use the Platform for unlawful, fraudulent, or unauthorized purposes.</li>
                    <li>You will comply with all KYC/AML checks when required by SarafCard or its issuing partners.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">5. Card Redemption & KYC Requirements</h4>
                  <p className="text-sm mb-2">To activate a SarafCard:</p>
                  <p className="text-sm mb-2">Visit <strong>www.sarafcard.io</strong>, enter your redemption code, and complete KYC verification, including:</p>
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
                  <h4 className="text-lg font-semibold text-soft-white mb-2">6. Restricted Countries</h4>
                  <p className="text-sm mb-3">
                    SarafCard services are not available to individuals or businesses <strong>residing in</strong>, <strong>located in</strong>, or <strong>transacting from</strong> countries or territories subject to trade restrictions, financial sanctions, or card-network prohibitions.
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="text-md font-semibold text-soft-white mb-2">A. SarafCard Black (Mastercard Program)</h5>
                    <p className="text-sm mb-2">SarafCard Black cards may not be purchased, issued, or used <strong>while physically located in</strong>:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                      <div className="px-2 py-1 text-silver/90">• Afghanistan</div>
                      <div className="px-2 py-1 text-silver/90">• Belarus</div>
                      <div className="px-2 py-1 text-silver/90">• Cuba</div>
                      <div className="px-2 py-1 text-silver/90">• El Salvador</div>
                      <div className="px-2 py-1 text-silver/90">• Honduras</div>
                      <div className="px-2 py-1 text-silver/90">• Iran</div>
                      <div className="px-2 py-1 text-silver/90">• Iraq</div>
                      <div className="px-2 py-1 text-silver/90">• North Korea</div>
                      <div className="px-2 py-1 text-silver/90">• Russia</div>
                      <div className="px-2 py-1 text-silver/90">• South Sudan</div>
                      <div className="px-2 py-1 text-silver/90">• Sudan</div>
                      <div className="px-2 py-1 text-silver/90">• Syria</div>
                      <div className="px-2 py-1 text-silver/90">• Ukraine (incl. Crimea, Donetsk, Luhansk)</div>
                      <div className="px-2 py-1 text-silver/90">• Venezuela</div>
                      <div className="px-2 py-1 text-silver/90">• Yemen</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h5 className="text-md font-semibold text-soft-white mb-2">B. SarafCard Silver, Blue, and Green Programs</h5>
                    <p className="text-sm mb-2">SarafCard Silver, Blue, and Green cards may not be purchased, issued, or used <strong>while physically located in</strong>:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm bg-orange-500/10 p-3 rounded-lg border border-orange-500/20">
                      <div className="px-2 py-1 text-silver/90">• Afghanistan</div>
                      <div className="px-2 py-1 text-silver/90">• Algeria</div>
                      <div className="px-2 py-1 text-silver/90">• Angola</div>
                      <div className="px-2 py-1 text-silver/90">• Belarus</div>
                      <div className="px-2 py-1 text-silver/90">• Bosnia & Herzegovina</div>
                      <div className="px-2 py-1 text-silver/90">• Côte d&apos;Ivoire</div>
                      <div className="px-2 py-1 text-silver/90">• Cuba</div>
                      <div className="px-2 py-1 text-silver/90">• DR Congo</div>
                      <div className="px-2 py-1 text-silver/90">• Ghana</div>
                      <div className="px-2 py-1 text-silver/90">• Guyana</div>
                      <div className="px-2 py-1 text-silver/90">• Iran</div>
                      <div className="px-2 py-1 text-silver/90">• Iraq</div>
                      <div className="px-2 py-1 text-silver/90">• Laos</div>
                      <div className="px-2 py-1 text-silver/90">• Libya</div>
                      <div className="px-2 py-1 text-silver/90">• Myanmar (Burma)</div>
                      <div className="px-2 py-1 text-silver/90">• North Korea</div>
                      <div className="px-2 py-1 text-silver/90">• Panama</div>
                      <div className="px-2 py-1 text-silver/90">• Papua New Guinea</div>
                      <div className="px-2 py-1 text-silver/90">• Russia</div>
                      <div className="px-2 py-1 text-silver/90">• South Sudan</div>
                      <div className="px-2 py-1 text-silver/90">• Sudan</div>
                      <div className="px-2 py-1 text-silver/90">• Syria</div>
                      <div className="px-2 py-1 text-silver/90">• Uganda</div>
                      <div className="px-2 py-1 text-silver/90">• Ukraine (incl. Crimea, Donetsk, Luhansk)</div>
                      <div className="px-2 py-1 text-silver/90">• Yemen</div>
                      <div className="px-2 py-1 text-silver/90">• Zimbabwe</div>
                    </div>
                  </div>

                  <p className="text-sm">
                    SarafCard reserves the right to restrict or suspend card usage in any jurisdiction where required by applicable law, card-network policy, or issuer directive. Restrictions may change without prior notice.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">7. Prohibited Activities</h4>
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
                  <h4 className="text-lg font-semibold text-soft-white mb-2">8. Card Features</h4>
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
                  <h4 className="text-lg font-semibold text-soft-white mb-2">9. Transaction Limits & Monitoring</h4>
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
                  <h4 className="text-lg font-semibold text-soft-white mb-2">10. Fees</h4>
                  <div className="mb-3">
                    <h5 className="text-md font-semibold text-soft-white mb-1">Fee Disclosure:</h5>
                    <ul className="text-sm list-disc pl-5 space-y-1 mb-2">
                      <li>All applicable fees and charges are displayed transparently in your <strong>SarafCard Customer Portal</strong>, including in your account&apos;s <strong>&quot;Fees&quot;</strong> section and <strong>transaction history</strong> reports.</li>
                      <li>Some fees may be included within the transaction amounts and may not appear as separate line items at the time of payment or confirmation.</li>
                    </ul>
                  </div>
                  
                  <div className="mb-3">
                    <h5 className="text-md font-semibold text-soft-white mb-1">Fee Types:</h5>
                    <p className="text-sm mb-1">Common fees include, but are not limited to:</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Card issuance or activation fees</li>
                      <li>Foreign exchange and cross-border transaction fees</li>
                      <li>Network and processing fees applied by Mastercard® or Visa®</li>
                      <li>Dormancy or inactivity fees, where applicable</li>
                    </ul>
                  </div>

                  <p className="text-sm mb-2">
                    Additional or program-specific fees may apply; all current and applicable fees are displayed in your SarafCard Customer Portal.
                  </p>
                  
                  <p className="text-sm">
                    <strong>Currency Conversion:</strong> For non-USD transactions, Mastercard® or Visa® exchange rates apply, plus any applicable foreign-exchange fee shown in your Portal&apos;s <strong>&quot;Fees&quot;</strong> section.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">11. Privacy & Data Use</h4>
                  <p className="text-sm mb-2">
                    Your use of SarafCard is governed by our <strong>Cookie & Privacy Principles Policy</strong>. By using SarafCard, you agree that:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Data may be processed securely in jurisdictions where SarafCard or its partners operate.</li>
                    <li>SarafCard follows internationally recognized standards such as PCI-DSS, GDPR, and CCPA on a voluntary basis.</li>
                    <li>SarafCard is not legally bound by any foreign regulation but strives to meet or exceed those standards in good faith.</li>
                    <li>KYC and transaction data may be shared with regulators or issuers when required by law.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">12. Disclaimers & Limitation of Liability</h4>
                  <p className="text-sm mb-2">
                    SarafCard is <strong>not a bank</strong> and does not directly hold customer funds. Cards are issued by regulated third-party institutions. Services are provided <strong>&quot;AS IS&quot;</strong> and <strong>&quot;AS AVAILABLE.&quot;</strong>
                  </p>
                  <p className="text-sm">
                    SarafCard makes no warranties regarding uninterrupted service or merchant acceptance. SarafCard is not liable for indirect, incidental, or consequential losses, including expired balances, third-party errors, or service interruptions caused by events beyond our reasonable control.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">13. Dispute Resolution</h4>
                  <p className="text-sm">
                    Any dispute, claim, or controversy arising from or related to these Terms shall be resolved through good faith negotiations first. If resolution cannot be achieved within 60 days, disputes may be resolved by <strong>binding arbitration</strong> under internationally recognized commercial arbitration rules, unless both parties agree otherwise in writing.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">14. Termination</h4>
                  <p className="text-sm">
                    SarafCard may suspend, freeze, or terminate your account or card access without notice if: You breach these Terms; Suspicious or unlawful activity is detected; or Required by regulatory authorities. Any remaining balance will be handled in accordance with issuer policy.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">15. Indemnification</h4>
                  <p className="text-sm">
                    You agree to indemnify and hold harmless SarafCard, its affiliates, partners, employees, and service providers from any claim, damage, or loss arising from your use of the Platform or breach of these Terms.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">16. Force Majeure</h4>
                  <p className="text-sm">
                    SarafCard shall not be liable for any failure or delay in performance under these Terms due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, government actions, or network failures.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">17. Severability</h4>
                  <p className="text-sm">
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">18. Assignment</h4>
                  <p className="text-sm">
                    SarafCard may assign or transfer its rights and obligations under these Terms to any affiliate or successor entity without your consent. You may not assign your rights under these Terms without our written consent.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">19. Intellectual Property</h4>
                  <p className="text-sm">
                    All SarafCard trademarks, logos, designs, and platform interfaces are the exclusive property of SarafCard. You may not use, reproduce, or distribute any SarafCard intellectual property without written permission.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">20. Language</h4>
                  <p className="text-sm">
                    These Terms are drafted in English. In case of any translation, the English version shall prevail.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">21. Contact Information</h4>
                  <div className="text-sm">
                    <p className="font-semibold text-soft-white mb-1">SarafCard Support</p>
                    <p>📧 Email: <strong>support@sarafcard.io</strong></p>
                    <p>🌐 Website: <strong>www.sarafcard.io</strong></p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-soft-white mb-2">22. Regulatory & Issuer Disclosure</h4>
                  <p className="text-sm mb-2">
                    SarafCard is a <strong>technology company</strong>, not a bank. The SarafCard Platform provides the technology infrastructure that enables digital issuance and management of prepaid card programs.
                  </p>
                  <p className="text-sm mb-2">
                    Banking and payment services are provided by SarafCard&apos;s licensed <strong>banking partners</strong> and <strong>card issuers</strong>, each of which is regulated in its jurisdiction and, where applicable, a <strong>Member FDIC</strong>.
                  </p>
                  <p className="text-sm">
                    SarafCard cards are issued by SarafCard&apos;s bank partners pursuant to licenses from <strong>Visa U.S.A. Inc.</strong> and <strong>Mastercard International Incorporated</strong>, and may be used worldwide wherever Visa® and Mastercard® are accepted, subject to these Terms and applicable network restrictions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 md:mt-8"
        >
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4 md:p-5">
            <div className="flex items-start gap-2.5">
              <span className="text-yellow-400 text-lg">⚠️</span>
              <div>
                <h3 className="heading-sm font-semibold text-yellow-200 mb-2">
                  Important Notice
                </h3>
                <div className="space-y-1.5 text-sm text-yellow-100/90">
                  <p>
                    • By activating and using SarafCard, you agree to comply with all terms and conditions.
                  </p>
                  <p>
                    • Violation of these terms may result in immediate card suspension or termination.
                  </p>
                  <p>
                    • SarafCard reserves the right to update these terms at any time with notice.
                  </p>
                  <p>
                    • For complete terms and conditions, please review the full documentation in your dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-6 md:mt-8"
        >
          <div className="bg-gradient-to-br from-silver/15 to-silver/5 rounded-xl p-5 border border-silver/30 backdrop-blur-sm">
            <h3 className="heading-sm font-semibold text-soft-white mb-2">
              Questions about Terms?
            </h3>
            <p className="text-sm text-silver/80 mb-4">
              If you have any questions about these terms and conditions, please contact our legal team.
            </p>
            <motion.a
              href="mailto:legal@sarafcard.io"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-silver/20 to-silver/30 rounded-lg border border-silver/40 text-soft-white font-medium hover:from-silver/30 hover:to-silver/40 transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Contact Legal Team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terms; 