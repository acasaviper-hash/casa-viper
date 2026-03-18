import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { MapPin, Instagram, MessageCircle, Clock } from 'lucide-react';
import lounge from '@/assets/lounge.jpg';

const Contato = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={lounge}
            alt="Contato Viper"
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
            Contato
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
          >
            Vamos nos
            <br />
            <span className="text-primary italic">encontrar?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
          >
            Estamos prontos para receber você.
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.link/6umkkd"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-sm flex gap-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <MessageCircle className="text-green-500" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-2">Fale conosco para reservas e informações</p>
                <span className="text-primary font-medium">Enviar mensagem →</span>
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/vipertubarao"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 rounded-sm flex gap-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                  <Instagram className="text-pink-500" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Instagram</h3>
                <p className="text-muted-foreground mb-2">Acompanhe nossos eventos e novidades</p>
                <span className="text-primary font-medium">@vipertubarao →</span>
              </div>
            </motion.a>

            {/* Localização */}
            <motion.a
              href="https://maps.app.goo.gl/Kd1SJrdeVUrgxUd17"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-sm flex gap-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <MapPin className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Localização</h3>
                <p className="text-muted-foreground mb-2">Tubarão, Santa Catarina</p>
                <span className="text-primary font-medium">Ver no mapa →</span>
              </div>
            </motion.a>

            {/* Horário */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 rounded-sm flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Horário</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Quinta a Sábado: 18h às 02h</p>
                  <p>Domingo: 16h às 00h</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">
              Nos encontre aqui
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-video rounded-sm overflow-hidden border border-border/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.6!2d-49.0!3d-28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMwJzAwLjAiUyA0OcKwMDAnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Viper"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-8"
          >
            <a
              href="https://maps.app.goo.gl/Kd1SJrdeVUrgxUd17"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Abrir no Google Maps
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            A noite perfeita começa com
            <span className="text-primary italic"> uma reserva</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Garanta seu lugar e venha viver a experiência Viper.
          </p>
          <a
            href="https://wa.link/6umkkd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            Fazer uma reserva
          </a>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Contato;
