import styled from 'styled-components';

export const MatchDetailsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
  color: #f5f5f5;

  h3 {
    margin: 1.5rem 0 1rem;
    color: #00ff87;
    font-size: 1.3rem;
    border-bottom: 1px solid #333;
    padding-bottom: 0.5rem;
  }

  .match-info {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;
    font-size: 0.9rem;
    color: #aaa;

    .last-updated {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        background-color: #1e1e1e;
        color: #f5f5f5;
        border: 1px solid #333;
        border-radius: 4px;
        padding: 0.3rem 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.8rem;

        &:hover {
          background-color: #333;
        }
      }
    }
  }

  .events-tabs {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;

    button {
      background-color: #1e1e1e;
      color: #f5f5f5;
      border: none;
      border-radius: 4px;
      padding: 0.3rem 0.8rem;
      cursor: pointer;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;

      &.active {
        background-color: #00ff87;
        color: #121212;
      }

      &:hover:not(.active) {
        background-color: #333;
      }
    }
  }
`;

export const MatchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e1e;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;

    img {
      margin-bottom: 0.5rem;
      height: 50px;
      object-fit: contain;
    }

    span {
      text-align: center;
      font-weight: bold;
    }
  }

  .score-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;

    .score {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }

    .time {
      font-size: 1.8rem;
      margin-bottom: 0.3rem;
    }

    .status {
      background-color: #333;
      padding: 0.2rem 0.8rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;

  h4 {
    margin-bottom: 1rem;
    text-align: center;
    color: #00ff87;
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      width: 15%;
      text-align: center;
      font-size: 0.9rem;
    }

    progress {
      width: 70%;
      height: 10px;
      border-radius: 5px;
      background-color: #333;

      &::-webkit-progress-bar {
        background-color: #333;
        border-radius: 5px;
      }

      &::-webkit-progress-value {
        background-color: #00ff87;
        border-radius: 5px;
      }
    }
  }
`;

export const LineupsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TeamLineup = styled.div`
  background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;

  h4 {
    color: #00ff87;
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.1rem;
  }

  h5 {
    color: #aaa;
    margin: 1rem 0 0.5rem;
    font-size: 0.9rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #333;
  }
`;

export const PlayerRow = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 50px;
  align-items: center;
  padding: 0.3rem 0;
  font-size: 0.9rem;

  .number {
    color: #aaa;
    text-align: center;
  }

  .position {
    color: #aaa;
    font-size: 0.8rem;
    text-align: right;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1.5rem 0;
  border-bottom: 1px solid #333;
  padding-bottom: 0.5rem;
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  color: ${({ active }) => active ? '#00ff87' : '#aaa'};
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ active }) => active ? '#00ff87' : 'transparent'};
  }

  &:hover {
    color: ${({ active }) => active ? '#00ff87' : '#f5f5f5'};
  }
`;

export const ContentSection = styled.div`
  background-color: #1e1e1e;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const CommentaryItem = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #333;

  &:last-child {
    border-bottom: none;
  }

  .time {
    font-weight: bold;
    color: #00ff87;
  }

  .highlight {
    display: inline-block;
    background-color: #00ff87;
    color: #121212;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    margin-top: 0.3rem;
  }
`;

export const MatchSummary = styled.div`
  background-color: #252525;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1.5rem;

  h4 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;

      span:first-child {
        color: #aaa;
      }

      span:last-child {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }
    }
  }
`;

export const RefereeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StadiumInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;