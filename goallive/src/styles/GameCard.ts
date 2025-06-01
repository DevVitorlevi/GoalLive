import styled from "styled-components";

export const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #eee;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const TeamInfo = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;

export const TeamLogo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const TeamName = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: #eee;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Score = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  width: 10%;
  text-align: center;
  color: #fff;
`;

export const GameTime = styled.div`
  font-size: 0.9rem;
  color: #bbb;
  width: 20%;
  text-align: center;
`;
