import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import logo from '../public/assets/logos/sarafcard-logo-latest.png';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black bg-opacity-50 backdrop-blur-md"
    >
      <div className="flex items-center">
        <Link href="/">
            <Image
                src={logo}
                alt="SarafCard Logo"
                width={240}
                height={120}
                className="object-contain lg:w-48 lg:h-24 w-56 h-56"
              />
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#features" passHref><a className="text-silver hover:text-white transition-colors">Features</a></Link>
        <Link href="#how-it-works" passHref><a className="text-silver hover:text-white transition-colors">How It Works</a></Link>
        <Link href="#contact" passHref><a className="text-silver hover:text-white transition-colors">Contact</a></Link>
      </nav>
      <div>
        <Link href="https://customer.sarafcard.io/" passHref>
          <a className="
            px-6 py-3 text-white font-semibold rounded-xl
            bg-white/10 backdrop-blur-lg
            border border-solid border-white/20
            shadow-lg shadow-black/20
            hover:bg-white/20 hover:border-white/30
            transition-all duration-300
            transform hover:scale-105
            cursor-pointer touch-manipulation
          "
          style={{ 
            WebkitTapHighlightColor: 'transparent',
            touchAction: 'manipulation',
            userSelect: 'none'
          }}
          onTouchStart={(e) => {
            // Ensure proper touch feedback on mobile
            e.currentTarget.style.transform = 'scale(0.95)';
          }}
          onTouchEnd={(e) => {
            // Reset transform on touch end
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          >
            Redeem Card
          </a>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header; 