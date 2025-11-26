import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Instagram, Twitter, Facebook, Youtube, Video } from 'lucide-react';

export const Footer: React.FC = () => {
    const getIcon = (name: string) => {
        switch (name) {
          case 'instagram': return <Instagram className="w-5 h-5" />;
          case 'tiktok': return <Video className="w-5 h-5" />;
          case 'facebook': return <Facebook className="w-5 h-5" />;
          case 'twitter': return <Twitter className="w-5 h-5" />;
          case 'youtube': return <Youtube className="w-5 h-5" />;
          default: return null;
        }
      };

  return (
    <footer id="footer" className="bg-[#1a0016] border-t border-[#247BA0]/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-[#CEFF1A] mb-4">FOTOATIVA</h3>
            <p className="text-gray-400 mb-4">
              Transformando criadores comuns em mestres da Inteligência Artificial. 
              Domine vídeos, imagens e áudios virais.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-[#CEFF1A]">Início</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-[#CEFF1A]">Manuais</a></li>
              <li><a href="#videos" className="text-gray-400 hover:text-[#CEFF1A]">Exemplos</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#247BA0]/10 p-2 rounded-full text-gray-400 hover:text-[#CEFF1A] hover:bg-[#247BA0]/30 transition-all"
                  title={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#247BA0]/20 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FotoAtiva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};