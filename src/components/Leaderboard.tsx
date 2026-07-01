import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target } from 'lucide-react';

interface Player {
  id: string;
  name: string;
  selection: string;
  position: string;
  goals: number;
  assists: number;
  avgRating: number;
  mvpCount: number;
}

interface LeaderboardProps {
  topScorers: Player[];
  mvpPlayers: Player[];
  topAssists: Player[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({
  topScorers,
  mvpPlayers,
  topAssists
}) => {
  const getMedalColor = (position: number) => {
    switch (position) {
      case 0: return 'text-[#FFD700]'; // Gold
      case 1: return 'text-gray-300'; // Silver
      case 2: return 'text-orange-400'; // Bronze
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Scorers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#161B22] rounded-xl border border-gray-800 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#FFD700]/20 to-orange-500/20 px-6 py-4 border-b border-gray-800">
          <h3 className="font-bold text-xl flex items-center gap-3">
            <Trophy className="text-[#FFD700]" size={24} />
            Artilharia
          </h3>
        </div>
        <div className="p-4">
          {topScorers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-gray-800 last:border-b-0 rounded-lg"
            >
              <div className={`text-3xl font-bold w-12 ${getMedalColor(index)}`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg">{player.name}</p>
                <p className="text-sm text-gray-400">{player.selection} • {player.position}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#00FF88]">{player.goals}</p>
                <p className="text-xs text-gray-400">gols</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Top Assists */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#161B22] rounded-xl border border-gray-800 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#0066FF]/20 to-[#7B2EFF]/20 px-6 py-4 border-b border-gray-800">
          <h3 className="font-bold text-xl flex items-center gap-3">
            <Target className="text-[#0066FF]" size={24} />
            Assistências
          </h3>
        </div>
        <div className="p-4">
          {topAssists.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors border-b border-gray-800 last:border-b-0 rounded-lg"
            >
              <div className={`text-3xl font-bold w-12 ${getMedalColor(index)}`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-lg">{player.name}</p>
                <p className="text-sm text-gray-400">{player.selection} • {player.position}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-[#7B2EFF]">{player.assists}</p>
                <p className="text-xs text-gray-400">assistências</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MVP Players */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-[#161B22] rounded-xl border border-gray-800 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#7B2EFF]/20 to-pink-500/20 px-6 py-4 border-b border-gray-800">
          <h3 className="font-bold text-xl flex items-center gap-3">
            <Star className="text-[#7B2EFF]" size={24} />
            Melhores Jogadores (MVP)
          </h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mvpPlayers.map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-[#0D1117] to-[#161B22] p-6 rounded-xl border border-gray-800 hover:border-[#7B2EFF] transition-all cursor-pointer group relative overflow-hidden"
              >
                {/* Glow effect for top 3 */}
                {index < 3 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B2EFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                )}

                <div className="relative z-10">
                  {/* Position Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-4xl font-bold ${getMedalColor(index)}`}>
                      #{index + 1}
                    </div>
                    {player.mvpCount > 0 && (
                      <div className="flex items-center gap-1 bg-[#FFD700]/20 px-2 py-1 rounded-full border border-[#FFD700]/50">
                        <Star size={14} className="text-[#FFD700]" />
                        <span className="text-xs font-semibold text-[#FFD700]">{player.mvpCount}x</span>
                      </div>
                    )}
                  </div>

                  {/* Player Info */}
                  <div className="mb-4">
                    <p className="font-bold text-xl mb-1 group-hover:text-[#7B2EFF] transition-colors">
                      {player.name}
                    </p>
                    <p className="text-sm text-gray-400">{player.selection}</p>
                    <p className="text-xs text-gray-500">{player.position}</p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">Nota Média</span>
                      <span className="text-lg font-bold text-[#00FF88]">
                        {player.avgRating.toFixed(1)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(player.avgRating / 10) * 100}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        className="h-full bg-gradient-to-r from-[#0066FF] to-[#7B2EFF]"
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Gols</span>
                      <span className="font-semibold text-[#00FF88]">{player.goals}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Assistências</span>
                      <span className="font-semibold text-[#7B2EFF]">{player.assists}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Leaderboard;