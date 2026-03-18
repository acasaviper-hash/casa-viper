import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import eventosImg from '@/assets/eventos.jpg';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={eventosImg}
          alt="Eventos na Viper"
          className="w-full h-full object-cover image-warm-filter"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-6 block">
            Venha viver isso
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl text-foreground leading-tight mb-6">
            A Viper está esperando
            <br />
            <span className="text-primary italic">por você.</span>
          </h2>

          <p className="text-foreground/70 text-lg md:text-xl max-w-xl mx-auto mb-10">
            Reserve sua mesa ou comemore seu aniversário com a gente. 
            A noite perfeita está a uma mensagem de distância.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.link/6umkkd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Fazer reserva
            </a>
            <Link
              to="/eventos"
              className="btn-outline text-base"
            >
              Eventos e aniversários
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
