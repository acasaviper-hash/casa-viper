import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import ambiente1 from '@/assets/ambiente1.jpg';
import musica from '@/assets/musica.jpg';
import encontros from '@/assets/encontros.jpg';

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={ambiente1}
            alt="Viper ambiente"
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
            Sobre nós
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
          >
            A Viper é mais do que
            <br />
            <span className="text-primary italic">um lugar.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            É um convite para desacelerar, conectar e viver momentos que importam.
          </motion.p>
        </div>
      </section>

      {/* Nossa história */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
                Nossa história
              </span>
              
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Nascemos do desejo de criar
                <span className="text-primary italic"> conexões reais</span>
              </h2>

              <div className="space-y-6 text-muted-foreground">
                <p>
                  A Viper surgiu da vontade de oferecer algo diferente: um espaço onde as pessoas 
                  pudessem chegar sem hora para ir embora, onde cada detalhe foi pensado para 
                  proporcionar conforto e acolhimento.
                </p>
                <p>
                  Nossa arquitetura combina madeira, luz quente e natureza para criar uma atmosfera 
                  única. Cada cantinho foi desenhado para que você se sinta em casa, mas com a 
                  magia de estar em um lugar especial.
                </p>
                <p>
                  Aqui, a música é trilha sonora, não competição. Os drinks são autorais, 
                  não industriais. E as conversas são de verdade.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={musica}
                  alt="Música na Viper"
                  className="w-full h-full object-cover image-warm-filter"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-primary/30 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
              O que nos move
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Nossos valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Autenticidade',
                description: 'Cada drink, cada nota musical, cada detalhe da decoração reflete quem somos de verdade.',
              },
              {
                title: 'Conexão',
                description: 'Acreditamos que os melhores momentos da vida acontecem quando estamos verdadeiramente presentes.',
              },
              {
                title: 'Acolhimento',
                description: 'Você é nosso convidado. E todo convidado merece se sentir especial.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card p-8 rounded-sm text-center"
              >
                <h3 className="font-serif text-2xl text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={encontros}
            alt="Encontros na Viper"
            className="w-full h-full object-cover image-warm-filter"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Venha conhecer a Viper
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              A melhor forma de entender o que somos é vivendo a experiência.
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
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
