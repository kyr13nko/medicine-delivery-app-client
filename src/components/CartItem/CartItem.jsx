import { useDispatch } from 'react-redux';
import { delFromCart } from '../../redux/cartSlice';

import { Button, Item } from './CartItem.styled';
import { toast } from 'react-toastify';

const CartItem = ({ medicine }) => {
  const dispatch = useDispatch();

  const handleDelFromCart = () => {
    dispatch(delFromCart(medicine));
    toast.success(`${medicine.name} is deleted from the cart!`);
  };

  return (
    <Item>
      <h3>{medicine.name}</h3>
      <p>{medicine.price}$</p>
      <Button type="button" onClick={handleDelFromCart}>
        Delete
      </Button>
    </Item>
  );
};

export default CartItem;
