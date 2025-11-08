import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-matte-black relative overflow-hidden';
  
  const variantClasses = {
    primary: `
      bg-gradient-to-br from-silver/90 via-silver to-silver/80 
      text-matte-black 
      hover:from-soft-white/90 hover:via-soft-white hover:to-soft-white/80
      shadow-[0_8px_32px_rgba(192,192,192,0.3)] 
      hover:shadow-[0_12px_40px_rgba(192,192,192,0.4)]
      border border-white/20
      backdrop-blur-md
      hover:scale-105 
      focus:ring-silver
      transform-gpu
      hover:translate-y-[-2px]
      active:translate-y-[0px]
      active:shadow-[0_4px_16px_rgba(192,192,192,0.2)]
    `,
    secondary: `
      border-2 border-silver/50 
      text-silver 
      bg-gradient-to-br from-white/5 via-white/10 to-white/5
      backdrop-blur-md
      hover:bg-gradient-to-br hover:from-silver/20 hover:via-silver/30 hover:to-silver/20
      hover:text-matte-black 
      hover:border-silver
      shadow-[0_4px_24px_rgba(192,192,192,0.2)]
      hover:shadow-[0_8px_32px_rgba(192,192,192,0.3)]
      hover:scale-105 
      focus:ring-silver
      transform-gpu
      hover:translate-y-[-2px]
      active:translate-y-[0px]
    `,
  };
  
  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const buttonContent = (
    <>
      {/* Glass shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
        animate={{ x: [-100, 300] }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          repeatDelay: 2
        }}
      />
      
      {/* Button content */}
      <motion.span
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className="flex items-center gap-2 relative z-10"
      >
        {children}
      </motion.span>
    </>
  );
  
  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98, y: 0 }}
        style={{
          background: variant === 'primary' 
            ? 'linear-gradient(135deg, rgba(192,192,192,0.9) 0%, rgba(229,229,229,1) 50%, rgba(192,192,192,0.8) 100%)'
            : undefined
        }}
      >
        {buttonContent}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98, y: disabled ? 0 : 0 }}
      style={{
        background: variant === 'primary' 
          ? 'linear-gradient(135deg, rgba(192,192,192,0.9) 0%, rgba(229,229,229,1) 50%, rgba(192,192,192,0.8) 100%)'
          : undefined
      }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
