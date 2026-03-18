import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import drinksImg from '@/assets/drinks.jpg';

export function MenuPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={drinksImg}
                alt="Drinks autorais"
                className="w-full h-full object-cover image-warm-filter"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/30 rounded-sm -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Cardápio
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Sabores que
              <br />
              <span className="text-primary italic">contam histórias</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Drinks autorais desenvolvidos com técnica e afeto. 
              Gastronomia pensada para compartilhar. 
              Cada item do cardápio é uma experiência.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary/50" />
                <span className="text-foreground/80 text-sm">Drinks clássicos e autorais</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary/50" />
                <span className="text-foreground/80 text-sm">Cervejas artesanais selecionadas</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary/50" />
                <span className="text-foreground/80 text-sm">Petiscos e porções para compartilhar</span>
              </div>
            </div>

            <Link
              to="/cardapio"
              className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="text-base font-medium">Ver cardápio completo</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
