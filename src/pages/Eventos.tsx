import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Gift, Music, Users, Sparkles } from 'lucide-react';
import eventosImg from '@/assets/eventos.jpg';
import heroImg from '@/assets/hero-viper.jpg';

const features = [
  {
    icon: Gift,
    title: 'Aniversários',
    description: 'Comemore seu dia especial com a atmosfera única da Viper.',
  },
  {
    icon: Users,
    title: 'Eventos Corporativos',
    description: 'Happy hours, confraternizações e reuniões em ambiente acolhedor.',
  },
  {
    icon: Music,
    title: 'Festas Privadas',
    description: 'Reserve nosso espaço para eventos exclusivos.',
  },
  {
    icon: Sparkles,
    title: 'Experiências Personalizadas',
    description: 'Criamos pacotes sob medida para sua ocasião.',
  },
];

const Eventos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={eventosImg}
            alt="Eventos na Viper"
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
            Eventos & Aniversários
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
          >
            Celebre momentos
            <br />
            <span className="text-primary italic">inesquecíveis.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            A Viper é o cenário perfeito para suas comemorações especiais.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-sm flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
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
              Como funciona
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Simples e personalizado
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Entre em contato',
                description: 'Envie uma mensagem pelo WhatsApp com a data desejada e número de convidados.',
              },
              {
                step: '02',
                title: 'Planejamos juntos',
                description: 'Nossa equipe cria um pacote personalizado para o seu evento.',
              },
              {
                step: '03',
                title: 'Celebre conosco',
                description: 'Chegue, relaxe e aproveite. Cuidamos de todo o resto.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <span className="font-serif text-5xl text-primary/30 mb-4 block">{item.step}</span>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O que oferecemos */}
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
                O que oferecemos
              </span>
              
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Tudo para seu evento ser
                <span className="text-primary italic"> especial</span>
              </h2>

              <ul className="space-y-4">
                {[
                  'Reserva de área exclusiva',
                  'Menu personalizado de drinks e petiscos',
                  'Decoração temática (opcional)',
                  'DJ ou playlist personalizada',
                  'Equipe dedicada ao seu evento',
                  'Pacotes para diferentes orçamentos',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
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
                  src={heroImg}
                  alt="Evento na Viper"
                  className="w-full h-full object-cover image-warm-filter"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-primary/30 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
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
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Vamos criar algo
            <span className="text-primary italic"> especial?</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Entre em contato e conte-nos sobre o seu evento. 
            Nossa equipe responde em até 24 horas.
          </p>
          <a
            href="https://wa.link/6umkkd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            Falar sobre meu evento
          </a>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Eventos;
