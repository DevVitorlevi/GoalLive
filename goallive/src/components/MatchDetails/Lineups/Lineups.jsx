import React from 'react';
import {
    LineupsContainer,
    TeamLineup,
    TeamName,
    Formation,
    PlayersGrid,
    Player,
    PlayerName,
    PlayerPosition,
    Coach,
    NoLineupMessage,
    SectionTitle
} from './LineupsStyle';

const POSITION_TRANSLATION = {
    'G': 'GOL',
    'D': 'DEF',
    'M': 'MEI',
    'F': 'ATA'
};

const Lineups = ({ lineups }) => {
    if (!lineups || lineups.length !== 2 || !lineups.every(l => l.startXI && l.substitutes)) {
        return <NoLineupMessage>Escalações não disponíveis para esta partida</NoLineupMessage>;
    }

    const renderPlayer = (player) => (
        <Player key={player.player.id}>
            <PlayerName>
                <span className="number">{player.player.number || '-'}</span>
                {player.player.name}
            </PlayerName>
            {player.player.pos && (
                <PlayerPosition>
                    {POSITION_TRANSLATION[player.player.pos] || player.player.pos}
                </PlayerPosition>
            )}
        </Player>
    );

    return (
        <LineupsContainer>
            {lineups.map((team) => (
                <TeamLineup key={team.team.id}>
                    <TeamName>
                        <img src={team.team.logo} alt={team.team.name} width={24} height={24} />
                        <span>{team.team.name}</span>
                    </TeamName>

                    <Formation>Formação: {team.formation || 'Não informada'}</Formation>

                    <SectionTitle>Titulares</SectionTitle>
                    <PlayersGrid>
                        {team.startXI.map(renderPlayer)}
                    </PlayersGrid>

                    <SectionTitle>Reservas</SectionTitle>
                    <PlayersGrid>
                        {team.substitutes.map(renderPlayer)}
                    </PlayersGrid>

                    {team.coach && (
                        <Coach>
                            <strong>Treinador:</strong> {team.coach.name}
                        </Coach>
                    )}
                </TeamLineup>
            ))}
        </LineupsContainer>
    );
};

export default Lineups;