import { Nav, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Shop</StyledLink>
      <StyledLink to="/shopping-cart">Shopping Cart</StyledLink>
    </Nav>
  );
};

export default Navigation;
