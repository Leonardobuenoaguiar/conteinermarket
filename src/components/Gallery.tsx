import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/images/hero-market.jpg', title: 'Exterior Premium' },
  { src: '/images/market-interior.jpg', title: 'Interior Inteligente' },
  { src: '/images/market-night.jpg', title: 'Operação 24h' },
  { src: '/images/hero-market.jpg', title: 'Design Modular' },
  { src: '/images/market-interior.jpg', title: 'Autoatendimento' },
  { src: '/images/market-night.jpg', title: 'Segurança Total' },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-semibold tracking-wide uppercase text-sm"
          >
            Nossas Unidades
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6"
          >
            Design que valoriza seu condomínio
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-3xl aspect-square cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
