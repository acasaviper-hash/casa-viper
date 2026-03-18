import { motion } from 'framer-motion';
import ambienteImg from '@/assets/ambiente1.jpg';

interface Testimonial {
  id: number;
  handle: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  { id: 1, handle: "@marcos_santos", quote: "Noite impecável, os drinks surpreendem a cada pedido." },
  { id: 2, handle: "@_beatrizsilva", quote: "Atendimento de excelência, ambiente único em Tubarão. Voltarei!" },
  { id: 3, handle: "@roberto_arq", quote: "Gastrobar com personalidade. Sofisticado do jeito certo." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function TestimonialsSection() {
  return (
    <section className="relative bg-background text-foreground py-24 overflow-hidden">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={ambienteImg}
          alt="Ambiente Viper"
          className="w-full h-full object-cover opacity-20 grayscale image-warm-filter"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        {/* Header */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary uppercase tracking-[0.4em] text-xs md:text-sm mb-6 block"
        >
          A Noite Acontece
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-20 italic max-w-5xl leading-tight"
        >
          Encontros Reais,
          <br />
          Momentos Sem Pressa.
        </motion.h2>

        {/* Depoimentos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              className="glass-card p-8 rounded-sm text-left flex flex-col justify-between group hover:border-primary/50 transition-colors duration-300"
            >
              <div>
                <p className="text-primary text-sm mb-6 tracking-wide group-hover:text-primary/80 transition-colors">
                  {t.handle}
                </p>
                <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 flex-shrink-0"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-[10px] uppercase tracking-widest">Post verificado no local</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 md:mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.link/6umkkd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-16 py-4 inline-flex items-center gap-3"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.56 5.338-11.891 11.903-11.891 3.181 0 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.237 3.484 8.417 0 6.565-5.332 11.899-11.9 11.899-2.01 0-3.988-.511-5.741-1.477l-6.258 1.674zm6.012-3.488c1.615.961 3.238 1.461 4.881 1.461 5.489 0 9.954-4.468 9.954-9.956 0-2.657-1.034-5.155-2.91-7.032-1.878-1.876-4.373-2.91-7.031-2.91-5.491 0-9.96 4.469-9.96 9.956 0 1.83.511 3.608 1.479 5.148l-.934 3.414 3.521-.941zm10.743-7.518c-.287-.145-1.7-.838-1.963-.933-.263-.095-.455-.145-.646.145-.192.29-.74.933-.907 1.123-.167.19-.335.215-.62.071-.288-.146-1.21-.444-2.306-1.417-.852-.756-1.428-1.688-1.595-1.978-.167-.29-.018-.446.126-.59.13-.13.287-.335.431-.5.144-.165.192-.28.287-.465.096-.185.048-.348-.024-.492-.071-.145-.646-1.554-.885-2.126-.233-.556-.47-.481-.646-.49-.167-.008-.358-.01-.55-.01s-.501.071-.763.357c-.262.288-.999.974-.999 2.375s1.022 2.75 1.166 2.943c.143.194 2.012 3.064 4.876 4.298.682.293 1.213.468 1.626.598.683.217 1.306.186 1.8.113.55-.082 1.7-.692 1.94-1.358.24-.666.24-1.237.167-1.358-.072-.12-.263-.195-.55-.339z" />
            </svg>
            Quero viver esta noite
          </a>
        </motion.div>
      </div>
    </section>
  );
}
