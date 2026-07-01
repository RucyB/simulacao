import { Team, PlayerStats } from '../lib/matchSimulator';

export const mockTeams: Team[] = [
  {
    id: '1',
    name: 'Brasil',
    attack: 85,
    defense: 82,
    midfield: 84,
    overall: 84,
    players: [
      { id: 'p1', name: 'Alisson', position: 'GOL', overall: 88 },
      { id: 'p2', name: 'Marquinhos', position: 'DEF', overall: 87 },
      { id: 'p3', name: 'Silva', position: 'DEF', overall: 85 },
      { id: 'p4', name: 'Danilo', position: 'DEF', overall: 83 },
      { id: 'p5', name: 'Alex Sandro', position: 'DEF', overall: 82 },
      { id: 'p6', name: 'Casemiro', position: 'MEI', overall: 88 },
      { id: 'p7', name: 'Paquetá', position: 'MEI', overall: 84 },
      { id: 'p8', name: 'Neymar', position: 'ATA', overall: 90 },
      { id: 'p9', name: 'Vinicius Jr', position: 'ATA', overall: 89 },
      { id: 'p10', name: 'Richarlison', position: 'ATA', overall: 83 },
      { id: 'p11', name: 'Raphinha', position: 'ATA', overall: 84 },
    ]
  },
  {
    id: '2',
    name: 'Argentina',
    attack: 88,
    defense: 80,
    midfield: 85,
    overall: 85,
    players: [
      { id: 'p12', name: 'Martinez', position: 'GOL', overall: 87 },
      { id: 'p13', name: 'Romero', position: 'DEF', overall: 84 },
      { id: 'p14', name: 'Otamendi', position: 'DEF', overall: 82 },
      { id: 'p15', name: 'Acuña', position: 'DEF', overall: 81 },
      { id: 'p16', name: 'Molina', position: 'DEF', overall: 83 },
      { id: 'p17', name: 'De Paul', position: 'MEI', overall: 85 },
      { id: 'p18', name: 'Paredes', position: 'MEI', overall: 82 },
      { id: 'p19', name: 'Messi', position: 'ATA', overall: 93 },
      { id: 'p20', name: 'Alvarez', position: 'ATA', overall: 84 },
      { id: 'p21', name: 'Di Maria', position: 'ATA', overall: 85 },
      { id: 'p22', name: 'Mac Allister', position: 'MEI', overall: 83 },
    ]
  },
  {
    id: '3',
    name: 'França',
    attack: 90,
    defense: 83,
    midfield: 86,
    overall: 87,
    players: [
      { id: 'p23', name: 'Lloris', position: 'GOL', overall: 86 },
      { id: 'p24', name: 'Hernandez', position: 'DEF', overall: 85 },
      { id: 'p25', name: 'Varane', position: 'DEF', overall: 86 },
      { id: 'p26', name: 'Kimpembe', position: 'DEF', overall: 84 },
      { id: 'p27', name: 'Pavard', position: 'DEF', overall: 83 },
      { id: 'p28', name: 'Tchouaméni', position: 'MEI', overall: 85 },
      { id: 'p29', name: 'Rabiot', position: 'MEI', overall: 83 },
      { id: 'p30', name: 'Mbappé', position: 'ATA', overall: 92 },
      { id: 'p31', name: 'Griezmann', position: 'ATA', overall: 87 },
      { id: 'p32', name: 'Dembele', position: 'ATA', overall: 84 },
      { id: 'p33', name: 'Giroud', position: 'ATA', overall: 82 },
    ]
  },
  {
    id: '4',
    name: 'Inglaterra',
    attack: 87,
    defense: 81,
    midfield: 84,
    overall: 85,
    players: [
      { id: 'p34', name: 'Pickford', position: 'GOL', overall: 84 },
      { id: 'p35', name: 'Walker', position: 'DEF', overall: 84 },
      { id: 'p36', name: 'Stones', position: 'DEF', overall: 85 },
      { id: 'p37', name: 'Maguire', position: 'DEF', overall: 83 },
      { id: 'p38', name: 'Shaw', position: 'DEF', overall: 82 },
      { id: 'p39', name: 'Rice', position: 'MEI', overall: 86 },
      { id: 'p40', name: 'Henderson', position: 'MEI', overall: 82 },
      { id: 'p41', name: 'Kane', position: 'ATA', overall: 90 },
      { id: 'p42', name: 'Saka', position: 'ATA', overall: 86 },
      { id: 'p43', name: 'Sterling', position: 'ATA', overall: 84 },
      { id: 'p44', name: 'Rashford', position: 'ATA', overall: 85 },
    ]
  }
];

