import { ShoppingCart, Share2, MessageCircle, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <ShoppingCart className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Container<span className="text-emerald-500">Market</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Elevando o padrão de conveniência em condomínios através de tecnologia autônoma e design sofisticado.
            </p>
            <div className="flex gap-4">
              {[Share2, MessageCircle, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all hover:scale-110 text-slate-400 hover:text-white">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              {['Benefícios', 'Como Funciona', 'Sobre Nós', 'FAQ', 'Contato'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-emerald-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>contato@containermarket.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Av. Paulista, 1000 <br />São Paulo - SP</span>
              </li>
            </ul>
          </div>

          {/* Hours Section */}
          <div>
            <h4 className="text-lg font-bold mb-6">Atendimento</h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-slate-400 text-sm mb-2 uppercase font-semibold">Operação Mercados</p>
              <p className="text-white font-bold text-xl mb-4">24 horas / 7 dias</p>
              <p className="text-slate-400 text-sm mb-2 uppercase font-semibold">Suporte Comercial</p>
              <p className="text-white font-medium">Segunda a Sexta <br /> 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} ContainerMarket. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
