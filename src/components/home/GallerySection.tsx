import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

import heroImg from '@/assets/hero-viper.jpg';
import drinksImg from '@/assets/drinks.jpg';
import encontrosImg from '@/assets/encontros.jpg';
import ambiente1Img from '@/assets/ambiente1.jpg';
import musicaImg from '@/assets/musica.jpg';
import djImg from '@/assets/dj.jpg';

interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { src: heroImg,      title: "Viper Experience",  category: "Atmosfera"   },
  { src: drinksImg,    title: "Drinks Autorais",   category: "Drinks"      },
  { src: encontrosImg, title: "Encontros Reais",   category: "Experiência" },
  { src: ambiente1Img, title: "O Ambiente",        category: "Atmosfera"   },
  { src: musicaImg,    title: "Música ao Vivo",    category: "Música"      },
  { src: djImg,        title: "Noites Especiais",  category: "Eventos"     },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="section-padding bg-background overflow-hidden border-t border-border/30">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
          >
            <span className="text-primary text-xs uppercase tracking-[0.4em] mb-4 block">
              A Noite em Detalhes
            </span>
            <h2 className="font-serif text-5xl md:text-7xl italic">
              Viper Gallery
            </h2>
          </motion.div>

          {/* Mosaico */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-sm cursor-pointer border border-border/20
                  ${index === 0
                    ? 'col-span-2 md:col-span-2 h-64 md:h-[480px]'
                    : 'h-48 md:h-64'
                  }`}
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-70 group-hover:opacity-100 image-warm-filter"
                />

                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

                {/* Informações no hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] uppercase tracking-widest text-primary mb-1 block">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg italic text-foreground leading-tight">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Galeria Viper"
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
}
