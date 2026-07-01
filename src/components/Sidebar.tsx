import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, Users, TrendingUp, Star, Settings, HelpCircle } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Trophy, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Seleções', path: '/selecoes' },
    { icon: TrendingUp, label: 'Partidas', path: '/partidas' },
    { icon: Star, label: 'Jogadores', path: '/jogadores' },
    { icon: Settings, label: 'Configurações', path: '/configuracoes' },
    { icon: HelpCircle, label: 'Ajuda', path: '/ajuda' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#7B2EFF] rounded-lg flex items-center justify-center">
            <Trophy className="text-white" size={24} />
          </div>
          <div>
            <h2 className="font-bold text-lg">Copa 2026</h2>
            <p className="text-xs text-gray-400">48 Seleções</p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <Link key={item.path} to={item.path}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-[#0066FF]/20 to-[#7B2EFF]/20 text-white border border-[#0066FF]/50'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
              {isActive(item.path) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-2 h-2 bg-[#00FF88] rounded-full"
                />
              )}
            </motion.div>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="bg-gradient-to-br from-[#0066FF]/10 to-[#7B2EFF]/10 rounded-lg p-4 border border-[#0066FF]/20">
          <p className="text-xs text-gray-400 mb-2">Modo Premium</p>
          <p className="text-sm font-semibold text-[#00FF88]">Ativo</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
