import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.link/6umkkd"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="text-white" size={28} fill="white" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full" />
    </motion.a>
  );
}
