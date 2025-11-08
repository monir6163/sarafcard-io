import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../public/assets/logos/latest-logo.png";

// Down arrow icon component
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  const pageItems = [
    { name: "Terms & Conditions", href: "/Terms" },
    { name: "Privacy Policy", href: "/PrivacyPolicy" },
    { name: "Refund Policy", href: "/RefundPolicy" },
    { name: "FAQ", href: "/faq" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Add a small delay to ensure the mobile menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        // Get the navbar height to account for fixed positioning
        const navbarHeight = 128; // 32 * 4 (h-32 in Tailwind)
        const elementPosition = element.offsetTop - navbarHeight;

        // Use both scrollIntoView and scrollTo for better mobile compatibility
        try {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } catch {
          // Fallback for older browsers
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }
    }, 100); // Small delay to ensure menu animation completes
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-32">
          {/* Logo - Enlarged by 4-5 times */}
          <Link href="/">
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                WebkitTapHighlightColor: "transparent",
                touchAction: "manipulation",
                userSelect: "none",
              }}
            >
              <Image
                src={logo}
                alt="SarafCard"
                height={240}
                width={120}
                className="object-contain lg:w-48 lg:h-24 w-56 h-56"
              />
            </motion.div>
          </Link>

          {/* Right side content - Navigation and Buttons */}
          <div className="flex items-center space-x-8 ml-auto">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-soft-white hover:text-silver transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Pages Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <motion.button
                  className="flex items-center space-x-1 text-soft-white hover:text-silver transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Pages</span>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-dark-gray/95 backdrop-blur-md border border-silver/20 rounded-xl shadow-xl overflow-hidden z-50"
                    >
                      {pageItems.map((item, index) => (
                        <Link key={item.name} href={item.href}>
                          <motion.div
                            className="block px-4 py-3 text-soft-white hover:text-silver hover:bg-silver/10 transition-all duration-200 font-medium text-sm cursor-pointer"
                            whileHover={{ x: 5 }}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {item.name}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Buttons - Premium metallic silver 3D styling */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="https://customer.sarafcard.io"
                className="relative group cursor-pointer touch-manipulation"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  WebkitTapHighlightColor: "transparent",
                  touchAction: "manipulation",
                  userSelect: "none",
                }}
                onTouchStart={(e) => {
                  // Ensure proper touch feedback on mobile
                  e.currentTarget.style.transform = "scale(0.95)";
                }}
                onTouchEnd={(e) => {
                  // Reset transform on touch end
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-silver/20 to-silver/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-gradient-to-r from-silver/10 to-silver/20 backdrop-blur-sm border border-silver/30 rounded-xl px-6 py-3 group-hover:from-silver/20 group-hover:to-silver/30 transition-all duration-300">
                  <span className="text-sm font-semibold bg-gradient-to-r from-silver to-white bg-clip-text text-transparent">
                    Get Started
                  </span>
                </div>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden flex flex-col space-y-1 p-2 z-60"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`w-6 h-0.5 bg-silver transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <motion.span
                className={`w-6 h-0.5 bg-silver transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <motion.span
                className={`w-6 h-0.5 bg-silver transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-silver/20 mt-4 pt-4"
              style={{
                background: "rgba(11, 11, 12, 0.3)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderRadius: "12px",
                border: "1px solid rgba(192, 192, 192, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex flex-col space-y-4 p-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-soft-white hover:text-silver transition-colors duration-300 font-medium py-2 text-left touch-manipulation"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      touchAction: "manipulation",
                      userSelect: "none",
                    }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Mobile Pages Section */}
                <div className="border-t border-silver/20 pt-4">
                  <div className="text-silver font-medium text-sm mb-3 px-2">
                    Pages
                  </div>
                  {pageItems.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        className="block text-soft-white hover:text-silver transition-colors duration-300 font-medium py-2 pl-4 text-left touch-manipulation cursor-pointer"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          WebkitTapHighlightColor: "transparent",
                          touchAction: "manipulation",
                          userSelect: "none",
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ))}
                </div>

                <div className="pt-4 space-y-3">
                  <motion.a
                    href="https://customer.sarafcard.io"
                    className="relative group block cursor-pointer touch-manipulation"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      touchAction: "manipulation",
                      userSelect: "none",
                    }}
                    onTouchStart={(e) => {
                      // Ensure proper touch feedback on mobile
                      e.currentTarget.style.transform = "scale(0.98)";
                    }}
                    onTouchEnd={(e) => {
                      // Reset transform on touch end
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-silver/20 to-silver/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="relative bg-gradient-to-r from-silver/10 to-silver/20 backdrop-blur-sm border border-silver/30 rounded-xl px-6 py-3 group-hover:from-silver/20 group-hover:to-silver/30 transition-all duration-300 text-center">
                      <span className="text-sm font-semibold bg-gradient-to-r from-silver to-white bg-clip-text text-transparent">
                        Get Started
                      </span>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
