import { useDispatch, useSelector } from 'react-redux';
import { Button, Item, Price } from './MedicineItem.styled';
import { addToCart } from '../../redux/cartSlice';
import { selectCartMedicines } from '../../redux/selectors';
import { toast } from 'react-toastify';

const MedicineItem = ({ medicine }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartMedicines);
  const isMedicineInCart = cart.some(item => item._id === medicine._id);

  const handleAddToCart = () => {
    if (!isMedicineInCart) {
      dispatch(addToCart(medicine));
      toast.success(`${medicine.name} added to the cart!`);
    } else {
      toast.warn('Medicine is already in the cart!');
    }
  };

  return (
    <Item>
      <h3>{medicine.name}</h3>
      <div>
        <Price>Price: {medicine.price}$</Price>
        <Button type="button" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </Item>
  );
};

export default MedicineItem;
