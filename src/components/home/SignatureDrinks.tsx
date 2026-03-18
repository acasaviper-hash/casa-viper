import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import drinksImg from '@/assets/drinks.jpg';
import loungeImg from '@/assets/lounge.jpg';
import encontrosImg from '@/assets/encontros.jpg';

interface Drink {
  id: number;
  name: string;
  category: string;
  description: string;
  notes: string[];
  image: string;
}

const drinks: Drink[] = [
  {
    id: 1,
    name: "Viper Negroni",
    category: "Intenso & Defumado",
    description: "Nossa releitura do clássico, infusionada com madeiras nobres e um toque secreto de especiarias locais.",
    notes: ["Gin Premium", "Vermute Rosso", "Bitter", "Névoa de Carvalho"],
    image: drinksImg,
  },
  {
    id: 2,
    name: "Jardim de Tubarão",
    category: "Fresco & Floral",
    description: "Uma homenagem à nossa terra. Leve, botânico e visualmente hipnotizante.",
    notes: ["Gin infusionado com Flores", "Cordial de Limão", "Tônica Artesanal"],
    image: loungeImg,
  },
  {
    id: 3,
    name: "Noite Sem Pressa",
    category: "Doce & Complexo",
    description: "O drink que leva o nome do nosso manifesto. Notas de café e chocolate para encerrar a noite.",
    notes: ["Vodka", "Cold Brew", "Licor de Cacau", "Espuma de Avelã"],
    image: encontrosImg,
  },
];

export function SignatureDrinks() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-background text-foreground py-24 px-6 md:px-12 overflow-hidden">
      {/* Header da Seção */}
      <div className="max-w-7xl mx-auto mb-16 text-center md:text-left">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-sans uppercase tracking-[0.3em] text-sm"
        >
          Alquimia Autoral
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl mt-4 italic"
        >
          Assinaturas Viper
        </motion.h2>
      </div>

      {/* Grid de Drinks */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {drinks.map((drink, index) => (
          <motion.div
            key={drink.id}
            className="relative group cursor-pointer h-[500px] overflow-hidden rounded-sm"
            onMouseEnter={() => setHoveredId(drink.id)}
            onMouseLeave={() => setHoveredId(null)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Imagem com Zoom no Hover */}
            <motion.div
              className="absolute inset-0 z-0"
              animate={{ scale: hoveredId === drink.id ? 1.08 : 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src={drink.image}
                alt={drink.name}
                className="w-full h-full object-cover image-warm-filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />

            {/* Conteúdo do Card */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
              <span className="text-primary font-sans text-xs uppercase tracking-widest mb-2">
                {drink.category}
              </span>
              <h3 className="font-serif text-3xl mb-4">{drink.name}</h3>

              <p className="text-foreground/70 font-light text-sm leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                {drink.description}
              </p>

              {/* Notas de Sabor */}
              <AnimatePresence>
                {hoveredId === drink.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-foreground/20 pt-4"
                  >
                    <div className="flex flex-wrap gap-2">
                      {drink.notes.map((note) => (
                        <span
                          key={note}
                          className="text-[10px] border border-primary/50 px-2 py-1 rounded-full text-primary/80 uppercase tracking-tighter"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link to="/cardapio" className="btn-outline px-12 py-4 inline-block">
          Explorar Cardápio Completo
        </Link>
      </motion.div>
    </section>
  );
}
