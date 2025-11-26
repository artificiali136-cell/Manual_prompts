
import React, { useState } from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isHighlight = product.highlight;
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2
      ${isHighlight 
        ? 'bg-[#247BA0]/10 border-2 border-[#CEFF1A] shadow-[0_0_30px_rgba(206,255,26,0.15)]' 
        : 'bg-[#247BA0]/5 border border-[#247BA0]/30 hover:shadow-[0_0_20px_rgba(36,123,160,0.3)]'
      }`}
    >
      {isHighlight && (
        <div className="absolute top-0 right-0 bg-[#CEFF1A] text-[#23001E] text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
          MAIS VENDIDO
        </div>
      )}

      <div className="aspect-video w-full overflow-hidden bg-[#1a0016]">
        <img 
          src={imgError ? "https://placehold.co/600x400/23001E/CEFF1A?text=FotoAtiva" : product.image}
          alt={product.title} 
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <h3 className={`text-xl font-bold mb-2 ${isHighlight ? 'text-[#CEFF1A]' : 'text-white'}`}>
          {product.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {product.shortDescription}
        </p>

        <ul className="mb-6 space-y-2">
          {product.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center text-xs text-gray-300">
              <CheckCircle className="w-3 h-3 mr-2 text-[#247BA0]" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-[#247BA0]/20 flex items-center justify-between">
          <div>
            <span className="text-xs text-gray-500 block">Por apenas</span>
            <span className="text-2xl font-bold text-white">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          
          <Link 
            to={`/manual/${product.id}`}
            className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-colors
              ${isHighlight
                ? 'bg-[#CEFF1A] text-[#23001E] hover:bg-white'
                : 'bg-[#247BA0] text-white hover:bg-[#1a5c7a]'
              }`}
          >
            Ver Detalhes
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
