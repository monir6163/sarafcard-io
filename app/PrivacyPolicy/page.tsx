"use client";

import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-matte-black text-soft-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-matte-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-silver/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-silver/5 rounded-full blur-2xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
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
              <span className="text-silver text-sm font-medium">Privacy</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
              Privacy Policy
            </h1>

            <p className="text-lg text-silver max-w-2xl mx-auto">
              Learn how we collect, use, and protect your personal information
              when you use our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-8 md:py-12 bg-matte-black relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-silver/10 to-silver/5 rounded-xl border border-silver/20 backdrop-blur-sm p-6 md:p-8"
          >
            <div className="text-silver/90 leading-relaxed space-y-6">
              <div className="mb-6">
                <p className="text-sm text-silver/80 font-medium mb-3">
                  Last Updated: September 17, 2025
                </p>
                <p className="text-sm">
                  This Privacy Policy explains how SarafCard.io
                  (&quot;SarafCard,&quot; &quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;) collects, uses, shares, and protects your
                  personal information when you use our website, customer
                  portal, and prepaid card services (the &quot;Service&quot;).
                  By accessing or using the Service, you confirm that you have
                  read and understood this Policy.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    1. DEFINITIONS
                  </h3>
                  <p className="text-sm mb-2">
                    <strong>Personal Data:</strong> Any information that
                    identifies or relates to an individual, including what is
                    defined as &quot;personal information&quot; under applicable
                    data protection laws.
                  </p>
                  <p className="text-sm">
                    <strong>Processing:</strong> Any operation performed on
                    Personal Data, such as collection, storage, transfer, or
                    deletion.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    2. ELIGIBILITY
                  </h3>
                  <p className="text-sm">
                    SarafCard services are available only to individuals who are
                    18 years or older (or the age of majority in their
                    jurisdiction). We do not knowingly collect data from persons
                    under 18.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    3. DATA WE COLLECT
                  </h3>
                  <p className="text-sm mb-2">
                    We may collect the following Personal Data:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>
                      <strong>Identity Data:</strong> First name, last name,
                      email, phone number, date of birth, government-issued ID
                      (if required for KYC).
                    </li>
                    <li>
                      <strong>Contact Data:</strong> Address information, if
                      necessary for verification.
                    </li>
                    <li>
                      <strong>Transaction Data:</strong> Card redemptions,
                      spending activity, transaction limits, wallet linking
                      (Apple Pay, Google Pay).
                    </li>
                    <li>
                      <strong>Technical Data:</strong> Device type, browser, IP
                      address, operating system.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Login history, redemption
                      activity, portal interactions.
                    </li>
                    <li>
                      <strong>Compliance Data:</strong> Information from KYC/AML
                      checks required by law.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    4. HOW WE USE YOUR DATA
                  </h3>
                  <p className="text-sm mb-2">
                    Your Personal Data may be used to:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Deliver and manage prepaid card services.</li>
                    <li>
                      Verify identity and comply with KYC/AML regulations.
                    </li>
                    <li>Process payments and enforce transaction limits.</li>
                    <li>Provide security features such as 3D Secure (3DS).</li>
                    <li>
                      Prevent fraud, abuse, and prohibited activities (e.g.,
                      gambling, betting, adult content, restricted countries).
                    </li>
                    <li>
                      Communicate with you about updates, security alerts, and
                      promotions.
                    </li>
                    <li>
                      Comply with applicable laws and issuer requirements.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    5. LEGAL BASIS & CONSENT
                  </h3>
                  <p className="text-sm mb-2">
                    SarafCard is operated under the laws of its place of
                    incorporation. While we follow international best practices
                    (e.g., GDPR, CCPA, PCI-DSS), we are not legally bound by EU
                    or California-specific laws unless required by our operating
                    jurisdiction.
                  </p>
                  <p className="text-sm mb-2">
                    By using SarafCard, you explicitly:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>
                      Consent to the collection and processing of your data
                      outside your jurisdiction, including in Canada, the United
                      States, or other regions where SarafCard or its partners
                      operate.
                    </li>
                    <li>
                      Accept that SarafCard may voluntarily honor privacy
                      requests (e.g., access, correction, deletion) on a
                      good-faith basis, but without creating legal obligations
                      under GDPR/CCPA.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    6. YOUR RIGHTS
                  </h3>
                  <p className="text-sm mb-2">
                    Depending on your jurisdiction, you may have rights to:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Access the data we hold about you.</li>
                    <li>Request correction or deletion.</li>
                    <li>Restrict or object to processing.</li>
                    <li>Withdraw consent to marketing communications.</li>
                  </ul>
                  <p className="text-sm mt-2">
                    To submit a request, contact us at privacy@sarafcard.io with
                    the subject line &quot;Privacy Request.&quot; We may require
                    proof of identity before processing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    7. DATA SHARING
                  </h3>
                  <p className="text-sm mb-2">
                    We may share Personal Data with:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>
                      Issuing financial institutions (to deliver prepaid card
                      services).
                    </li>
                    <li>KYC/AML providers (for identity verification).</li>
                    <li>
                      Payment processors and gateways (PCI-DSS certified).
                    </li>
                    <li>
                      Fraud prevention partners (to block unauthorized or
                      prohibited use).
                    </li>
                    <li>
                      Regulators and law enforcement, where legally required.
                    </li>
                  </ul>
                  <p className="text-sm mt-2">We never sell Personal Data.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    8. DATA RETENTION
                  </h3>
                  <p className="text-sm mb-2">
                    We retain Personal Data only as long as necessary to:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Provide prepaid card services.</li>
                    <li>Comply with AML/KYC record-keeping laws.</li>
                    <li>Resolve disputes or enforce our Terms.</li>
                  </ul>
                  <p className="text-sm mt-2">
                    Once retention is no longer required, data will be securely
                    deleted.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    9. SECURITY MEASURES
                  </h3>
                  <p className="text-sm mb-2">
                    We use industry-standard protections, including:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>End-to-end encryption of sensitive data.</li>
                    <li>Multi-factor authentication for account access.</li>
                    <li>PCI-DSS compliance for cardholder data.</li>
                    <li>
                      Monitoring and detection of suspicious transactions.
                    </li>
                  </ul>
                  <p className="text-sm mt-2">
                    Despite these safeguards, no system is fully secure. You use
                    SarafCard at your own risk.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    10. INTERNATIONAL DATA TRANSFERS
                  </h3>
                  <p className="text-sm">
                    Your data may be transferred and processed outside your
                    country of residence, including in jurisdictions where
                    SarafCard or its partners operate. By using the Service, you
                    consent to such transfers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    11. CHILDREN&apos;S PRIVACY
                  </h3>
                  <p className="text-sm">
                    SarafCard does not provide services to individuals under 18
                    years of age. If we become aware that data has been
                    collected from someone under 18, we will delete it
                    immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    12. POLICY UPDATES
                  </h3>
                  <p className="text-sm">
                    We may revise this Privacy Policy from time to time. Updates
                    will be posted on this page with a new &quot;Last
                    Updated&quot; date. If material changes occur, we may notify
                    you by email or through the Platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    13. CONTACT US
                  </h3>
                  <p className="text-sm mb-2">
                    For questions or privacy-related requests:
                  </p>
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>SarafCard Privacy Office</strong>
                    </p>
                    <p>📧 Email: privacy@sarafcard.io</p>
                    <p>📧 Support: support@sarafcard.io</p>
                    <p>🌐 Website: www.sarafcard.io</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
