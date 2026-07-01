import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface Team {
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

interface GroupTableProps {
  group: {
    name: string;
    teams: Team[];
  };
}

const GroupTable: React.FC<GroupTableProps> = ({ group }) => {
  const getPositionColor = (position: number) => {
    if (position <= 2) return 'text-[#00FF88]'; // Qualified
    if (position <= 3) return 'text-[#FFD700]'; // Potential 3rd place
    return 'text-gray-500'; // Eliminated
  };

  const getPositionIcon = (position: number, goalDiff: number) => {
    if (position === 1) return <Trophy size={16} className="text-[#FFD700]" />;
    if (goalDiff > 0) return <TrendingUp size={16} className="text-[#00FF88]" />;
    if (goalDiff < 0) return <TrendingDown size={16} className="text-red-400" />;
    return <Minus size={16} className="text-gray-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#161B22] rounded-xl border border-gray-800 overflow-hidden hover:border-[#7B2EFF]/50 transition-all"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF]/20 to-[#7B2EFF]/20 px-4 py-3 border-b border-gray-800">
        <h3 className="font-bold text-lg text-center">Grupo {group.name}</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800 text-gray-400 text-xs">
              <th className="px-3 py-2 text-left w-8">#</th>
              <th className="px-3 py-2 text-left">Seleção</th>
              <th className="px-3 py-2 text-center">J</th>
              <th className="px-3 py-2 text-center">V</th>
              <th className="px-3 py-2 text-center">E</th>
              <th className="px-3 py-2 text-center">D</th>
              <th className="px-3 py-2 text-center">GP</th>
              <th className="px-3 py-2 text-center">GC</th>
              <th className="px-3 py-2 text-center">SG</th>
              <th className="px-3 py-2 text-center font-bold">PTS</th>
            </tr>
          </thead>
          <tbody>
            {group.teams.map((team, index) => (
              <motion.tr
                key={team.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-gray-800/50 hover:bg-white/5 transition-colors"
              >
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${getPositionColor(index + 1)}`}>
                      {index + 1}
                    </span>
                    {getPositionIcon(index + 1, team.goalDifference)}
                  </div>
                </td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center text-xs">
                      ⚽
                    </div>
                    <span className="font-medium">{team.name}</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-center text-gray-400">{team.played}</td>
                <td className="px-3 py-3 text-center text-[#00FF88] font-semibold">{team.won}</td>
                <td className="px-3 py-3 text-center text-gray-400">{team.drawn}</td>
                <td className="px-3 py-3 text-center text-red-400">{team.lost}</td>
                <td className="px-3 py-3 text-center text-gray-300">{team.goalsFor}</td>
                <td className="px-3 py-3 text-center text-gray-300">{team.goalsAgainst}</td>
                <td className={`px-3 py-3 text-center font-semibold ${
                  team.goalDifference > 0 ? 'text-[#00FF88]' : 
                  team.goalDifference < 0 ? 'text-red-400' : 
                  'text-gray-400'
                }`}>
                  {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                </td>
                <td className="px-3 py-3 text-center">
                  <span className="text-lg font-bold text-white">{team.points}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="px-4 py-3 bg-[#0D1117] border-t border-gray-800 flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#00FF88]/20 border border-[#00FF88]/50 rounded" />
          <span className="text-gray-400">Classificados (1º e 2º)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#FFD700]/20 border border-[#FFD700]/50 rounded" />
          <span className="text-gray-400">Melhores 3º (8 vagas)</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GroupTable;