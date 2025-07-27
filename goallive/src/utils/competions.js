export const COMPETITIONS = {
  // Ligas Europeias
  39: { name: 'Premier League', country: 'England', type: 'league', priority: 1 },
  140: { name: 'La Liga', country: 'Spain', type: 'league', priority: 1 },
  135: { name: 'Serie A', country: 'Italy', type: 'league', priority: 1 },
  78: { name: 'Bundesliga', country: 'Germany', type: 'league', priority: 1 },
  61: { name: 'Ligue 1', country: 'France', type: 'league', priority: 1 },

  // Ligas das Américas
  71: { name: 'Brasileirão Série A', country: 'Brazil', type: 'league', priority: 1 },
  72: { name: 'Brasileirão Série B', country: 'Brazil', type: 'league', priority: 2 },

  // Liga Ásia/África
  307: { name: 'Saudi Pro League', country: 'Saudi Arabia', type: 'league', priority: 3 },

  // Competições Europeias
  2: { name: 'UEFA Champions League', country: 'Europe', type: 'cup', priority: 1 },

  // Competições Sul-Americanas
  13: { name: 'Copa Libertadores', country: 'South America', type: 'cup', priority: 1 },

  // Competições Internacionais
  1: { name: 'Copa do Mundo', country: 'International', type: 'cup', priority: 1 },
  4: { name: 'Eurocopa', country: 'Europe', type: 'cup', priority: 1 },
  9: { name: 'Copa América', country: 'South America', type: 'cup', priority: 1 },
};

export const ALLOWED_COMPETITION_IDS = Object.keys(COMPETITIONS).map(Number);

export const COMPETITION_PRIORITY = {
  1: 'high',
  2: 'medium',
  3: 'low'
};