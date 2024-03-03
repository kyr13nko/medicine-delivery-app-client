import { Item } from './PharmacyItem.styled';

const PharmacyItem = ({ pharmacy, onPharmacyClick, isSelected }) => {
  return (
    <Item onClick={() => onPharmacyClick(pharmacy)} $isSelected={isSelected}>
      <p>{pharmacy.name}</p>
    </Item>
  );
};

export default PharmacyItem;
