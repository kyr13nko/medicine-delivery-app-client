import { Button, Item, Price } from './MedicineItem.styled';

const MedicineItem = ({ medicine }) => {
  return (
    <Item>
      <h3>{medicine.name}</h3>
      <div>
        <Price>Price: {medicine.price}$</Price>
        <Button type="button">Add to Cart</Button>
      </div>
    </Item>
  );
};

export default MedicineItem;
