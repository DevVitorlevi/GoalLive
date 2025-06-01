import styled from 'styled-components';

const getStatusColor = (status, theme) => {
  switch (status) {
    case 'IN_PLAY':
      return '#00ff87'; // Verde
    case 'PAUSED':
      return '#ffcc00'; // Amarelo
    case 'FINISHED':
      return '#888'; // Cinza
    default:
      return '#f5f5f5'; // Branco
  }
};

export const MatchCardContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  border-left: 4px solid ${({ status }) => getStatusColor(status)};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const CompetitionInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #aaa;

  img {
    margin-left: 0.5rem;
  }
`;

export const Teams = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;

  span {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
  }

  img {
    object-fit: contain;
  }
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  width: 20%;
  justify-content: center;

  span {
    margin: 0 0.2rem;
  }
`;

export const MatchTime = styled.div`
  color: ${({ status }) => getStatusColor(status)};
  font-weight: bold;
`;