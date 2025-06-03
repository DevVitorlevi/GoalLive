import React from 'react';
import {
    TimelineContainer,
    TimelineItem,
    TimelineTime,
    TimelineContent,
    HomeEvent,
    AwayEvent,
    EventIcon,
    EventPlayer,
    NoEventsMessage
} from './EventsTimelineStyle';

const EVENT_TRANSLATIONS = {
    'Goal': 'Gol',
    'Card': 'Cartão',
    'subst': 'Substituição',
    'Var': 'VAR',
    'Penalty': 'Pênalti',
    'MissedPenalty': 'Pênalti Perdido'
};

const DETAIL_TRANSLATIONS = {
    'Normal Goal': 'Gol normal',
    'Own Goal': 'Gol contra',
    'Penalty': 'De pênalti',
    'Yellow Card': 'Cartão amarelo',
    'Red Card': 'Cartão vermelho',
    'Substitution': 'Substituição',
    'Goal cancelled': 'Gol anulado',
    'Penalty confirmed': 'Pênalti confirmado'
};

const EventsTimeline = ({ events = [] }) => {
    if (!events || events.length === 0) {
        return <NoEventsMessage>Nenhum evento registrado na partida</NoEventsMessage>;
    }

    const getEventIcon = (type) => {
        switch (type) {
            case 'Goal': return '⚽';
            case 'Card': return '🟨';
            case 'subst': return '🔄';
            case 'Var': return '📺';
            case 'Penalty': return '⏺️';
            default: return '•';
        }
    };

    const translateDetail = (detail) => {
        return DETAIL_TRANSLATIONS[detail] || detail;
    };

    return (
        <TimelineContainer>
            {events.map((event) => {
                const isHomeEvent = event.team?.id === event.team?.home?.id;

                return (
                    <TimelineItem key={`${event.time?.elapsed}-${event.player?.id}-${event.type}`}>
                        <TimelineTime>{event.time?.elapsed || '?'}'</TimelineTime>
                        <TimelineContent>
                            {isHomeEvent ? (
                                <HomeEvent>
                                    <EventPlayer>{event.player?.name || 'Jogador'}</EventPlayer>
                                    <EventIcon>{getEventIcon(event.type)}</EventIcon>
                                    <span>{translateDetail(event.detail)}</span>
                                </HomeEvent>
                            ) : (
                                <AwayEvent>
                                    <span>{translateDetail(event.detail)}</span>
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