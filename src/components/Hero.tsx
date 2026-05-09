import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-market.jpg" 
          alt="Modern Autonomous Market" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Inovação para Condomínios
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Seu condomínio com <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                mercado autônomo 24h.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Leve a conveniência de um mini mercado para dentro do seu condomínio. 
              Tecnologia de ponta, segurança total e custo zero para a administração. 
              A praticidade que seus moradores merecem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato" 
                className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20"
              >
                Solicitar Proposta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#como-funciona" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/20 text-center"
              >
                Falar com Especialista
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 max-w-md">
              {[
                'Custo Zero para o Condomínio',
                'Monitoramento 24h',
                'Instalação Expressa',
                'Autoatendimento Inteligente'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Decorative Glass Element */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/hero-market.jpg" 
                alt="Market Mockup" 
                className="rounded-2xl shadow-inner"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                <div className="bg-emerald-100 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase">Status do Sistema</p>
                  <p className="text-sm font-bold text-slate-900">100% Operacional</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
