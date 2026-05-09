import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-2 rounded-lg">
              <ShoppingCart className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Container<span className="text-emerald-500">Market</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/25"
            >
              Solicitar Proposta
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0 }}
        className="md:hidden bg-white overflow-hidden"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-emerald-500 hover:bg-slate-50 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a 
              href="#contato" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-emerald-500 text-white px-5 py-3 rounded-xl font-semibold"
            >
              Solicitar Proposta
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
