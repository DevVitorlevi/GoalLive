export const COMPETITIONS = {
  // Ligas Europeias
  39: { name: 'Premier League', country: 'England', type: 'league' },
  140: { name: 'La Liga', country: 'Spain', type: 'league' },
  135: { name: 'Serie A', country: 'Italy', type: 'league' },
  78: { name: 'Bundesliga', country: 'Germany', type: 'league' },
  61: { name: 'Ligue 1', country: 'France', type: 'league' },
  88: { name: 'Eredivisie', country: 'Netherlands', type: 'league' },
  94: { name: 'Primeira Liga', country: 'Portugal', type: 'league' },
  144: { name: 'Belgian Pro League', country: 'Belgium', type: 'league' },
  203: { name: 'Super Lig', country: 'Turkey', type: 'league' },
  235: { name: 'Russian Premier League', country: 'Russia', type: 'league' },

  // Ligas das Américas
  71: { name: 'Brasileirão Série A', country: 'Brazil', type: 'league' },
  72: { name: 'Brasileirão Série B', country: 'Brazil', type: 'league' },
  253: { name: 'Major League Soccer', country: 'USA/Canada', type: 'league' },
  262: { name: 'Liga MX', country: 'Mexico', type: 'league' },
  128: { name: 'Liga Profesional Argentina', country: 'Argentina', type: 'league' },

  // Liga Ásia/África
  307: { name: 'Saudi Pro League', country: 'Saudi Arabia', type: 'league' },

  // Competições Europeias
  2: { name: 'UEFA Champions League', country: 'Europe', type: 'cup' },
  3: { name: 'UEFA Europa League', country: 'Europe', type: 'cup' },
  848: { name: 'UEFA Conference League', country: 'Europe', type: 'cup' },

  // Competições Sul-Americanas
  13: { name: 'Copa Libertadores', country: 'South America', type: 'cup' },
  15: { name: 'Copa Sul-Americana', country: 'South America', type: 'cup' },

  // Competições Internacionais
  1: { name: 'Copa do Mundo', country: 'International', type: 'cup' },
  4: { name: 'Eurocopa', country: 'Europe', type: 'cup' },
  9: { name: 'Copa América', country: 'South America', type: 'cup' },
  14: { name: 'Copa das Nações Africanas', country: 'Africa', type: 'cup' },
  17: { name: 'Copa Asiática', country: 'Asia', type: 'cup' },
  29: { name: 'CONCACAF Nations League', country: 'North America', type: 'cup' }
};

// IDs dos campeonatos que serão exibidos
export const ALLOWED_COMPETITION_IDS = Object.keys(COMPETITIONS).map(Number);