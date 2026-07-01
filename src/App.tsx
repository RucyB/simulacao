import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Teams from './components/Teams';
import Matches from './components/Matches';
import Players from './components/Players';
import Settings from './components/Settings';
import Help from './components/Help';
import { realWorldMatches, realWorldGroups, realWorldPlayerStats } from './data/realWorldCupData';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-premium text-white">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/selecoes" element={<Teams />} />
        <Route path="/partidas" element={<Matches matches={realWorldMatches} groups={realWorldGroups} />} />
        <Route path="/jogadores" element={<Players players={realWorldPlayerStats} />} />
        <Route path="/configuracoes" element={<Settings />} />
        <Route path="/ajuda" element={<Help />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;