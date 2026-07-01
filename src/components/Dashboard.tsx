import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Trophy, Users, TrendingUp, Star } from 'lucide-react';
import Sidebar from './Sidebar';
import MatchCard from './MatchCard';
import GroupTable from './GroupTable';
import { mockMatches, mockGroups, mockTopScorers, mockMvpPlayers } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'matches' | 'groups' | 'leaders'>('matches');

  const todayMatches = mockMatches.filter(match => {
    const matchDate = new Date(match.matchDate);
    const today = new Date();
    return matchDate.toDateString() === today.toDateString();
  });

  const liveMatches = mockMatches.filter(m => (m.status as string) === 'Live');

  return (
    <div className="flex h-screen bg-[#0D1117] text-white">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-64 bg-[#161B22] border-r border-gray-800"
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-[#161B22] border-b border-gray-800 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0066FF] to-[#7B2EFF] bg-clip-text text-transparent">
                  Copa do Mundo 2026
                </h1>
                <p className="text-sm text-gray-400">48 Seleções • 12 Grupos</p>
              </div>
            </div>

            {/* Live Matches Indicator */}
            {liveMatches.length > 0 && (
              <div className="flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/50">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-red-400">
                  {liveMatches.length} AO VIVO
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="bg-[#161B22] border-b border-gray-800 px-6">
          <div className="flex gap-1">
            {[
              { id: 'matches', label: 'Jogos do Dia', icon: Calendar },
              { id: 'groups', label: 'Tabelas', icon: Users },
              { id: 'leaders', label: 'Líderes', icon: Trophy }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 transition-all ${
                  activeTab === tab.id
                    ? 'text-[#0066FF] border-b-2 border-[#0066FF]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon size={18} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {activeTab === 'matches' && (
              <motion.div
                key="matches"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Today's Matches */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calendar className="text-[#00FF88]" size={24} />
                    Jogos do Dia
                  </h2>
                  {todayMatches.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {todayMatches.map((match, index) => (
                        <motion.div
                          key={match.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <MatchCard match={match} />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-400">
                      <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                      <p>Nenhum jogo agendado para hoje</p>
                    </div>
                  )}
                </div>

                {/* All Upcoming Matches */}
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="text-[#FFD700]" size={24} />
                    Próximos Jogos
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockMatches
                      .filter(m => m.status === 'Scheduled')
                      .slice(0, 6)
                      .map((match, index) => (
                        <motion.div
                          key={match.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <MatchCard match={match} />
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'groups' && (
              <motion.div
                key="groups"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="text-[#7B2EFF]" size={24} />
                  Tabelas de Classificação
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {mockGroups.map((group, index) => (
                    <motion.div
                      key={group.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <GroupTable group={group} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'leaders' && (
              <motion.div
                key="leaders"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Top Scorers */}
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Trophy className="text-[#FFD700]" size={24} />
                    Artilharia
                  </h2>
                  <div className="bg-[#161B22] rounded-xl border border-gray-800 overflow-hidden">
                    {mockTopScorers.map((player, index) => (
                      <motion.div
                        key={player.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-gray-800 last:border-b-0"
                      >
                        <div className={`text-2xl font-bold w-8 ${
                          index === 0 ? 'text-[#FFD700]' :
                          index === 1 ? 'text-gray-300' :
                          index === 2 ? 'text-orange-400' :
                          'text-gray-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{player.name}</p>
                          <p className="text-sm text-gray-400">{player.selection}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-[#00FF88]">{player.goals}</p>
                          <p className="text-xs text-gray-400">gols</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* MVP Players */}
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Star className="text-[#7B2EFF]" size={24} />
                    Melhores Jogadores (MVP)
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockMvpPlayers.map((player, index) => (
                      <motion.div
                        key={player.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-[#161B22] to-[#0D1117] p-6 rounded-xl border border-gray-800 hover:border-[#7B2EFF] transition-all cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <p className="font-bold text-lg">{player.name}</p>
                            <p className="text-sm text-gray-400">{player.position}</p>
                          </div>
                          <div className="text-3xl font-bold text-[#7B2EFF]">
                            {player.avgRating.toFixed(1)}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Seleção</span>
                            <span className="font-medium">{player.selection}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">MVPs</span>
                            <span className="font-medium text-[#FFD700]">{player.mvpCount}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Nota Média</span>
                            <span className="font-medium text-[#00FF88]">{player.avgRating.toFixed(1)}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;