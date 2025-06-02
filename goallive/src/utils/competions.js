export const COMPETITIONS = {
  // Ligas Europeias
  39: { name: 'Premier League', country: 'England', type: 'league', priority: 1 },
  140: { name: 'La Liga', country: 'Spain', type: 'league', priority: 1 },
  135: { name: 'Serie A', country: 'Italy', type: 'league', priority: 1 },
  78: { name: 'Bundesliga', country: 'Germany', type: 'league', priority: 1 },
  61: { name: 'Ligue 1', country: 'France', type: 'league', priority: 1 },
  88: { name: 'Eredivisie', country: 'Netherlands', type: 'league', priority: 2 },
  94: { name: 'Primeira Liga', country: 'Portugal', type: 'league', priority: 2 },
  144: { name: 'Belgian Pro League', country: 'Belgium', type: 'league', priority: 2 },
  203: { name: 'Super Lig', country: 'Turkey', type: 'league', priority: 2 },
  235: { name: 'Russian Premier League', country: 'Russia', type: 'league', priority: 2 },

  // Ligas das Américas
  71: { name: 'Brasileirão Série A', country: 'Brazil', type: 'league', priority: 1 },
  72: { name: 'Brasileirão Série B', country: 'Brazil', type: 'league', priority: 2 },
  253: { name: 'Major League Soccer', country: 'USA/Canada', type: 'league', priority: 2 },
  262: { name: 'Liga MX', country: 'Mexico', type: 'league', priority: 2 },
  128: { name: 'Liga Profesional Argentina', country: 'Argentina', type: 'league', priority: 2 },

  // Liga Ásia/África
  307: { name: 'Saudi Pro League', country: 'Saudi Arabia', type: 'league', priority: 3 },

  // Competições Europeias
  2: { name: 'UEFA Champions League', country: 'Europe', type: 'cup', priority: 1 },
  3: { name: 'UEFA Europa League', country: 'Europe', type: 'cup', priority: 1 },
  848: { name: 'UEFA Conference League', country: 'Europe', type: 'cup', priority: 2 },

  // Competições Sul-Americanas
  13: { name: 'Copa Libertadores', country: 'South America', type: 'cup', priority: 1 },
  15: { name: 'Copa Sul-Americana', country: 'South America', type: 'cup', priority: 2 },

  // Competições Internacionais
  1: { name: 'Copa do Mundo', country: 'International', type: 'cup', priority: 1 },
  4: { name: 'Eurocopa', country: 'Europe', type: 'cup', priority: 1 },
  9: { name: 'Copa América', country: 'South America', type: 'cup', priority: 1 },
  14: { name: 'Copa das Nações Africanas', country: 'Africa', type: 'cup', priority: 2 },
  17: { name: 'Copa Asiática', country: 'Asia', type: 'cup', priority: 2 },
  29: { name: 'CONCACAF Nations League', country: 'North America', type: 'cup', priority: 2 }
};

export const ALLOWED_COMPETITION_IDS = Object.keys(COMPETITIONS).map(Number);

export const COMPETITION_PRIORITY = {
  1: 'high',
  2: 'medium',
  3: 'low'
};