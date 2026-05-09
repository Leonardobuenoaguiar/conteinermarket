import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  ShieldCheck, 
  Zap, 
  Smile, 
  Cpu, 
  CreditCard, 
  Coins 
} from 'lucide-react';

const benefits = [
  {
    title: 'Funcionamento 24h',
    description: 'Seus moradores têm acesso a produtos essenciais a qualquer hora do dia ou da noite, sem exceções.',
    icon: Clock,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10'
  },
  {
    title: 'Custo Zero',
    description: 'Implementação e manutenção sem custos operacionais para o condomínio. Nós cuidamos de tudo.',
    icon: Coins,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10'
  },
  {
    title: 'Segurança Total',
    description: 'Sistemas de monitoramento por câmeras e controle de acesso rigoroso para máxima tranquilidade.',
    icon: ShieldCheck,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10'
  },
  {
    title: 'Instalação Rápida',
    description: 'Nossos contêineres são modulares e prontos para operar. Instalação ágil e sem obras complexas.',
    icon: Zap,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10'
  },
  {
    title: 'Máxima Comodidade',
    description: 'Elimine a necessidade de deslocamentos desnecessários. O mercado está a poucos passos de casa.',
    icon: Smile,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10'
  },
  {
    title: 'Tecnologia Smart',
    description: 'Autoatendimento intuitivo com interface moderna para uma experiência de compra fluida.',
    icon: Cpu,
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-500/10'
  },
  {
    title: 'Pagamento Automatizado',
    description: 'Diversas formas de pagamento digital via totem, garantindo rapidez e segurança na transação.',
    icon: CreditCard,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10'
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-semibold tracking-wide uppercase text-sm"
          >
            Vantagens Exclusivas
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6"
          >
            Por que escolher nosso <br className="hidden md:block" /> mercado autônomo?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Unimos tecnologia e conveniência para transformar a rotina dos moradores, 
            valorizando o imóvel e trazendo modernidade para o condomínio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 ${benefit.bgColor} ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
