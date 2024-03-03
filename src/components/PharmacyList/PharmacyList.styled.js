import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: 290px;

  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
