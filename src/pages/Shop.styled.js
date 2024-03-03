import styled from 'styled-components';
import { Container } from 'styles/GlobalStyles';

export const ShopsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
