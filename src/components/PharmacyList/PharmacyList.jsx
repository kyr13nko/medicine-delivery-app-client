import PharmacyItem from 'components/PharmacyItem/PharmacyItem';
import { List, Title, Wrapper } from './PharmacyList.styled';
import { useState } from 'react';

const PharmacyList = ({ pharmacies, onPharmacyClick }) => {
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  const handlePharmacyClick = pharmacy => {
    setSelectedPharmacy(pharmacy);
    onPharmacyClick(pharmacy);
  };
  return (
    <Wrapper>
      <Title>Shops</Title>
      <List>
        {pharmacies.map(pharmacy => (
          <PharmacyItem
            key={pharmacy._id}
            pharmacy={pharmacy}
            onPharmacyClick={handlePharmacyClick}
            isSelected={selectedPharmacy && selectedPharmacy._id === pharmacy._id}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default PharmacyList;
