# 🏆 Copa do Mundo 2026 - Simulador

Sistema web completo, responsivo e imersivo para gerenciamento e simulação da Copa do Mundo com 48 seleções.

## 🎨 Identidade Visual

Estética **Dark Mode Premium** com elementos **Cyberpunk/Neon**, combinando referências de:
- EA FC (FIFA Ultimate Team)
- Sofascore
- ESPN

## 🛠️ Stack Tecnológica

### Frontend
- **React.js** + **TypeScript**
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **Recharts** - Gráficos
- **React Router** - Roteamento

### Backend
- **Node.js** + **Express** + **TypeScript**
- **Prisma ORM** - Gerenciamento de banco de dados

### Banco de Dados
- **PostgreSQL**

## 📁 Estrutura do Projeto

```
copa-do-mundo-2026/
├── prisma/
│   └── schema.prisma          # Modelagem de dados
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx      # Dashboard principal
│   │   ├── Sidebar.tsx        # Menu lateral retrátil
│   │   ├── MatchCard.tsx      # Card de partida
│   │   ├── GroupTable.tsx     # Tabela de classificação
│   │   └── Leaderboard.tsx    # Painel de líderes
│   ├── lib/
│   │   └── matchSimulator.ts  # Algoritmo de simulação
│   ├── data/
│   │   └── mockData.ts        # Dados de demonstração
│   ├── App.tsx                # Componente principal
│   ├── main.tsx               # Entry point
│   └── index.css              # Estilos globais
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- PostgreSQL (opcional, para produção)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd copa-do-mundo-2026
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite o arquivo .env com suas credenciais
```

4. **Execute o projeto em desenvolvimento**
```bash
npm run dev
```

5. **Acesse no navegador**
```
http://localhost:5173
```

## 🎯 Funcionalidades

### ✅ Implementado

- [x] **Dashboard Principal**
  - Menu lateral retrátil com animações
  - Jogos do dia em grid responsivo
  - Próximos jogos agendados
  - Indicador de jogos ao vivo

- [x] **Sistema de Partidas**
  - Visualização de partidas por fase
  - Status: Agendado, Ao Vivo, Finalizado
  - Cards com design premium

- [x] **Tabelas de Classificação**
  - Grupos A-L (12 grupos)
  - Visualização de classificação
  - Indicadores de classificação (1º/2º = verde, 3º = dourado)

- [x] **Painel de Líderes**
  - Artilharia (top goleadores)
  - Assistências
  - Melhores jogadores (MVP)
  - Estatísticas detalhadas

- [x] **Algoritmo de Simulação**
  - Probabilidade baseada em atributos (Ataque vs Defesa)
  - Ciclos de 10 minutos
  - Gols, assistências e cartões
  - Sistema de notas (0-10)
  - MVP automático

### 🔄 Em Desenvolvimento

- [ ] Backend API (Node.js + Express)
- [ ] Integração com banco de dados PostgreSQL
- [ ] Autenticação de usuários
- [ ] Histórico de simulações
- [ ] Estatísticas avançadas com gráficos
- [ ] Modo de torneio completo (48 seleções)
- [ ] Sistema de apostas virtual

## 🎨 Guia de Estilo

### Cores

```css
/* Fundo */
--dark-premium: #0D1117
--dark-secondary: #161B22

/* Accents Frios */
--electric-blue: #0066FF
--neon-purple: #7B2EFF

/* Accents Quentes */
--neon-green: #00FF88
--gold: #FFD700
--vibrant-red: #FF3131
```

### Efeitos Visuais

- **Glassmorphism**: `backdrop-blur-md bg-white/5`
- **Gradientes**: Cards com bordas luminosas
- **Sombras**: `shadow-[0_0_15px_rgba(...)]`
- **Animações**: Transições suaves, efeito cascata, microinterações

## 🧮 Algoritmo de Simulação

### Lógica de Gols
```typescript
// Probabilidade baseada na diferença de Overall
const attackAdvantage = teamA.attack - teamB.defense;
const goalProbability = 0.08 + (attackAdvantage / 200);

// Ponderado por posição
// 70% atacantes, 30% meias
// Seleção ponderada por Overall
```

### Sistema de Notas
- Nota base: 6.0
- Gol: +0.8
- Assistência: +0.5
- Cartão Amarelo: -0.3
- Cartão Vermelho: -1.5
- Randomização final: ±0.5

### MVP
- Maior nota após 90 minutos
- Desempate: mais gols + assistências

## 📊 Modelagem de Dados

### Entidades Principais

- **Selection**: 48 seleções, 12 grupos (A-L)
- **Player**: Atributos, estatísticas, overall
- **Match**: Fases, status, placar
- **MatchEvent**: Gols, cartões, assistências

### Relacionamentos
```
Selection (1) ←→ (N) Player
Selection (1) ←→ (N) Match (home/away)
Match (1) ←→ (N) MatchEvent
Player (1) ←→ (N) MatchEvent
```

## 🏗️ Arquitetura

```
Frontend (React + TypeScript)
    ↓
API Routes (React Router)
    ↓
Services/Utils (matchSimulator)
    ↓
Mock Data / Backend API
    ↓
Database (PostgreSQL via Prisma)
```

## 📝 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run preview      # Preview do build
npm run prisma:generate  # Gerar Prisma Client
npm run prisma:migrate   # Executar migrations
npm run prisma:studio    # Abrir Prisma Studio
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'feat: adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para os amantes do futebol e tecnologia.

---

**Status**: 🚧 Em desenvolvimento ativo

**Versão**: 1.0.0

**Última atualização**: Junho 2026