import React from 'react';

interface GameCardProps {
    match: any;
}

const GameCard: React.FC<GameCardProps> = ({ match }) => {
    const homeTeam = match.teams.home;
    const awayTeam = match.teams.away;
    const fixture = match.fixture;

    return (
        <div
            style={{
                backgroundColor: '#222',
                borderRadius: 8,
                padding: 10,
                color: '#ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <img src={homeTeam.logo} alt={homeTeam.name} style={{ width: 30, height: 30 }} />
                <div>{homeTeam.name}</div>
            </div>

            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
                {match.goals.home} x {match.goals.away}
                <br />
                <small>{new Date(fixture.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</small>
            </div>

            <div style={{ textAlign: 'center' }}>
                <img src={awayTeam.logo} alt={awayTeam.name} style={{ width: 30, height: 30 }} />
                <div>{awayTeam.name}</div>
            </div>
        </div>
    );
};

export default GameCard;
