import { useDispatch, useSelector } from 'react-redux';
import { selectCartMedicines, selectCartUser } from '../../redux/selectors';
import { resetUser, updateUser } from '../../redux/cartSlice';
import { sendOrder } from '../../redux/cartOperations';

import { toast } from 'react-toastify';
import CartList from 'components/CartList/CartList';
import { BtnWrapper, Button, Form, FormInputs, FormWrapper, Input, Label } from './CartForm.styled';

const CartForm = ({ medicines }) => {
  const dispatch = useDispatch();
  const cartMedicines = useSelector(selectCartMedicines);

  const cartUser = useSelector(selectCartUser);

  const handleInputChange = e => {
    const { name, value } = e.target;
    dispatch(updateUser({ [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const order = {
      user: cartUser,
      medicines: cartMedicines,
    };

    try {
      dispatch(sendOrder(order));
      toast.success('Order send successfully!');
    } catch (error) {
      toast.error('Something went wrong! Please, try again later!');
    }

    dispatch(resetUser());
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartMedicines.reduce((total, medicine) => total + medicine.price, 0);
    return parseFloat(totalPrice.toFixed(2));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormWrapper>
        <FormInputs>
          <Label>
            Name:
            <Input
              type="text"
              name="name"
              value={cartUser.name}
              onChange={handleInputChange}
              required
            />
          </Label>
          <Label>
            Email:
            <Input
              type="email"
              name="email"
              value={cartUser.email}
              onChange={handleInputChange}
              required
            />
          </Label>
          <Label>
            Phone:
            <Input
              type="tel"
              name="phone"
              value={cartUser.phone}
              onChange={handleInputChange}
              required
            />
          </Label>
          <Label>
            Address:
            <Input
              type="text"
              name="address"
              value={cartUser.address}
              onChange={handleInputChange}
              required
            />
          </Label>
        </FormInputs>
        <CartList medicines={medicines} />
      </FormWrapper>
      <BtnWrapper>
        <p>Total price: {calculateTotalPrice()}$</p>
        <Button type="submit">Submit</Button>
      </BtnWrapper>
    </Form>
  );
};

export default CartForm;
