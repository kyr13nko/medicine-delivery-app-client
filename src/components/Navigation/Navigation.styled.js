import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;

  color: teal;
  border-radius: 8px;

  padding: 8px 12px;

  transition: background-color 0.3s ease;

  &.active {
    color: white;
    background-color: teal;
    &:hover,
    &:focus {
      background-color: teal;
    }
  }
`;
