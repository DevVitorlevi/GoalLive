import React from 'react';
import dayjs from 'dayjs';
import {
    TimelineContainer,
    TimelineItem,
    TimelineTime,
    TimelineContent,
    HomeEvent,
    AwayEvent,
    EventIcon,
    EventPlayer
} from './EventsTimelineStyle';

const EventsTimeline = ({ events = [] }) => {
    if (!events || events.length === 0) {
        return <div>Nenhum evento registrado nesta partida</div>;
    }

    const getEventIcon = (type) => {
        switch (type) {
            case 'Goal':
                return '⚽';
            case 'Card':
                return '🟨';
            case 'subst':
                return '🔄';
            case 'Var':
                return '📺';
            default:
                return '•';
        }
    };

    return (
        <TimelineContainer>
            {events.map((event) => {
                // Verificação segura das propriedades
                const teamId = event.team?.id;
                const homeTeamId = event.team?.home?.id;
                const isHomeEvent = teamId && homeTeamId && teamId === homeTeamId;

                return (
                    <TimelineItem key={`${event.time?.elapsed || ''}-${event.player?.id || ''}-${event.type || ''}`}>
                        <TimelineTime>{event.time?.elapsed || '?'}'</TimelineTime>
                        <TimelineContent>
                            {isHomeEvent ? (
                                <HomeEvent>
                                    <EventPlayer>{event.player?.name || 'Jogador'}</EventPlayer>
                                    <EventIcon>{getEventIcon(event.type)}</EventIcon>
                                    <span>{event.detail || 'Evento'}</span>
                                </HomeEvent>
                            ) : (
                                <AwayEvent>
                                    <span>{event.detail || 'Evento'}</span>
                                    <EventIcon>{getEventIcon(event.type)}</EventIcon>
                                    <EventPlayer>{event.player?.name || 'Jogador'}</EventPlayer>
                                </AwayEvent>
                            )}
                        </TimelineContent>
                    </TimelineItem>
                );
            })}
        </TimelineContainer>
    );
};

export default EventsTimeline;