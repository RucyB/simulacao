export interface Team {
  id: string;
  name: string;
  attack: number;
  defense: number;
  midfield: number;
  overall: number;
  players: Player[];
}

export interface Player {
  id: string;
  name: string;
  position: 'GOL' | 'DEF' | 'MEI' | 'ATA';
  overall: number;
}

export interface PlayerStats {
  id: string;
  name: string;
  selection: string;
  position: string;
  goals: number;
  assists: number;
  avgRating: number;
  mvpCount: number;
}

export interface MatchEvent {
  type: 'Goal' | 'YellowCard' | 'RedCard' | 'Assist';
  minute: number;
  playerId: string;
  playerName: string;
  team: 'home' | 'away';
}

export interface MatchResult {
  homeScore: number;
  awayScore: number;
  events: MatchEvent[];
  playerRatings: { playerId: string; playerName: string; rating: number; team: 'home' | 'away' }[];
  mvp: { playerId: string; playerName: string; rating: number; team: 'home' | 'away' } | null;
}

export function simulateMatch(teamA: Team, teamB: Team): MatchResult {
  const events: MatchEvent[] = [];
  const playerRatings: { playerId: string; playerName: string; rating: number; team: 'home' | 'away' }[] = [];
  
  // Initialize player ratings
  teamA.players.forEach(player => {
    playerRatings.push({ playerId: player.id, playerName: player.name, rating: 6.0, team: 'home' });
  });
  teamB.players.forEach(player => {
    playerRatings.push({ playerId: player.id, playerName: player.name, rating: 6.0, team: 'away' });
  });

  // Calculate attack vs defense advantage
  const attackAdvantageA = teamA.attack - teamB.defense;
  const attackAdvantageB = teamB.attack - teamA.defense;
  
  // Base goal probability (adjusted by attack vs defense difference)
  const baseGoalProbability = 0.08; // 8% base chance per 10-minute cycle
  const adjustedProbabilityA = Math.max(0.02, Math.min(0.25, baseGoalProbability + (attackAdvantageA / 200)));
  const adjustedProbabilityB = Math.max(0.02, Math.min(0.25, baseGoalProbability + (attackAdvantageB / 200)));

  // Simulate 90 minutes in 10-minute cycles
  for (let minute = 10; minute <= 90; minute += 10) {
    // Team A attack chance
    if (Math.random() < adjustedProbabilityA) {
      const goalEvent = generateGoalEvent(teamA, teamB, minute, 'home');
      events.push(goalEvent.goal);
      if (goalEvent.assist) events.push(goalEvent.assist);
      
      // Update ratings
      updatePlayerRating(playerRatings, goalEvent.goal.playerId, 0.8);
      if (goalEvent.assist) updatePlayerRating(playerRatings, goalEvent.assist.playerId, 0.5);
    }

    // Team B attack chance
    if (Math.random() < adjustedProbabilityB) {
      const goalEvent = generateGoalEvent(teamB, teamA, minute, 'away');
      events.push(goalEvent.goal);
      if (goalEvent.assist) events.push(goalEvent.assist);
      
      // Update ratings
      updatePlayerRating(playerRatings, goalEvent.goal.playerId, 0.8);
      if (goalEvent.assist) updatePlayerRating(playerRatings, goalEvent.assist.playerId, 0.5);
    }

    // Random card events (5% chance per cycle per team)
    if (Math.random() < 0.05) {
      const cardEvent = generateCardEvent(teamA, minute, 'home');
      events.push(cardEvent);
      updatePlayerRating(playerRatings, cardEvent.playerId, cardEvent.type === 'RedCard' ? -1.5 : -0.3);
    }
    
    if (Math.random() < 0.05) {
      const cardEvent = generateCardEvent(teamB, minute, 'away');
      events.push(cardEvent);
      updatePlayerRating(playerRatings, cardEvent.playerId, cardEvent.type === 'RedCard' ? -1.5 : -0.3);
    }
  }

  // Calculate final scores
  const homeScore = events.filter(e => e.type === 'Goal' && e.team === 'home').length;
  const awayScore = events.filter(e => e.type === 'Goal' && e.team === 'away').length;

  // Finalize ratings with match performance adjustments
  playerRatings.forEach(rating => {
    // Add randomness between -0.5 and +0.5
    rating.rating += (Math.random() - 0.5);
    // Clamp between 3.0 and 10.0
    rating.rating = Math.max(3.0, Math.min(10.0, rating.rating));
    // Round to 1 decimal
    rating.rating = Math.round(rating.rating * 10) / 10;
  });

  // Determine MVP (highest rated player)
  const mvp = playerRatings.reduce((best, current) => 
    current.rating > best.rating ? current : best
  , playerRatings[0]);

  return {
    homeScore,
    awayScore,
    events: events.sort((a, b) => a.minute - b.minute),
    playerRatings,
    mvp
  };
}

function generateGoalEvent(attackingTeam: Team, _defendingTeam: Team, minute: number, side: 'home' | 'away'): { goal: MatchEvent; assist?: MatchEvent } {
  // Weighted random selection based on position and overall
  const attackers = attackingTeam.players.filter(p => p.position === 'ATA');
  const midfielders = attackingTeam.players.filter(p => p.position === 'MEI');
  
  // 70% chance for attacker, 30% for midfielder
  const scorers = Math.random() < 0.7 ? attackers : midfielders;
  
  // Select scorer based on overall (higher overall = higher probability)
  const scorer = selectWeightedPlayer(scorers);
  
  const goal: MatchEvent = {
    type: 'Goal',
    minute,
    playerId: scorer.id,
    playerName: scorer.name,
    team: side
  };

  // 60% chance of assist
  let assist: MatchEvent | undefined;
  if (Math.random() < 0.6) {
    const assistProviders = attackingTeam.players.filter(p => p.id !== scorer.id);
    const assister = selectWeightedPlayer(assistProviders);
    assist = {
      type: 'Assist',
      minute,
      playerId: assister.id,
      playerName: assister.name,
      team: side
    };
  }

  return { goal, assist };
}

function generateCardEvent(team: Team, minute: number, side: 'home' | 'away'): MatchEvent {
  // Defenders and midfielders more likely to get cards
  const cardCandidates = team.players.filter(p => p.position === 'DEF' || p.position === 'MEI');
  const player = selectWeightedPlayer(cardCandidates);
  
  // 85% yellow, 15% red
  const type = Math.random() < 0.85 ? 'YellowCard' : 'RedCard';
  
  return {
    type,
    minute,
    playerId: player.id,
    playerName: player.name,
    team: side
  };
}

function selectWeightedPlayer(players: Player[]): Player {
  if (players.length === 0) {
    // Fallback (shouldn't happen with proper data)
    return { id: 'unknown', name: 'Unknown', position: 'ATA', overall: 50 } as Player;
  }

  // Calculate total weight based on overall
  const totalWeight = players.reduce((sum, player) => sum + player.overall, 0);
  let random = Math.random() * totalWeight;
  
  for (const player of players) {
    random -= player.overall;
    if (random <= 0) {
      return player;
    }
  }
  
  return players[players.length - 1];
}

function updatePlayerRating(
  ratings: { playerId: string; rating: number }[], 
  playerId: string, 
  delta: number
) {
  const rating = ratings.find(r => r.playerId === playerId);
  if (rating) {
    rating.rating += delta;
  }
}