import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-viper.jpg';

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Viper - Espaço de experiências"
          className="w-full h-full object-cover image-warm-filter"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Location badge */}
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-primary uppercase tracking-[0.35em] text-xs md:text-sm font-medium mb-6"
        >
          Tubarão &bull; SC
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6"
        >
          Aqui a noite
          <br />
          acontece{' '}
          <span className="text-primary italic">sem pressa.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto mb-10"
        >
          Drinks autorais. Música boa. Encontros que ficam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.link/6umkkd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            Reservar minha mesa
          </a>
          <a
            href="#experiencia"
            className="btn-outline text-base"
          >
            Conhecer a Viper
          </a>
        </motion.div>
      </div>

      {/* Availability nudge */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 absolute bottom-20 left-1/2 -translate-x-1/2 text-xs text-foreground/40 uppercase tracking-widest whitespace-nowrap"
      >
        Últimas mesas disponíveis para esta sexta
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
