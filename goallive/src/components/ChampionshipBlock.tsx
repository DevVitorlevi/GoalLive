import React from 'react';
import GameCard from './GameCard';

interface ChampionshipBlockProps {
    league: any;
    fixtures: any[];
}

const ChampionshipBlock: React.FC<ChampionshipBlockProps> = ({ league, fixtures }) => {
    return (
        <section style={{ marginBottom: 40 }}>
            <header style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <img
                    src={league.league.logo}
                    alt={league.league.name}
                    style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <h2>{league.league.name}</h2>
                <span style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
                    Rodada {league.seasons[0]?.round || 'N/A'}
                </span>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                {fixtures.map((fixture) => (
                    <GameCard key={fixture.fixture.id} match={fixture} />
                ))}
            </div>

            <footer style={{ marginTop: 10, textAlign: 'right' }}>
                <a href={`/standings?league=${league.league.id}`} style={{ color: '#0af' }}>
                    Ver a tabela ›
                </a>
            </footer>
        </section>
    );
};

export default ChampionshipBlock;
