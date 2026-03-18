import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import loungeImg from '@/assets/lounge.jpg';
import drinksImg from '@/assets/drinks.jpg';
import encontrosImg from '@/assets/encontros.jpg';

const experiences = [
  {
    id: 'lounge',
    title: 'Lounge',
    subtitle: 'Conforto que convida',
    description: 'Madeira, luz quente e sofás que pedem mais uma rodada.',
    image: loungeImg,
  },
  {
    id: 'drinks',
    title: 'Drinks Autorais',
    subtitle: 'Arte em cada copo',
    description: 'Receitas exclusivas criadas para despertar os sentidos.',
    image: drinksImg,
  },
  {
    id: 'encontros',
    title: 'Encontros',
    subtitle: 'Onde histórias começam',
    description: 'O cenário perfeito para conversas que marcam.',
    image: encontrosImg,
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experiencia" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Experiência
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            A Viper em três atos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-sm aspect-[3/4] cursor-pointer"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 image-warm-filter"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="text-primary text-xs tracking-[0.2em] uppercase mb-2">
                  {exp.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                  {exp.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
