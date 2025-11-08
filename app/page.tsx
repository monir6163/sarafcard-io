"use client";

import Cta from "@/sections/Cta";
import Faq from "@/sections/Faq";
import Features from "@/sections/Features";
import HowItWorks from "@/sections/HowItWorks";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-matte-black"
    >
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Faq />
        <Cta />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
