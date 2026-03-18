import { Link } from 'react-router-dom';
import logo from '@/assets/logo-viper.png';

export function Footer() {
  return (
    <footer className="bg-card text-foreground border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Manifesto */}
          <div className="md:col-span-5">
            <img src={logo} alt="Viper" className="h-12 w-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-8">
              Um refúgio em Tubarão para quem aprecia o tempo, o brinde e a conversa.
              Aqui, a pressa não tem reserva.
            </p>
            <a
              href="https://www.instagram.com/vipertubarao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-primary hover:text-foreground transition-colors border border-primary/30 hover:border-primary/60 px-3 py-1 rounded-full inline-block"
            >
              Instagram
            </a>
          </div>

          {/* Localização & Horários */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Localização</h4>
              <p className="font-serif text-xl text-foreground">
                Tubarão, Santa Catarina
              </p>
              <a
                href="https://maps.app.goo.gl/Kd1SJrdeVUrgxUd17"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                Abrir no GPS
              </a>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Horários</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Quinta a Sábado: 18h às 02h</li>
                <li>Domingo: 16h às 00h</li>
              </ul>
            </div>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Navegação</h4>
            <nav className="flex flex-col gap-4 font-serif text-lg">
              <Link to="/sobre" className="hover:text-primary transition-colors">
                A Viper
              </Link>
              <Link to="/cardapio" className="hover:text-primary transition-colors">
                Cardápio Digital
              </Link>
              <Link to="/eventos" className="hover:text-primary transition-colors">
                Eventos Privados
              </Link>
              <Link to="/contato" className="hover:text-primary transition-colors">
                Contato
              </Link>
              <a
                href="https://wa.link/6umkkd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Reservar Mesa
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/30 pt-10">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Viper Experiências Gastronômicas. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Linha gradiente de encerramento */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
}
