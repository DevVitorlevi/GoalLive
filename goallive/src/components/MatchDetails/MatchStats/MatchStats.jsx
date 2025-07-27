import React from 'react';
import {
    StatsContainer,
    StatRow,
    StatName,
    StatValue,
    StatBar,
    NoStatsMessage
} from './MatchStatsStyle';

const STATS_CONFIG = [
    { key: 'Ball Possession', name: 'Posse de Bola', isPercentage: true },
    { key: 'Total Shots', name: 'Finalizações' },
    { key: 'Shots on Goal', name: 'Finalizações no Gol' },
    { key: 'Shots off Goal', name: 'Finalizações para Fora' },
    { key: 'Blocked Shots', name: 'Finalizações Bloqueadas' },
    { key: 'Corner Kicks', name: 'Escanteios' },
    { key: 'Fouls', name: 'Faltas' },
    { key: 'Yellow Cards', name: 'Cartões Amarelos' },
    { key: 'Red Cards', name: 'Cartões Vermelhos' }
];

const MatchStats = ({ stats }) => {
    if (!stats || stats.length !== 2) {
        return <NoStatsMessage>Estatísticas não disponíveis para esta partida</NoStatsMessage>;
    }

    const [homeStats, awayStats] = stats;

    const getStatValue = (teamStats, statKey) => {
        if (!Array.isArray(teamStats.statistics)) return '0';
        const stat = teamStats.statistics.find(s => s.type === statKey);
        return stat?.value ?? '0';
    };

    return (
        <StatsContainer>
            {STATS_CONFIG.map(({ key, name, isPercentage }) => {
                const homeValue = getStatValue(homeStats, key);
                const awayValue = getStatValue(awayStats, key);

                const homeNum = parseFloat(homeValue.toString().replace('%', '')) || 0;
                const awayNum = parseFloat(awayValue.toString().replace('%', '')) || 0;

                const total = homeNum + awayNum || 1;
                const homePercentage = (homeNum / total) * 100;
                const awayPercentage = (awayNum / total) * 100;

                return (
                    <StatRow key={key}>
                        <StatValue>{isPercentage ? `${homeNum}%` : homeValue}</StatValue>
                        <StatBar>
                            <div style={{ width: `${homePercentage}%` }} />
                        </StatBar>
                        <StatName>{name}</StatName>
                        <StatBar $reverse>
                            <div style={{ width: `${awayPercentage}%` }} />
                        </StatBar>
                        <StatValue>{isPercentage ? `${awayNum}%` : awayValue}</StatValue>
                    </StatRow>
                );
            })}
        </StatsContainer>
    );
};

export default MatchStats;
