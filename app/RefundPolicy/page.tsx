"use client";

import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function RefundPolicy() {
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
              <span className="text-silver text-sm font-medium">Policy</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-soft-white mb-4">
              Refund Policy
            </h1>

            <p className="text-lg text-silver max-w-2xl mx-auto">
              Learn about our refund and cancellation policies for SarafCard
              services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Refund Content */}
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
                  At SarafCard.io, we provide access to instant, non-reloadable
                  prepaid cards and related services. Because these products are
                  delivered digitally and tied to regulated financial processes,
                  all orders are considered final once issued.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    1. Service Finality
                  </h3>
                  <p className="text-sm mb-2">
                    When you redeem a code or purchase a prepaid card, the
                    product is created and activated in real-time. For this
                    reason:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>
                      Orders cannot be reversed once the code has been redeemed
                      or the card has been issued.
                    </li>
                    <li>Unused or inactive cards cannot be refunded.</li>
                    <li>
                      Any balance remaining after a card&apos;s expiry date will
                      be automatically dissolved and is non-refundable.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    2. Order Cancellation
                  </h3>
                  <p className="text-sm mb-2">
                    You may request an order cancellation only if:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                    <li>
                      The prepaid card has not yet been issued or displayed in
                      your portal.
                    </li>
                    <li>
                      The redemption code has not been activated, used, or
                      shared.
                    </li>
                    <li>
                      The cancellation request is submitted within 1 hour of
                      completing the purchase.
                    </li>
                  </ul>
                  <p className="text-sm">
                    To request a cancellation, please email support@sarafcard.io
                    with your Order ID and the subject line:
                  </p>
                  <div className="bg-silver/10 border border-silver/20 rounded-lg p-3 mt-2">
                    <p className="text-sm font-mono text-silver">
                      &quot;Order Cancellation Request – [Your Order ID]&quot;
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    3. Refund Eligibility
                  </h3>
                  <p className="text-sm mb-2">
                    Refunds are strictly limited to the following circumstances:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                    <li>A verified system error prevented card delivery.</li>
                    <li>You were charged more than once for the same order.</li>
                    <li>
                      A compliance or technical issue on SarafCard&apos;s side
                      prevented card issuance.
                    </li>
                  </ul>

                  <p className="text-sm mb-2 font-medium text-soft-white">
                    Approved refunds will:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1 mb-3">
                    <li>
                      Be credited back to the original payment method, where
                      possible.
                    </li>
                    <li>Be processed within 10 business days of approval.</li>
                  </ul>

                  <p className="text-sm mb-2 font-medium text-soft-white">
                    Refunds are not provided for:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Change of mind after purchase.</li>
                    <li>Inactivity, non-use, or expired balances.</li>
                    <li>
                      Misuse or fraudulent use of card details after delivery.
                    </li>
                    <li>
                      Transactions declined due to sanctions, restricted
                      countries, or prohibited merchants (e.g., gambling,
                      betting, adult, pornography).
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    4. Platform Integrity & Abuse Prevention
                  </h3>
                  <p className="text-sm mb-2">
                    SarafCard reserves the right to:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Deny refunds where suspicious activity is detected.</li>
                    <li>
                      Suspend or terminate accounts found abusing refund
                      requests.
                    </li>
                    <li>
                      Report fraudulent or unlawful activity to issuing
                      institutions and regulators.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    5. Support Process
                  </h3>
                  <p className="text-sm mb-2">
                    For assistance with cancellations or refund eligibility,
                    please email support@sarafcard.io and include:
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
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    6. Compliance Notice
                  </h3>
                  <p className="text-sm mb-2">
                    SarafCard operates in cooperation with licensed financial
                    institutions and complies with:
                  </p>
                  <ul className="text-sm list-disc pl-5 space-y-1 mb-2">
                    <li>PCI-DSS (secure card data handling)</li>
                    <li>
                      KYC/AML obligations under international financial
                      regulations
                    </li>
                    <li>
                      Best-practice privacy standards (GDPR, CCPA) voluntarily,
                      but not as binding law
                    </li>
                  </ul>
                  <p className="text-sm">
                    Refunds and cancellations may require identity verification
                    before processing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    7. Our Commitment
                  </h3>
                  <p className="text-sm mb-2">
                    While digital prepaid cards cannot be refunded once
                    consumed, we commit to acting in good faith to resolve
                    legitimate issues fairly and quickly. Our goal is to ensure
                    transparency, trust, and a safe experience for every
                    customer.
                  </p>
                  <p className="text-sm font-medium text-soft-white">
                    Thank you for choosing SarafCard.io.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-soft-white mb-2">
                    8. Contact Information
                  </h3>
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>SarafCard Support</strong>
                    </p>
                    <p>📧 Email: support@sarafcard.io</p>
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
