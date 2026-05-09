import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Package, ShoppingBag, Activity } from 'lucide-react';

const steps = [
  {
    title: 'Instalação do Contêiner',
    description: 'Analisamos o melhor local do seu condomínio e instalamos nossa estrutura modular de forma rápida e limpa.',
    icon: Settings,
    step: '01'
  },
  {
    title: 'Abastecimento Inteligente',
    description: 'Nossa equipe cuida de todo o estoque. Utilizamos dados para garantir que os produtos preferidos estejam sempre disponíveis.',
    icon: Package,
    step: '02'
  },
  {
    title: 'Compra via Autoatendimento',
    description: 'O morador escolhe o produto, escaneia o código e paga via totem digital. Simples, rápido e sem filas.',
    icon: ShoppingBag,
    step: '03'
  },
  {
    title: 'Monitoramento e Suporte',
    description: 'Acompanhamos tudo em tempo real através de câmeras e sensores, garantindo segurança e suporte 24/7.',
    icon: Activity,
    step: '04'
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-semibold tracking-wide uppercase text-sm"
          >
            Processo Simples
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6"
          >
            Como funciona a implementação?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Tudo é projetado para ser invisível para a administração do condomínio e 
            extremamente prático para quem utiliza.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-emerald-500 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-500/30 rotate-3 group-hover:rotate-0 transition-transform">
                    <step.icon className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
