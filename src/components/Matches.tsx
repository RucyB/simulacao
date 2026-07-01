import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Filter } from 'lucide-react';
import { simulateMatch } from '../lib/matchSimulator';
import { realWorldTeams } from '../data/realWorldCupData';
import MatchCard from './MatchCard';

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

interface MatchesProps {
  matches: Match[];
  groups: any[];
}

const Matches: React.FC<MatchesProps> = ({ matches, groups }) => {
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [simulatedMatches, setSimulatedMatches] = useState<Match[]>(matches);

  const phases = ['all', 'Grupos - Rodada 1', 'Grupos - Rodada 2', 'Grupos - Rodada 3', 'Oitavas', 'Quartas', 'Semi', 'Final'];

  const filteredMatches = simulatedMatches.filter(match => {
    return selectedPhase === 'all' || match.phase === selectedPhase;
  });

  const handleSimulate = (matchId: string) => {
    const match = simulatedMatches.find(m => m.id === matchId);
    if (!match || match.status === 'Finished') return;

    const homeTeam = realWorldTeams.find(t => t.name === match.homeTeam);
    const awayTeam = realWorldTeams.find(t => t.name === match.awayTeam);

    if (!homeTeam || !awayTeam) return;

    const result = simulateMatch(homeTeam, awayTeam);

    setSimulatedMatches(prev => prev.map(m => {
      if (m.id === matchId) {
        return {
          ...m,
          homeScore: result.homeScore,
          awayScore: result.awayScore,
          status: 'Finished' as const
        };
      }
      return m;
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Partidas</h1>
        <p className="text-gray-400">Simule partidas e acompanhe os resultados</p>
      </div>

      {/* Filters */}
      <div className="bg-[#161B22] rounded-xl border border-gray-800 p-6">
        <div className="flex items-center gap-4">
          <Filter className="text-gray-400" size={20} />
          <select
            value={selectedPhase}
            onChange={(e) => setSelectedPhase(e.target.value)}
            className="flex-1 md:flex-none px-4 py-2 bg-[#0D1117] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
          >
            {phases.map(phase => (
              <option key={phase} value={phase}>
                {phase === 'all' ? 'Todas as Fases' : phase}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Matches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMatches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <MatchCard 
              match={match} 
              onSimulate={() => handleSimulate(match.id)}
            />
          </motion.div>
        ))}
      </div>

      {filteredMatches.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Calendar size={48} className="mx-auto mb-4 opacity-50" />
          <p>Nenhuma partida encontrada</p>
        </div>
      )}
    </div>
  );
};

export default Matches;