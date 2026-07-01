import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Globe } from 'lucide-react';
import { realWorldTeams } from '../data/realWorldCupData';

const Teams: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');

  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  const filteredTeams = realWorldTeams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGroup = selectedGroup === 'all' || team.id.startsWith(getGroupPrefix(selectedGroup));
    return matchesSearch && matchesGroup;
  });

  const getGroupPrefix = (groupLetter: string) => {
    const groupTeams: { [key: string]: string } = {
      'A': 'usa', 'B': 'arg', 'C': 'esp', 'D': 'fra',
      'E': 'eng', 'F': 'bra', 'G': 'ger', 'H': 'col',
      'I': 'jpn', 'J': 'crc', 'K': 'nga', 'L': 'mar'
    };
    return groupTeams[groupLetter] || '';
  };

  const getTeamGroup = (teamId: string) => {
    for (const [group, prefix] of Object.entries({
      'A': 'usa', 'B': 'arg', 'C': 'esp', 'D': 'fra',
      'E': 'eng', 'F': 'bra', 'G': 'ger', 'H': 'col',
      'I': 'jpn', 'J': 'crc', 'K': 'nga', 'L': 'mar'
    })) {
      if (teamId === prefix) return group;
    }
    return '?';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Seleções</h1>
        <p className="text-gray-400">48 seleções classificadas para a Copa do Mundo 2026</p>
      </div>

      {/* Filters */}
      <div className="bg-[#161B22] rounded-xl border border-gray-800 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar seleção..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#0D1117] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
            />
          </div>

          {/* Group Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="pl-10 pr-8 py-3 bg-[#0D1117] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all appearance-none cursor-pointer"
            >
              <option value="all">Todos os Grupos</option>
              {groups.map(group => (
                <option key={group} value={group}>Grupo {group}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTeams.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-xl border border-gray-800 overflow-hidden hover:border-[#0066FF]/50 transition-all cursor-pointer group"
          >
            {/* Team Header */}
            <div className="bg-gradient-to-r from-[#0066FF]/20 to-[#7B2EFF]/20 px-4 py-3 border-b border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-2xl border border-gray-700">
                    ⚽
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-[#0066FF] transition-colors">
                      {team.name}
                    </h3>
                    <p className="text-xs text-gray-400">Grupo {getTeamGroup(team.id)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Stats */}
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#0D1117] rounded-lg p-2">
                  <p className="text-xs text-gray-400 mb-1">ATA</p>
                  <p className="text-lg font-bold text-[#00FF88]">{team.attack}</p>
                </div>
                <div className="bg-[#0D1117] rounded-lg p-2">
                  <p className="text-xs text-gray-400 mb-1">DEF</p>
                  <p className="text-lg font-bold text-[#0066FF]">{team.defense}</p>
                </div>
                <div className="bg-[#0D1117] rounded-lg p-2">
                  <p className="text-xs text-gray-400 mb-1">MEI</p>
                  <p className="text-lg font-bold text-[#7B2EFF]">{team.midfield}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                <span className="text-sm text-gray-400">Overall</span>
                <span className="text-2xl font-bold text-white">{team.overall}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Jogadores</span>
                <span className="font-semibold">{team.players.length}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTeams.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Globe size={48} className="mx-auto mb-4 opacity-50" />
          <p>Nenhuma seleção encontrada</p>
        </div>
      )}
    </div>
  );
};

export default Teams;