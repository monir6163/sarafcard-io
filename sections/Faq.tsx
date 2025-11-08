import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  answer: string;
  warning?: string;
  note?: string;
  restrictions?: string[];
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: "What is SarafCard?",
      answer: "SarafCard is the best Worldwide Spending Freedom offering instant virtual Visa and Mastercard prepaid cards. Perfect gift card alternative for global digital payments with instant activation and bank-level security. It enables secure, flexible digital payments and works with Apple Pay and Google Pay for seamless online and contactless transactions."
    },
    {
      question: "How do I activate or redeem my card?",
      answer: "Visit the SarafCard dashboard, enter your redemption code and complete the identity verification process.",
      warning: "If you're connected via a VPN, using Tor, or accessing SarafCard from a restricted country, your redemption will automatically fail due to enforced security and compliance protocols."
    },
    {
      question: "Where can I use SarafCard?",
      answer: "SarafCard is accepted at most online merchants and in-store terminals that support Visa or Mastercard, including contactless payments through Apple Pay or Google Pay.",
      note: "Cash withdrawals, ATM access, and physical card swipes are not supported."
    },
    {
      question: "Which countries and merchants are restricted?",
      answer: "Use of SarafCard is not allowed in certain countries due to regulatory restrictions and issuer policies.",
      restrictions: ["Afghanistan", "Algeria", "Angola", "Belarus", "Bosnia and Herzegovina", "Congo", "Côte d'Ivoire", "Crimea", "Cuba", "El Salvador", "Guyana", "Honduras", "Iran", "Iraq", "Lao People's Republic", "Libya", "Myanmar", "North Korea", "Panama", "Papua New Guinea", "Russia", "South Sudan", "Sudan", "Syria", "Uganda", "Ukraine", "Venezuela", "Yemen", "Zimbabwe"],
      note: "Each card may have a different restricted countries list based on the issuer and program. Please review the specific 'Restricted Countries' section on your dashboard or card information page before attempting activation or use. Gambling, betting services, and adult content merchants are strictly prohibited."
    },
    {
      question: "Can I use SarafCard while on a VPN or proxy?",
      answer: "No. Accessing SarafCard via VPNs, Tor, or proxy networks will result in failed redemptions and may permanently block the card. Always use a secure, direct internet connection from a supported country."
    },
    {
      question: "How long is my card valid?",
      answer: "Each SarafCard is valid for 3 years from the date of activation. The expiration is automatically enforced."
    },
    {
      question: "What happens to my balance after the card expires?",
      answer: "Any remaining balance will be automatically dissolved after expiration. Funds are non-refundable and cannot be recovered once the card is expired."
    },
    {
      question: "Can I cancel or return a card?",
      answer: "If your card has not been activated, contact the reseller from whom you purchased the card. If the card is already activated, it is considered final and non-refundable."
    },
    {
      question: "Can I get a refund?",
      answer: "Refunds are only available for duplicate charges, mistaken billing, or verified technical failures during activation. Contact support@sarafcard.io with full documentation within 7–10 business days of the issue."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our team through email at support@sarafcard.io or use the support request form when logged in to your dashboard. We typically respond within 1–2 business days."
    },
    {
      question: "Is SarafCard secure?",
      answer: "Yes. SarafCard operates under strict security protocols, including PCI-DSS certified systems, tokenized card data, end-to-end encryption, and real-time fraud monitoring with IP restriction enforcement."
    },
    {
      question: "Are there any fees or usage limits?",
      answer: "Yes. Each card may include FX fees for non-USD transactions, transaction limits per card or program, and processing or issuance fees if applicable. You can view all applicable fees and limits in the Terms section or within your dashboard prior to using the card."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 md:py-12 bg-matte-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-silver/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-silver/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span className="text-silver text-sm font-medium">Support</span>
          </motion.div>

          <h2 className="heading-lg text-soft-white mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-body text-silver max-w-2xl mx-auto">
            Find answers to common questions about SarafCard, activation, usage, and policies.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-silver/10 to-silver/5 rounded-xl border border-silver/20 backdrop-blur-sm overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFaq(index)}
                className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-silver/5 transition-colors duration-300"
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.995 }}
              >
                <h3 className="heading-sm font-semibold text-soft-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-silver">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-4 space-y-3">
                      <p className="text-silver/90 leading-relaxed text-sm">
                        {faq.answer}
                      </p>

                      {faq.restrictions && (
                        <div className="bg-silver/5 rounded-lg p-3 border border-silver/10">
                          <p className="text-silver/80 text-sm mb-2 font-medium">Restricted Countries:</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                            {faq.restrictions.map((country, idx) => (
                              <span key={idx} className="text-silver/70 text-xs">
                                • {country}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {faq.warning && (
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-yellow-400 text-sm">⚠️</span>
                            <p className="text-yellow-200/90 text-xs leading-relaxed">
                              <strong>Important:</strong> {faq.warning}
                            </p>
                          </div>
                        </div>
                      )}

                      {faq.note && (
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 text-sm">ℹ️</span>
                            <p className="text-blue-200/90 text-xs leading-relaxed">
                              <strong>Note:</strong> {faq.note}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 md:mt-10"
        >
          <div className="bg-gradient-to-br from-silver/15 to-silver/5 rounded-xl p-6 border border-silver/30 backdrop-blur-sm">
            <h3 className="heading-sm font-semibold text-soft-white mb-3">
              Still have questions?
            </h3>
            <p className="text-silver/80 mb-4 text-sm">
              Our support team is here to help you with any questions or concerns.
            </p>
            <motion.a
              href="mailto:support@sarafcard.io"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-silver/20 to-silver/30 rounded-xl border border-silver/40 text-soft-white font-medium hover:from-silver/30 hover:to-silver/40 transition-all duration-300 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Contact Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
