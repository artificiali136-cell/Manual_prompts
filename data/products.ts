
import { Product } from '../types';
import { IMAGES } from '../assets/images';

export const products: Product[] = [
  {
    id: 1,
    title: "Manual 1: Mestre dos Prompts de Vídeo",
    shortDescription: "Aprenda a criar os melhores prompts para gerar vídeos incríveis com IA.",
    fullDescription: [
      "Descubra a engenharia por trás dos prompts perfeitos para vídeos de Inteligência Artificial.",
      "Este manual é o passo inicial para quem quer dominar ferramentas como Sora, Runway Gen-2 e Pika Labs.",
      "Você vai aprender: Estrutura de prompts, palavras-chave cinematográficas e controle de câmera."
    ],
    price: 18.00,
    paymentLink: "https://pay.kiwify.com.br/99eSyyf",
    features: [
      "Engenharia de Prompt",
      "Termos Cinematográficos",
      "Controle de Movimento",
      "Exemplos Práticos"
    ],
    image: IMAGES.products.manual1
  },
  {
    id: 2,
    title: "Manual 2: Imagens Realistas com IA",
    shortDescription: "O guia definitivo para criar as melhores imagens utilizando Inteligência Artificial.",
    fullDescription: [
      "Cansado de imagens com defeitos? Este manual ensina como alcançar o fotorrealismo e estilos artísticos únicos.",
      "Ideal para Midjourney, DALL-E 3 e Stable Diffusion.",
      "Aprenda sobre iluminação, composição, texturas e resoluções para criar imagens virais."
    ],
    price: 18.00,
    paymentLink: "https://pay.kiwify.com.br/g9fcLVm",
    features: [
      "Fotorrealismo",
      "Estilos Artísticos",
      "Correção de Erros",
      "Parâmetros Avançados"
    ],
    image: IMAGES.products.manual2
  },
  {
    id: 3,
    title: "Manual 3: Áudio e Clonagem de Voz",
    shortDescription: "Aprenda passo a passo como fazer os melhores áudios e como clonar voz com IA.",
    fullDescription: [
      "Descubra como fazer os áudios e como clonar voz com IA de forma simples e profissional.",
      "Técnicas exclusivas de clonagem de voz (Voice Cloning) para criar narrativas que prendem a atenção.",
      "Ferramentas de Text-to-Speech (TTS) ultra-realistas que parecem humanos reais."
    ],
    price: 18.00,
    paymentLink: "https://pay.kiwify.com.br/tUqj77b",
    features: [
      "Clonagem de Voz",
      "Criação de Áudios",
      "Dublagem AI",
      "Qualidade de Estúdio"
    ],
    image: IMAGES.products.manual3
  },
  {
    id: 4,
    title: "Manual 4: Top 10 Melhores IAs (Ranking)",
    shortDescription: "Ranking definitivo das melhores IAs de vídeo, imagem e áudio com tabelas comparativas.",
    fullDescription: [
      "Não perca tempo testando ferramentas ruins. Nós testamos e ranqueamos as top 10.",
      "Inclui tabelas detalhadas comparando: Preço, Qualidade, Velocidade e Facilidade de uso.",
      "Análise profunda das qualidades e defeitos de cada ferramenta do mercado atual."
    ],
    price: 37.20,
    paymentLink: "https://pay.kiwify.com.br/HeS7CJI",
    features: [
      "Tabelas Comparativas",
      "Top 10 Vídeo",
      "Top 10 Imagem",
      "Top 10 Áudio",
      "Análise de Custo-Benefício"
    ],
    image: IMAGES.products.manual4,
    highlight: true
  },
  {
    id: 5,
    title: "Manual 5: O Guia Supremo + Kit Ferramentas",
    shortDescription: "O manual mais detalhado de todos. Como fazer os melhores vídeos e imagens + 10 IAs essenciais.",
    fullDescription: [
      "Este é o nosso produto premium. Um guia extremamente detalhado que unifica todo o conhecimento.",
      "Tutorial passo-a-passo avançado para criar os vídeos engraçados e virais que postamos no FotoAtiva.",
      "BÔNUS: Lista curada com 10 IAs de imagem e vídeo indispensáveis que ninguém te conta.",
      "Se você quer profissionalizar seu conteúdo, este é o manual obrigatório."
    ],
    price: 70.00,
    paymentLink: "https://pay.kiwify.com.br/hXdhYsU",
    features: [
      "Passo a Passo Viral",
      "10 IAs Exclusivas",
      "Técnicas Avançadas",
      "Suporte Detalhado",
      "Método FotoAtiva"
    ],
    image: IMAGES.products.manual5,
    highlight: true
  }
];
