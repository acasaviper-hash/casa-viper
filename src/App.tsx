import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViperLoader } from "@/components/layout/ViperLoader";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Cardapio from "./pages/Cardapio";
import Eventos from "./pages/Eventos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <AnimatePresence mode="wait">
          {loading && <ViperLoader onFinished={() => setLoading(false)} />}
        </AnimatePresence>

        <div
          className={`transition-opacity duration-700 ${
            loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'
          }`}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/cardapio" element={<Cardapio />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/contato" element={<Contato />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
