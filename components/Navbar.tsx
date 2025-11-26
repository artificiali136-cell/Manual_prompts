import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Facebook, Youtube, Video, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'instagram': return <Instagram className="w-5 h-5" />;
      case 'tiktok': return <Video className="w-5 h-5" />; // Using Video icon as generic for Tiktok
      case 'facebook': return <Facebook className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      case 'youtube': return <Youtube className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#23001E]/95 backdrop-blur-sm border-b border-[#247BA0]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#CEFF1A] to-[#247BA0]">
                FOTOATIVA
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-[#CEFF1A] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Início
              </Link>
              <Link to="/#products" className="text-gray-300 hover:text-[#CEFF1A] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Manuais
              </Link>
              <a href="#footer" className="text-gray-300 hover:text-[#CEFF1A] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contato
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#CEFF1A] transition-colors"
                title={link.name}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#247BA0]/20 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#23001E] border-b border-[#247BA0]/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#CEFF1A] block px-3 py-2 rounded-md text-base font-medium"
            >
              Início
            </Link>
            <Link 
              to="/#products" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-[#CEFF1A] block px-3 py-2 rounded-md text-base font-medium"
            >
              Manuais
            </Link>
            <div className="flex space-x-4 px-3 py-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#CEFF1A]"
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};