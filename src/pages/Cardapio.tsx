import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { supabase } from '@/lib/supabase';
import drinksImg from '@/assets/drinks.jpg';

interface MenuItem {
  id: string;
  category: string;
  name: string;
  price: number;
  description: string;
  sort_order: number;
}

const CATEGORIES = ['Drinks', 'Gastronomia', 'Cervejas', 'Vinhos'];

const Cardapio = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const [menuData, setMenuData] = useState<Record<string, MenuItem[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data } = await supabase
        .from('menu_items')
        .select('*')
        .eq('active', true)
        .order('sort_order');

      if (data) {
        const grouped = data.reduce<Record<string, MenuItem[]>>((acc, item) => {
          if (!acc[item.category]) acc[item.category] = [];
          acc[item.category].push(item);
          return acc;
        }, {});
        setMenuData(grouped);
      }
      setLoading(false);
    };

    fetchMenu();
  }, []);

  const currentItems = menuData[activeTab] ?? [];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={drinksImg}
            alt="Drinks Viper"
            className="w-full h-full object-cover image-warm-filter opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-sm tracking-[0.3em] uppercase mb-6 block"
          >
            Cardápio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
          >
            Cada sabor, uma
            <br />
            <span className="text-primary italic">experiência.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Drinks autorais, clássicos reimaginados e petiscos para compartilhar.
          </motion.p>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-card pb-24 border-t border-border/30">
        {/* Sticky Tab Nav */}
        <nav className="sticky top-16 z-30 bg-card/90 backdrop-blur-md border-b border-border/30 overflow-x-auto no-scrollbar">
          <div className="flex justify-center gap-10 px-8 py-5 min-w-max mx-auto">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-2 transition-colors"
              >
                <span
                  className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    activeTab === tab
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </span>
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabMenu"
                    className="absolute -bottom-[21px] left-0 right-0 h-[1px] bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Lista textual */}
        <div className="max-w-4xl mx-auto px-6 mt-16 min-h-[40vh]">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xs uppercase tracking-widest text-muted-foreground"
              >
                Carregando...
              </motion.div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-0"
              >
                {currentItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group border-b border-border/30 py-10 last:border-b-0"
                  >
                    <div className="flex justify-between items-baseline mb-3 gap-4">
                      <h3 className="font-serif text-3xl md:text-4xl text-foreground">
                        {item.name}
                      </h3>
                      <span className="text-sm text-muted-foreground/40 tracking-tighter whitespace-nowrap shrink-0">
                        — {item.price}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl italic">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Nota de encerramento */}
        {!loading && (
          <div className="mt-24 text-center px-10">
            <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground/30 mb-3">
              Tubarão • SC
            </p>
            <p className="font-serif italic text-muted-foreground/40 text-sm">
              Aproveite cada nota, cada aroma. Sem pressa.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Gostou do que viu?
          </h2>
          <p className="text-muted-foreground mb-8">
            Reserve sua mesa e venha experimentar pessoalmente.
          </p>
          <a
            href="https://wa.link/6umkkd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Fazer uma reserva
          </a>
        </motion.div>
      </section>

      {/* Botão flutuante */}
      <a
        href="https://wa.link/6umkkd"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar via WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary/80 text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform active:scale-95 animate-glow-pulse"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
      </a>
    </Layout>
  );
};

export default Cardapio;
