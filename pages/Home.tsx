
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VideoGrid } from '../components/VideoGrid';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowDown, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      >
        <div className="absolute inset-0 bg-[#23001E]/90"></div> {/* Overlay */}
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#247BA0]/20 border border-[#247BA0]/40 text-[#CEFF1A] text-sm font-medium mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 mr-2" />
            Descubra o Segredo do FotoAtiva
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Crie Vídeos <span className="text-[#CEFF1A]">Virais</span> com <br/>
            Inteligência Artificial
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Você vê nossos vídeos engraçados no TikTok e Instagram? Agora você pode fazer igual.
            Acesse os manuais que revelam exatamente as ferramentas e prompts que usamos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products" 
              className="px-8 py-4 bg-[#CEFF1A] text-[#23001E] text-lg font-bold rounded-xl hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(206,255,26,0.4)]"
            >
              Quero Começar Agora
            </a>
            <a 
              href="#videos" 
              className="px-8 py-4 bg-transparent border border-[#247BA0] text-white text-lg font-bold rounded-xl hover:bg-[#247BA0]/20 transition-all"
            >
              Ver Exemplos
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-[#247BA0]">
          <ArrowDown className="w-8 h-8" />
        </div>
      </section>

      {/* Video Showcase */}
      <VideoGrid />

      {/* Products Section */}
      <section id="products" className="py-20 bg-[#1a0016]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos <span className="text-[#247BA0]">Manuais</span> Exclusivos
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Escolha a habilidade que você quer dominar hoje. Do básico ao avançado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Social Proof Section */}
      <section className="py-16 bg-[#247BA0]/10 border-y border-[#247BA0]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Siga a Comunidade FotoAtiva</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using text logos for simplicity as generic placeholders */}
             <span className="text-2xl font-bold text-white flex items-center gap-2"><span className="text-[#CEFF1A]">Instagram</span> @fotoativaofc</span>
             <span className="text-2xl font-bold text-white flex items-center gap-2"><span className="text-[#CEFF1A]">TikTok</span> @historiasinsanasofc</span>
             <span className="text-2xl font-bold text-white flex items-center gap-2"><span className="text-[#CEFF1A]">YouTube</span> @GiggleBott</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
