
import React from 'react';
import { REFERENCE_VIDEOS } from '../constants';

export const VideoGrid: React.FC = () => {
  return (
    <section id="videos" className="py-16 bg-[#23001E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados <span className="text-[#CEFF1A]">Virais</span>
          </h2>
          <p className="text-[#247BA0] text-lg max-w-2xl mx-auto">
            Veja o tipo de conteúdo que você será capaz de criar com nossos manuais.
            Estes são exemplos do nosso perfil @FotoAtiva.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {REFERENCE_VIDEOS.map((url, index) => (
            <div 
              key={index} 
              className="group relative aspect-[9/16] rounded-xl overflow-hidden border border-[#247BA0]/30 shadow-[0_0_15px_rgba(36,123,160,0.2)] bg-black"
            >
              <img 
                src={url} 
                alt={`Video reference ${index + 1}`} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-xs font-medium">Exemplo Viral #{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
