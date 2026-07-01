import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star } from 'lucide-react';
import { realWorldTeams } from '../data/realWorldCupData';

interface Player {
  id: string;
  name: string;
  position: string;
  overall: number;
  teamName: string;
}

const Players: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState<string>('all');

  // Extract all players from teams
  const allPlayers: Player[] = realWorldTeams.flatMap(team =>
    team.players.map(player => ({
      ...player,
      teamName: team.name
    }))
  );

  const positions = ['GOL', 'DEF', 'MEI', 'ATA'];

  const filteredPlayers = allPlayers.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = positionFilter === 'all' || player.position === positionFilter;
    return matchesSearch && matchesPosition;
  });

  const getPositionColor = (position: string) => {
    switch (position) {
      case 'GOL': return 'text-[#FFD700]';
      case 'DEF': return 'text-[#0066FF]';
      case 'MEI': return 'text-[#7B2EFF]';
      case 'ATA': return 'text-[#00FF88]';
      default: return 'text-gray-400';
    }
  };

  const getPositionLabel = (position: string) => {
    switch (position) {
      case 'GOL': return 'Goleiro';
      case 'DEF': return 'Defensor';
      case 'MEI': return 'Meio-Campo';
      case 'ATA': return 'Atacante';
      default: return position;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Jogadores</h1>
        <p className="text-gray-400">Todos os jogadores da Copa do Mundo 2026</p>
      </div>

      {/* Filters */}
      <div className="bg-[#161B22] rounded-xl border border-gray-800 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar jogador..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#0D1117] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
            />
          </div>

          {/* Position Filter */}
          <select
            value={positionFilter}
            onChange={(e) => setPositionFilter(e.target.value)}
            className="px-4 py-3 bg-[#0D1117] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
          >
            <option value="all">Todas as Posições</option>
            {positions.map(pos => (
              <option key={pos} value={pos}>{getPositionLabel(pos)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredPlayers.map((player, index) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.03 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-xl border border-gray-800 overflow-hidden hover:border-[#7B2EFF]/50 transition-all cursor-pointer group"
          >
            {/* Player Header */}
            <div className="bg-gradient-to-r from-[#7B2EFF]/20 to-pink-500/20 px-4 py-3 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg group-hover:text-[#7B2EFF] transition-colors">
                    {player.name}
                  </h3>
                  <p className="text-xs text-gray-400">{player.teamName}</p>
                </div>
                <div className={`text-2xl font-bold ${getPositionColor(player.position)}`}>
                  {player.overall}
                </div>
              </div>
            </div>

            {/* Player Stats */}
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Posição</span>
                <span className={`font-semibold ${getPositionColor(player.position)}`}>
                  {getPositionLabel(player.position)}
                </span>
              </div>

              {/* Overall Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Overall</span>
                  <span className="text-sm font-semibold">{player.overall}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${player.overall}%` }}
                    transition={{ delay: index * 0.03 + 0.5, duration: 1 }}
                    className={`h-full ${
                      player.overall >= 85 ? 'bg-gradient-to-r from-[#FFD700] to-orange-500' :
                      player.overall >= 80 ? 'bg-gradient-to-r from-[#00FF88] to-green-500' :
                      player.overall >= 75 ? 'bg-gradient-to-r from-[#0066FF] to-blue-500' :
                      'bg-gradient-to-r from-gray-600 to-gray-500'
                    }`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Star size={48} className="mx-auto mb-4 opacity-50" />
          <p>Nenhum jogador encontrado</p>
        </div>
      )}
    </div>
  );
};

export default Players;