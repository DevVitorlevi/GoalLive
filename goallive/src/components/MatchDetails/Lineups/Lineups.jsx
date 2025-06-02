import React from 'react';
import {
    LineupsContainer,
    TeamLineup,
    TeamName,
    Formation,
    PlayersGrid,
    Player,
    PlayerName,
    Coach
} from './LineupsStyle';

const Lineups = ({ lineups }) => {
    if (!lineups || lineups.length === 0) {
        return <div>Escalações não disponíveis</div>;
    }

    const renderPlayers = (players, isStarting) => {
        return players
            .filter(player => player.grid === (isStarting ? 'starting_grids' : 'substitutes'))
            .map(player => (
                <Player key={player.player.id}>
                    <span>{player.player.number}</span>
                    <PlayerName>{player.player.name}</PlayerName>
                </Player>
            ));
    };

    return (
        <LineupsContainer>
            {lineups.map((team) => (
                <TeamLineup key={team.team.id}>
                    <TeamName>
                        <img src={team.team.logo} alt={team.team.name} width={24} height={24} />
                        <span>{team.team.name}</span>
                    </TeamName>

                    <Formation>Formação: {team.formation}</Formation>

                    <h4>Titulares</h4>
                    <PlayersGrid>
                        {renderPlayers(team.startXI, true)}
                    </PlayersGrid>

                    <h4>Reservas</h4>
                    <PlayersGrid>
                        {renderPlayers(team.substitutes, false)}
                    </PlayersGrid>

                    <Coach>
                        <strong>Treinador:</strong> {team.coach.name}
                    </Coach>
                </TeamLineup>
            ))}
        </LineupsContainer>
    );
};

export default Lineups;