import styled from 'styled-components';

export const CardProfile = styled.div`
  width: ${p => p.theme.space[9]}px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background-color: ${p => p.theme.colors.light};

  border-radius: ${p => p.theme.space[3]}px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${p => p.theme.space[3]}px 0px;

  p {
    padding: ${p => p.theme.space[3]}px 0px;
  }
`;

export const Avatar = styled.img`
  width: ${p => p.theme.space[8]}px;

  background-color: ${p => p.theme.colors.white};

  border-radius: 50%;
  border: 1px solid ${p => p.theme.colors.gray};
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const StatsList = styled.ul`
  display: flex;

  background-color: ${p => p.theme.colors.gray};
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-basis: calc(100% / 3);

  padding: ${p => p.theme.space[3]}px 0px;

  border-top: 1px solid ${p => p.theme.colors.dark};
  &:not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.dark};
  }

  span {
    padding: ${p => p.theme.space[2]}px 0px;
  }
`;
