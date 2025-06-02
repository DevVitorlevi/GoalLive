// src/components/MatchEvents.jsx
import React from 'react';
import { EventItem, EventsContainer, EventTime, EventType } from '../styles/MatchEvents';
import {
    IconBallFootball,
    IconRefresh,
    IconCards,
    IconCardboards,
} from '@tabler/icons-react';

const getEventIcon = (type) => {
    const eventType = type.toLowerCase();

    if (eventType.includes('goal')) return <IconBallFootball color="#00ff87" size={20} />;
    if (eventType.includes('subst')) return <IconRefresh color="#f5f5f5" size={20} />;
    if (eventType.includes('yellow')) return <IconCards color="#ffcc00" size={20} />;
    if (eventType.includes('red')) return <IconCardboards color="#ff3333" size={20} />;
    return null;
};

export const MatchEvents = ({ events }) => {
    if (!events || events.length === 0) {
        return <p>Nenhum evento registrado</p>;
    }

    return (
        <EventsContainer>
            {events.map((event, index) => (
                <EventItem key={index} type={event.type}>
                    <EventTime>{event.time.elapsed}'{event.time.extra ? `+${event.time.extra}` : ''}</EventTime>
                    <EventType>
                        {getEventIcon(event.type)}
                        <span>{event.player.name}</span>
                        {event.assist?.name && <small>(Assistência: {event.assist.name})</small>}
                    </EventType>
                    <div>{event.team.name}</div>
                </EventItem>
            ))}
        </EventsContainer>
    );
};