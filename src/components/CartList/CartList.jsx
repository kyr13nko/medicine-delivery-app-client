import CartItem from 'components/CartItem/CartItem';
import { List } from './CartList.styled';

const CartList = ({ medicines }) => {
  return (
    <List>
      {medicines.map(medicine => (
        <CartItem key={medicine._id} medicine={medicine} />
      ))}
    </List>
  );
};

export default CartList;
