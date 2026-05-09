import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const target = value;

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) return;
    
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-emerald-900 font-medium uppercase tracking-wide text-sm">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-emerald-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          <StatItem value="23" label="Condomínios Atendidos" suffix="+" />
          <StatItem value="5" label="Cidades Abrangidas" suffix="" /> {/* Wait, 12k cities is too many, let's say 12 cities */}
          <StatItem value="30" label="Clientes Satisfeitos" suffix="k" />
          <StatItem value="24" label="Atendimento" suffix="h" />
        </div>
        
        <div className="mt-20 bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Impacto na vida do morador</h3>
              <p className="text-emerald-100 leading-relaxed">
                Nossos dados mostram que a implementação de um mercado autônomo reduz em até 
                <span className="font-bold text-white"> 70% o deslocamento</span> de moradores para compras rápidas, 
                aumentando a percepção de segurança e valorizando o m² do condomínio.
              </p>
            </div>
            <div className="flex justify-center gap-4">
              {/* Simple CSS Visual Representation of Growth */}
              <div className="flex items-end gap-2 h-32">
                {[40, 60, 80, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-8 bg-white/30 rounded-t-lg"
                  ></motion.div>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-3xl font-bold text-white">+45%</div>
                <div className="text-xs text-emerald-900 uppercase">Crescimento Anual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
