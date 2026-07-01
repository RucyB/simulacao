import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Bell, Volume2, Monitor, Palette } from 'lucide-react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    sound: true,
    autoSimulate: false,
    darkMode: true,
    animations: true,
    language: 'pt-BR'
  });

  const toggleSetting = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Configurações</h1>
        <p className="text-gray-400">Personalize sua experiência</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#161B22] rounded-xl border border-gray-800 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Bell className="text-[#0066FF]" size={24} />
            <h2 className="text-xl font-bold">Notificações</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notificações Push</p>
                <p className="text-sm text-gray-400">Receba alertas de jogos</p>
              </div>
              <button
                onClick={() => toggleSetting('notifications')}
                className={`w-12 h-6 rounded-full transition-all ${
                  settings.notifications ? 'bg-[#0066FF]' : 'bg-gray-700'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-all ${
                  settings.notifications ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Sons</p>
                <p className="text-sm text-gray-400">Efeitos sonoros</p>
              </div>
              <button
                onClick={() => toggleSetting('sound')}
                className={`w-12 h-6 rounded-full transition-all ${
                  settings.sound ? 'bg-[#0066FF]' : 'bg-gray-700'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-all ${
                  settings.sound ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#161B22] rounded-xl border border-gray-800 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="text-[#7B2EFF]" size={24} />
            <h2 className="text-xl font-bold">Exibição</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Modo Escuro</p>
                <p className="text-sm text-gray-400">Tema dark premium</p>
              </div>
              <button
                onClick={() => toggleSetting('darkMode')}
                className={`w-12 h-6 rounded-full transition-all ${
                  settings.darkMode ? 'bg-[#0066FF]' : 'bg-gray-700'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-all ${
                  settings.darkMode ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Animações</p>
                <p className="text-sm text-gray-400">Efeitos visuais</p>
              </div>
              <button
                onClick={() => toggleSetting('animations')}
                className={`w-12 h-6 rounded-full transition-all ${
                  settings.animations ? 'bg-[#0066FF]' : 'bg-gray-700'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-all ${
                  settings.animations ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#161B22] rounded-xl border border-gray-800 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <SettingsIcon className="text-[#00FF88]" size={24} />
            <h2 className="text-xl font-bold">Simulação</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Simulação Automática</p>
                <p className="text-sm text-gray-400">Simular jogos automaticamente</p>
              </div>
              <button
                onClick={() => toggleSetting('autoSimulate')}
                className={`w-12 h-6 rounded-full transition-all ${
                  settings.autoSimulate ? 'bg-[#0066FF]' : 'bg-gray-700'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-all ${
                  settings.autoSimulate ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Language */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#161B22] rounded-xl border border-gray-800 p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Palette className="text-[#FFD700]" size={24} />
            <h2 className="text-xl font-bold">Idioma</h2>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Selecione o idioma</label>
            <select
              value={settings.language}
              onChange={(e) => setSettings(prev => ({ ...prev, language: e.target.value }))}
              className="w-full px-4 py-3 bg-[#0D1117] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
            >
              <option value="pt-BR">Português (Brasil)</option>
              <option value="en-US">English (US)</option>
              <option value="es-ES">Español</option>
            </select>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;