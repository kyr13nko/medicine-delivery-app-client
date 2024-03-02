/* eslint-disable jsx-a11y/alt-text */
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import {
  Container,
  Header,
  Navigation,
  StyledLink,
  MainWrapper,
  HeaderWrapper,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <HeaderWrapper>
            <Navigation>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/shop">Shop</StyledLink>
              <StyledLink to="/shopping-card">Shopping Card</StyledLink>
            </Navigation>
          </HeaderWrapper>
        </Container>
      </Header>
      <main>
        <Container>
          <MainWrapper>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </MainWrapper>
        </Container>
      </main>
    </>
  );
};

export default Layout;
