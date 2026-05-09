import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <img 
                src="/images/hero-market.jpg" 
                alt="Our technology" 
                className="rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <Award className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">Selo de Qualidade</p>
                    <p className="text-slate-900 font-bold text-lg">Empresa Referência</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8 leading-tight">
              Inovando a conveniência urbana com <span className="text-emerald-400">tecnologia autônoma.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Nascemos da vontade de simplificar a vida das pessoas. Acreditamos que o tempo é o bem mais precioso, 
              e por isso criamos uma solução que leva o mercado até você, eliminando barreiras e burocracias.
            </p>
            
            <div className="space-y-6">
              {[
                { 
                  icon: Lightbulb, 
                  title: 'Foco em Inovação', 
                  text: 'Utilizamos IA para gestão de estoque e análise de demanda em tempo real.' 
                },
                { 
                  icon: Target, 
                  title: 'Experiência do Usuário', 
                  text: 'Cada detalhe do nosso contêiner é pensado para ser intuitivo e agradável.' 
                },
                { 
                  icon: Award, 
                  title: 'Compromisso com a Qualidade', 
                  text: 'Trabalhamos apenas com as melhores marcas e rigoroso controle sanitário.' 
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-emerald-400">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
