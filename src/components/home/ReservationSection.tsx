import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  nome: string;
  data: string;
  pessoas: string;
  obs: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

const WHATSAPP_NUMBER = "5548999999999"; // Substitua pelo número real
const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL as string;

export function ReservationSection() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    data: '',
    pessoas: '2',
    obs: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const dataFormatada = formData.data
      ? new Date(formData.data + 'T12:00:00').toLocaleDateString('pt-BR')
      : '';

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          data_formatada: dataFormatada,
          origem: 'site-viper',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('Webhook error');

      setStatus('success');

      // Abre WhatsApp em paralelo com a mensagem pré-preenchida
      const message = encodeURIComponent(
        `Olá Viper! Gostaria de reservar uma mesa:\n\n*Nome:* ${formData.nome}\n*Data:* ${dataFormatada}\n*Pessoas:* ${formData.pessoas}\n*Obs:* ${formData.obs || 'Nenhuma'}`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');

    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setStatus('idle');
    setFormData({ nome: '', data: '', pessoas: '2', obs: '' });
  };

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const inputClass =
    'bg-input border border-border p-4 rounded-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none transition-colors w-full';

  return (
    <section id="reservas" className="bg-card py-24 px-6 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl mb-4 italic"
          >
            Sua mesa te espera
          </motion.h2>
          <p className="text-muted-foreground uppercase tracking-widest text-xs">
            Garanta seu lugar na nossa noite
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* Formulário */}
          {status === 'idle' || status === 'loading' || status === 'error' ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-primary/80 ml-1">
                  Nome Completo
                </label>
                <input
                  required
                  type="text"
                  placeholder="Como podemos te chamar?"
                  value={formData.nome}
                  onChange={update('nome')}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-primary/80 ml-1">
                  Data Desejada
                </label>
                <input
                  required
                  type="date"
                  value={formData.data}
                  onChange={update('data')}
                  min={new Date().toISOString().split('T')[0]}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-primary/80 ml-1">
                  Nº de Pessoas
                </label>
                <select
                  value={formData.pessoas}
                  onChange={update('pessoas')}
                  className={inputClass}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-card">
                      {n} {n === 1 ? 'Pessoa' : 'Pessoas'}
                    </option>
                  ))}
                  <option value="mais de 8" className="bg-card">
                    Mais de 8 (Evento Privado)
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-primary/80 ml-1">
                  Observações (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Aniversário, mesa no deck..."
                  value={formData.obs}
                  onChange={update('obs')}
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2 mt-4 text-center space-y-4">
                {status === 'error' && (
                  <p className="text-xs text-destructive uppercase tracking-widest">
                    Erro ao enviar. Tente novamente ou nos chame no WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary uppercase tracking-[0.2em] px-12 py-4 rounded-full text-xs w-full md:w-auto hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? 'Enviando...' : 'Solicitar Reserva via WhatsApp'}
                </button>

                <p className="text-[9px] text-muted-foreground/50 uppercase tracking-widest">
                  Sujeito a confirmação de disponibilidade da casa.
                </p>
              </div>
            </motion.form>
          ) : (
            /* Feedback de sucesso */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16 space-y-6"
            >
              <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl italic text-foreground">
                Solicitação enviada!
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                Em breve confirmaremos sua mesa. O WhatsApp foi aberto para você acompanhar.
              </p>
              <button
                onClick={reset}
                className="btn-outline text-xs uppercase tracking-widest mt-4"
              >
                Nova reserva
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
