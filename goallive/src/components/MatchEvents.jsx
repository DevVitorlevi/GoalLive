import React from 'react';
import { EventItem, EventsContainer, EventTime, EventType } from '../styles/MatchEvents';
import {
    IconBallFootball,
    IconRefresh,
    IconCards,
    IconCardboards,
} from '@tabler/icons-react';

const getEventIcon = (type) => {
    switch (type) {
        case 'GOAL':
            return <IconBallFootball color="#00ff87" size={20} />;
        case 'SUBSTITUTION':
            return <IconRefresh color="#f5f5f5" size={20} />;
        case 'YELLOW_CARD':
            return <IconCards color="#ffcc00" size={20} />;
        case 'RED_CARD':
            return <IconCardboards color="#ff3333" size={20} />;
        default:
            return null;
    }
};

export const MatchEvents = ({ events }) => {
    if (!events || events.length === 0) {
        return <p>Nenhum evento registrado</p>;
    }

    return (
        <EventsContainer>
            {events.map(event => (
                <EventItem key={event.id} type={event.type}>
                    <EventTime>{event.time}'</EventTime>
                    <EventType>
                        {getEventIcon(event.type)}
                        <span>{event.player.name}</span>
                        {event.assist && <small>(Assistência: {event.assist.name})</small>}
                    </EventType>
                    <div>{event.team.name}</div>
                </EventItem>
            ))}
        </EventsContainer>
    );
};