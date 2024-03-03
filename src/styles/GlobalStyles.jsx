import 'modern-normalize';

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    }

  body {
    font-family: "Manrope", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    margin: 0;

    -webkit-font-smoothing: antialiased;

    background-color: #f4f3f2;
    color: #232323;
    min-height: 100vh;
  }

 /* #root {
    display: flex;
    flex-direction: column;

    min-height: 100vh;
  }  */

  a {
    color: currentColor;
    text-decoration: none;
  }

    ul, ol {
      margin: 0;
      padding: 0;
      list-style: none;
    }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    padding: 0;
} 
`;

export const Section = styled.section`
  padding: 24px 0;
  margin: 0 auto;
`;

export const Container = styled.div`
  @media screen and (min-width: 320px) {
    max-width: 100%;
    padding: 0 16px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 96px;
  }
`;
