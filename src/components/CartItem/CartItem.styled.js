import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  width: 100%;

  background-color: white;
  border: 1px solid teal;
  border-radius: 12px;

  padding: 6px 12px;

  @media screen and (min-width: 425px) {
    width: calc(100% / 2 - 8px);
  }

  @media screen and (min-width: 1024px) {
    width: calc(100% / 3 - 16px);
  }
`;

export const Button = styled.button`
  width: 100%;

  background-color: transparent;

  border: 1px solid teal;
  border-radius: 12px;

  margin-top: 8px;
  padding: 6px 12px;

  transition: color background-color 0.3 ease;

  &:hover,
  &:focus {
    color: white;
    background-color: teal;
  }
`;
