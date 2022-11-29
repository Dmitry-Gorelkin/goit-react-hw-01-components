import styled from 'styled-components';

export const StatisticSection = styled.div`
  width: ${p => p.theme.space[9]}px;
`;

export const Title = styled.h2`
  padding: ${p => p.theme.space[4]}px 0px;

  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);

  background-color: ${p => p.theme.randomeHexColor};

  span {
    padding: ${p => p.theme.space[3]}px 0px;
  }
`;
