import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 100%;
  tr {
    height: ${p => p.theme.space[5]}px;
  }

  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);

  text-align: center;
  font-size: ${p => p.theme.space[4]}px;
`;

export const TheadTable = styled.thead`
  text-transform: uppercase;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
`;

export const TbodyTable = styled.tbody`
  color: ${p => p.theme.colors.gray};

  tr:nth-child(2n) {
    background-color: ${p => p.theme.colors.light};
  }

  td:first-of-type {
    text-transform: capitalize;
  }

  td:last-of-type {
    text-transform: uppercase;
  }
`;
