import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Building2, MapPin, Users, Square } from 'lucide-react';

const ContactForm = () => {
  const { register, formState: { errors } } = useForm();


  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 hidden lg:block skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Contato</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
                Leve a inovação para o seu <span className="text-emerald-500">condomínio.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10">
                Preencha o formulário ao lado e receba uma proposta personalizada 
                para a instalação de um mercado autônomo no seu condomínio.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'WhatsApp', value: '(11) 99999-9999' },
                  { icon: Mail, label: 'E-mail', value: 'contato@containermarket.com.br' },
                  { icon: MapPin, label: 'Sede', value: 'Av. Paulista, São Paulo - SP' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">{item.label}</p>
                      <p className="text-slate-900 font-bold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <form 
  action="https://formspree.io/f/mqenywra"
  method="POST"
  className="grid md:grid-cols-2 gap-6"
>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-slate-400 text-sm font-medium mb-2">Nome do Responsável</label>
                <div className="relative">
                  <input 
                    {...register('name', { required: true })}
                    className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="Ex: João Silva"
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1">Campo obrigatório</span>}
                </div>
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-slate-400 text-sm font-medium mb-2">Nome do Condomínio</label>
                <div className="relative">
                  <input 
                    {...register('condo', { required: true })}
                    className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    placeholder="Condomínio Solar"
                  />
                  {errors.condo && <span className="text-red-400 text-xs mt-1">Campo obrigatório</span>}
                </div>
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-slate-400 text-sm font-medium mb-2">Cidade</label>
                <input 
                  {...register('city', { required: true })}
                  className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="São Paulo"
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-slate-400 text-sm font-medium mb-2">Telefone / WhatsApp</label>
<input 
  type="tel"
  required
  pattern="[0-9\s\(\)\-]+"
  {...register('phone', { required: true })}
  className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
  placeholder="(11) 99999-9999"
/>
              </div>

              <div className="col-span-2">
                <label className="block text-slate-400 text-sm font-medium mb-2">E-mail</label>
               <input 
  type="email"
  required
  {...register('email', { required: true })}
  className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
  placeholder="email@condominio.com"
/>
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-slate-400 text-sm font-medium mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" /> Quantidade de Moradores
                </label>
                <input 
                  {...register('residents')}
                  className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="Ex: 200"
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-slate-400 text-sm font-medium mb-2 flex items-center gap-2">
                  <Square className="w-4 h-4" /> Espaço Disponível
                </label>
                <input 
                  {...register('space')}
                  className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="Ex: 10m²"
                />
              </div>

              <div className="col-span-2 mt-4">
                <button 
                  type="submit" 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 group"
                >
                  Solicitar Proposta
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
