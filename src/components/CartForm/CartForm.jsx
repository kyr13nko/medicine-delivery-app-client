import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/selectors';

import CartList from 'components/CartList/CartList';
import { BtnWrapper, Button, Form, FormInputs, FormWrapper, Input, Label } from './CartForm.styled';

const CartForm = ({ medicines }) => {
  const cart = useSelector(selectCart);

  const calculateTotalPrice = () => {
    const totalPrice = cart.reduce((total, medicine) => total + medicine.price, 0);
    return parseFloat(totalPrice.toFixed(2));
  };

  return (
    <Form>
      <FormWrapper>
        <FormInputs>
          <Label>
            Name:
            <Input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleInputChange}
            />
          </Label>
          <Label>
            Email:
            <Input
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}
            />
          </Label>
          <Label>
            Phone:
            <Input
              type="tel"
              name="phone"
              // value={formData.phone}
              // onChange={handleInputChange}
            />
          </Label>
          <Label>
            Address:
            <Input
              type="text"
              name="address"
              // value={formData.address}
              // onChange={handleInputChange}
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
