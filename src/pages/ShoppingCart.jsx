import { useSelector } from 'react-redux';

import { selectCartMedicines } from '../redux/selectors';

import { Content, ShopsContainer } from './Pages.styled';
import { Section } from 'styles/GlobalStyles';
import { hiddenStyles } from 'styles/visually-hidden';
import CartForm from 'components/CartForm/CartForm';

const ShoppingCart = () => {
  const cart = useSelector(selectCartMedicines);

  return (
    <Section>
      <ShopsContainer>
        <h2 style={hiddenStyles}>Shopping Cart</h2>
        {cart.length !== 0 ? (
          <CartForm medicines={cart} />
        ) : (
          <Content>No medicines add to the cart!</Content>
        )}
      </ShopsContainer>
    </Section>
  );
};

export default ShoppingCart;
