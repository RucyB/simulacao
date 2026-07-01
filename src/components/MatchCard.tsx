import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';

interface Match {
  id: string;
  phase: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'Scheduled' | 'Live' | 'Finished';
  matchDate: Date;
}

interface MatchCardProps {
  match: Match;
  onSimulate?: () => void;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, onSimulate }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date));
  };

  const getStatusColor = () => {
    switch (match.status) {
      case 'Live':
        return 'text-red-400 bg-red-500/20 border-red-500/50';
      case 'Finished':
        return 'text-gray-400 bg-gray-500/20 border-gray-500/50';
      default:
        return 'text-[#00FF88] bg-[#00FF88]/20 border-[#00FF88]/50';
    }
  };

  const getStatusText = () => {
    switch (match.status) {
      case 'Live':
        return 'AO VIVO';
      case 'Finished':
        return 'FINALIZADO';
      default:
        return 'AGENDADO';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-xl border border-gray-800 overflow-hidden hover:border-[#0066FF]/50 transition-all cursor-pointer group"
    >
      {/* Header */}
      <div className="bg-[#0D1117] px-4 py-2 flex items-center justify-between border-b border-gray-800">
        <span className="text-xs text-gray-400">{match.phase}</span>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-semibold ${getStatusColor()}`}>
          {match.status === 'Live' && (
            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
          )}
          {getStatusText()}
        </div>
      </div>

      {/* Match Content */}
      <div className="p-6">
        {/* Teams */}
        <div className="space-y-4">
          {/* Home Team */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-2xl border border-gray-700">
                ⚽
              </div>
              <div>
                <p className="font-semibold text-sm group-hover:text-[#0066FF] transition-colors">
                  {match.homeTeam}
                </p>
                <p className="text-xs text-gray-500">Casa</p>
              </div>
            </div>
            {match.status !== 'Scheduled' && (
              <div className="text-3xl font-bold text-white ml-4">
                {match.homeScore}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800" />

          {/* Away Team */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-2xl border border-gray-700">
                ⚽
              </div>
              <div>
                <p className="font-semibold text-sm group-hover:text-[#7B2EFF] transition-colors">
                  {match.awayTeam}
                </p>
                <p className="text-xs text-gray-500">Fora</p>
              </div>
            </div>
            {match.status !== 'Scheduled' && (
              <div className="text-3xl font-bold text-white ml-4">
                {match.awayScore}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{formatDate(match.matchDate)}</span>
            </div>
          </div>

          {match.status === 'Scheduled' && onSimulate && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onSimulate();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0066FF] to-[#7B2EFF] rounded-lg text-sm font-semibold hover:shadow-[0_0_15px_rgba(0,102,255,0.5)] transition-all"
            >
              <Play size={16} />
              Simular
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MatchCard;