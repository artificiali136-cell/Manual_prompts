
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [imgError, setImgError] = useState(false);
  
  // Find product safely
  const product = products.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset image error state when ID changes
    setImgError(false);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#23001E] flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center text-white px-4">
          <div className="text-center bg-[#247BA0]/10 p-8 rounded-xl border border-[#247BA0]/30">
            <h2 className="text-3xl font-bold mb-4 text-[#CEFF1A]">Produto não encontrado</h2>
            <p className="mb-6 text-gray-300">O manual que você procura não está disponível no momento.</p>
            <Link 
              to="/#products" 
              className="inline-block px-6 py-3 bg-[#247BA0] text-white rounded-lg hover:bg-[#1a5c7a] transition-colors"
            >
              Voltar para os Manuais
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Placeholder URL if image fails
  const placeholderImage = "https://placehold.co/800x600/23001E/CEFF1A?text=FotoAtiva+Manual";

  return (
    <div className="min-h-screen flex flex-col bg-[#23001E]">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          
          <Link to="/#products" className="inline-flex items-center text-gray-400 hover:text-[#CEFF1A] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos Manuais
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Image & Highlights */}
            <div className="space-y-8">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#247BA0]/30 bg-[#1a0016] min-h-[300px]">
                <img 
                  src={imgError ? placeholderImage : product.image} 
                  alt={product.title}
                  onError={() => setImgError(true)}
                  className="w-full h-auto object-cover transition-opacity duration-300"
                />
                {product.highlight && (
                  <div className="absolute top-4 right-4 bg-[#CEFF1A] text-[#23001E] px-4 py-2 rounded-full font-bold shadow-lg z-10">
                    Recomendado
                  </div>
                )}
              </div>

              <div className="bg-[#247BA0]/10 rounded-xl p-6 border border-[#247BA0]/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-[#CEFF1A] mr-2" />
                  O que você vai dominar:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#247BA0] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Info & Action */}
            <div className="flex flex-col h-full">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {product.title}
              </h1>
              
              <div className="flex items-center mb-8">
                <div className="flex text-[#CEFF1A]">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 ml-3 text-sm">Produto Digital • Entrega Imediata</span>
              </div>

              <div className="space-y-4 mb-8 text-gray-300 text-lg leading-relaxed">
                {product.fullDescription.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>

              <div className="mt-auto bg-[#1a0016] p-8 rounded-2xl border border-[#247BA0]/30 shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                  <div>
                    <span className="text-gray-400 text-sm">Valor do investimento</span>
                    <div className="text-4xl font-bold text-white">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-[#247BA0]/20 px-3 py-1 rounded text-xs text-[#247BA0]">
                    <ShieldCheck className="w-4 h-4" />
                    Compra Segura via Kiwify
                  </div>
                </div>

                <a 
                  href={product.paymentLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#CEFF1A] text-[#23001E] text-xl font-bold py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(206,255,26,0.3)]"
                >
                  COMPRAR AGORA
                </a>
                
                <p className="text-center text-gray-500 text-sm mt-4">
                  Acesso imediato enviado para o seu e-mail após a confirmação.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
