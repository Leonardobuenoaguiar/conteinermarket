import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'O condomínio precisa investir financeiramente?',
    answer: 'Não. Toda a implementação, instalação e manutenção do mercado autônomo é por nossa conta. Não cobramos taxas de instalação ou mensais do condomínio.'
  },
  {
    question: 'Como funciona o abastecimento dos produtos?',
    answer: 'Possuímos um sistema de gestão de estoque inteligente. Nossa equipe monitora as vendas em tempo real e realiza a reposição periódica de forma discreta, sem interferir na rotina do condomínio.'
  },
  {
    question: 'O mercado funciona mesmo sem funcionários?',
    answer: 'Sim! Utilizamos tecnologia de autoatendimento (self-checkout). O morador escolhe o produto e realiza o pagamento via totem digital. Todo o processo é monitorado por câmeras de segurança.'
  },
  {
    question: 'Como é feito o pagamento?',
    answer: 'Aceitamos as principais formas de pagamento digitais: Cartões de crédito, débito, PIX e carteiras digitais através do nosso totem de autoatendimento.'
  },
  {
    question: 'Existe suporte técnico em caso de problemas?',
    answer: 'Sim, oferecemos suporte 24h. Caso ocorra qualquer instabilidade no totem ou dúvida do usuário, temos um canal de atendimento rápido via WhatsApp e telefone.'
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-semibold tracking-wide uppercase text-sm"
          >
            Dúvidas Frequentes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6"
          >
            Perguntas Comuns
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                <motion.div 
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 text-slate-600 leading-relaxed"
                  >
                    <div className="pt-2 border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
