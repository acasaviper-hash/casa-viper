import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function ManifestoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-6 block">
            Nossa essência
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-relaxed mb-8">
            Não é sobre a pressa de chegar.
            <br />
            <span className="text-primary italic">É sobre a arte de ficar.</span>
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A Viper é um espaço onde o tempo desacelera. Onde cada drink conta uma história, 
            cada conversa tem seu ritmo, e cada encontro deixa marca. Aqui, você é convidado 
            a estar presente.
          </p>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </div>
    </section>
  );
}
