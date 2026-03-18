import { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '@/assets/logo-viper.png';

interface ViperLoaderProps {
  onFinished: () => void;
}

export function ViperLoader({ onFinished }: ViperLoaderProps) {
  useEffect(() => {
    const timer = setTimeout(onFinished, 2200);
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center gap-8"
    >
      {/* Logo */}
      <motion.img
        src={logo}
        alt="Viper"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-16 w-auto"
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
      >
        Aqui a noite acontece sem pressa
      </motion.p>

      {/* Barra de progresso */}
      <div className="w-40 h-px bg-border/50 overflow-hidden rounded-full">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="h-full bg-primary"
        />
      </div>
    </motion.div>
  );
}