export const mockMatches = [
  {
    id: '1',
    phase: 'Grupos - Rodada 1',
    homeTeam: 'Brasil',
    awayTeam: 'Argentina',
    homeScore: 2,
    awayScore: 1,
    status: 'Finished' as const,
    matchDate: new Date('2026-06-15T16:00:00')
  },
  {
    id: '2',
    phase: 'Grupos - Rodada 1',
    homeTeam: 'França',
    awayTeam: 'Inglaterra',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-15T19:00:00')
  },
  {
    id: '3',
    phase: 'Grupos - Rodada 2',
    homeTeam: 'Brasil',
    awayTeam: 'França',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-20T16:00:00')
  },
  {
    id: '4',
    phase: 'Grupos - Rodada 2',
    homeTeam: 'Argentina',
    awayTeam: 'Inglaterra',
    homeScore: undefined,
    awayScore: undefined,
    status: 'Scheduled' as const,
    matchDate: new Date('2026-06-20T19:00:00')
  }
];

export const mockGroups = [
  {
    name: 'A',
    teams: [
      { name: 'Brasil', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 2, goalsAgainst: 1, goalDifference: 1, points: 3 },
      { name: 'Argentina', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 1, goalsAgainst: 2, goalDifference: -1, points: 0 },
      { name: 'França', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Inglaterra', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  },
  {
    name: 'B',
    teams: [
      { name: 'Espanha', played: 1, won: 1, drawn: 0, lost: 0, goalsFor: 3, goalsAgainst: 0, goalDifference: 3, points: 3 },
      { name: 'Alemanha', played: 1, won: 0, drawn: 0, lost: 1, goalsFor: 0, goalsAgainst: 3, goalDifference: -3, points: 0 },
      { name: 'Portugal', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
      { name: 'Holanda', played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0, goalDifference: 0, points: 0 },
    ]
  }
];

export const mockTopScorers: PlayerStats[] = [
  { id: 'p1', name: 'Neymar', selection: 'Brasil', position: 'ATA', goals: 5, assists: 2, avgRating: 8.5, mvpCount: 2 },
  { id: 'p19', name: 'Messi', selection: 'Argentina', position: 'ATA', goals: 4, assists: 3, avgRating: 8.8, mvpCount: 3 },
  { id: 'p30', name: 'Mbappé', selection: 'França', position: 'ATA', goals: 4, assists: 1, avgRating: 8.3, mvpCount: 1 },
  { id: 'p41', name: 'Kane', selection: 'Inglaterra', position: 'ATA', goals: 3, assists: 2, avgRating: 8.1, mvpCount: 1 },
];

export const mockMvpPlayers: PlayerStats[] = [
  { id: 'p19', name: 'Messi', selection: 'Argentina', position: 'ATA', goals: 4, assists: 3, avgRating: 8.8, mvpCount: 3 },
  { id: 'p1', name: 'Neymar', selection: 'Brasil', position: 'ATA', goals: 5, assists: 2, avgRating: 8.5, mvpCount: 2 },
  { id: 'p30', name: 'Mbappé', selection: 'França', position: 'ATA', goals: 4, assists: 1, avgRating: 8.3, mvpCount: 1 },
  { id: 'p41', name: 'Kane', selection: 'Inglaterra', position: 'ATA', goals: 3, assists: 2, avgRating: 8.1, mvpCount: 1 },
  { id: 'p6', name: 'Casemiro', selection: 'Brasil', position: 'MEI', goals: 1, assists: 1, avgRating: 7.9, mvpCount: 0 },
];

export const mockTopAssists: PlayerStats[] = [
  { id: 'p19', name: 'Messi', selection: 'Argentina', position: 'ATA', goals: 4, assists: 3, avgRating: 8.8, mvpCount: 3 },
  { id: 'p1', name: 'Neymar', selection: 'Brasil', position: 'ATA', goals: 5, assists: 2, avgRating: 8.5, mvpCount: 2 },
  { id: 'p41', name: 'Kane', selection: 'Inglaterra', position: 'ATA', goals: 3, assists: 2, avgRating: 8.1, mvpCount: 1 },
  { id: 'p17', name: 'De Paul', selection: 'Argentina', position: 'MEI', goals: 1, assists: 2, avgRating: 7.8, mvpCount: 0 },
];