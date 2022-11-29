import styled from 'styled-components';

export const FriendItem = styled.li`
  width: 100%;

  display: flex;
  align-items: center;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;

  box-shadow: 1px 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Status = styled.span`
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;

  margin-right: ${p => p.theme.space[4]}px;

  background-color: ${p =>
    p.isOnline ? p.theme.colors.online : p.theme.colors.offline};

  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;

  margin-right: ${p => p.theme.space[4]}px;

  border-radius: ${p => p.theme.space[2]}px;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
`;
