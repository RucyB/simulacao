import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, BookOpen, MessageCircle, Mail, ExternalLink } from 'lucide-react';

const Help: React.FC = () => {
  const faqs = [
    {
      question: 'Como simular uma partida?',
      answer: 'Acesse a página "Partidas" e clique no botão "Simular" no card da partida desejada. O algoritmo irá calcular o resultado baseado nos atributos das seleções.'
    },
    {
      question: 'Como funciona o algoritmo de simulação?',
      answer: 'O algoritmo considera os atributos de Ataque, Defesa e Meio-Campo de cada seleção. A probabilidade de gols é calculada pela diferença de Overall entre o ataque de uma equipe e a defesa da outra.'
    },
    {
      question: 'O que é o MVP?',
      answer: 'MVP (Most Valuable Player) é o jogador com maior nota na partida. A nota é calculada baseada em gols (+0.8), assistências (+0.5), cartões e desempenho geral.'
    },
    {
      question: 'Quantas seleções participam?',
      answer: 'A Copa do Mundo 2026 terá 48 seleções divididas em 12 grupos de 4 times cada. Os 2 primeiros de cada grupo avançam, além dos 8 melhores terceiros colocados.'
    },
    {
      question: 'Posso ver os jogadores de cada seleção?',
      answer: 'Sim! Acesse a página "Seleções" para ver todas as 48 seleções com seus atributos, ou "Jogadores" para ver todos os jogadores filtrados por posição.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Ajuda</h1>
        <p className="text-gray-400">Tire suas dúvidas sobre o sistema</p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-xl border border-gray-800 p-6 hover:border-[#0066FF]/50 transition-all group"
        >
          <BookOpen className="text-[#0066FF] mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2 group-hover:text-[#0066FF] transition-colors">Documentação</h3>
          <p className="text-sm text-gray-400">Guia completo do sistema</p>
        </motion.a>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-xl border border-gray-800 p-6 hover:border-[#7B2EFF]/50 transition-all group"
        >
          <MessageCircle className="text-[#7B2EFF] mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2 group-hover:text-[#7B2EFF] transition-colors">Suporte</h3>
          <p className="text-sm text-gray-400">Entre em contato conosco</p>
        </motion.a>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-xl border border-gray-800 p-6 hover:border-[#00FF88]/50 transition-all group"
        >
          <Mail className="text-[#00FF88] mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2 group-hover:text-[#00FF88] transition-colors">Email</h3>
          <p className="text-sm text-gray-400">suporte@copadomundo.com</p>
        </motion.a>
      </div>

      {/* FAQ */}
      <div className="bg-[#161B22] rounded-xl border border-gray-800 overflow-hidden">
        <div className="bg-gradient-to-r from-[#0066FF]/20 to-[#7B2EFF]/20 px-6 py-4 border-b border-gray-800">
          <h2 className="text-xl font-bold flex items-center gap-3">
            <HelpCircle className="text-[#0066FF]" size={24} />
            Perguntas Frequentes
          </h2>
        </div>

        <div className="p-6 space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-800 last:border-b-0 pb-6 last:pb-0"
            >
              <h3 className="font-bold text-lg mb-2 text-[#00FF88]">{faq.question}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Help */}
      <div className="bg-gradient-to-br from-[#0066FF]/10 to-[#7B2EFF]/10 rounded-xl border border-[#0066FF]/20 p-6">
        <h3 className="font-bold text-xl mb-4">Ainda precisa de ajuda?</h3>
        <p className="text-gray-400 mb-4">
          Se você não encontrou o que procurava, entre em contato com nossa equipe de suporte.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#7B2EFF] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,102,255,0.6)] transition-all"
        >
          <ExternalLink size={18} />
          Abrir Ticket de Suporte
        </motion.button>
      </div>
    </div>
  );
};

export default Help;