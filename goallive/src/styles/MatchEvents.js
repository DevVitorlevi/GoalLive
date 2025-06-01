import styled from 'styled-components';

const getEventColor = (type) => {
  switch (type) {
    case 'GOAL':
      return '#00ff87';
    case 'YELLOW_CARD':
      return '#ffcc00';
    case 'RED_CARD':
      return '#ff3333';
    default:
      return '#f5f5f5';
  }
};

export const EventsContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 1rem;
`;

export const EventItem = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 100px;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;

  &:last-child {
    border-bottom: none;
  }

  div:last-child {
    text-align: right;
    font-size: 0.9rem;
    color: #aaa;
  }
`;

export const EventTime = styled.div`
  font-weight: bold;
  color: #f5f5f5;
`;

export const EventType = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ type }) => getEventColor(type)};

  svg {
    font-size: 1.2rem;
  }

  small {
    color: #aaa;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
`;