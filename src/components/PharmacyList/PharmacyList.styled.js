import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  /* color: teal; */
`;

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
