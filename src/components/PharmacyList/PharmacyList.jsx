import PharmacyItem from 'components/PharmacyItem/PharmacyItem';
import { List } from './PharmacyList.styled';
import { useState } from 'react';

const PharmacyList = ({ pharmacies, onPharmacyClick }) => {
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  const handlePharmacyClick = pharmacy => {
    setSelectedPharmacy(pharmacy);
    onPharmacyClick(pharmacy);
  };
  return (
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
  );
};

export default PharmacyList;
