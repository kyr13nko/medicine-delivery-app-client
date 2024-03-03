import styled from 'styled-components';

export const Item = styled.li`
  width: 100%;

  text-align: center;

  color: ${props => (props.$isSelected ? 'white' : 'teal')};
  background-color: ${props => (props.$isSelected ? 'teal' : 'white')};

  border: 1px solid teal;
  border-radius: 12px;

  cursor: pointer;

  padding: 6px 12px;
`;
