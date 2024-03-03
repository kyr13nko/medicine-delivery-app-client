import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoading, selectPharmacies } from '../redux/pharmacySelectors';
import { fetchPharmacy } from '../redux/pharmacyOperations';

import PharmacyList from 'components/PharmacyList/PharmacyList';
import MedicineList from 'components/MedicineList/MedicineList';

import { Section } from 'styles/GlobalStyles';
import { ShopsContainer } from './Shop.styled';
import { hiddenStyles } from 'styles/visually-hidden';
import Loader from 'components/Loader/Loader';

const Shop = () => {
  const dispatch = useDispatch();
  const pharmacies = useSelector(selectPharmacies);
  const isLoading = useSelector(selectIsLoading);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  useEffect(() => {
    dispatch(fetchPharmacy());
  }, [dispatch]);

  const handlePharmacyClick = pharmacy => {
    setSelectedPharmacy(pharmacy);
  };

  return (
    <Section>
      <ShopsContainer>
        <h2 style={hiddenStyles}>Shops</h2>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <PharmacyList pharmacies={pharmacies} onPharmacyClick={handlePharmacyClick} />
            {selectedPharmacy ? (
              <MedicineList pharmacy={selectedPharmacy} />
            ) : (
              <div>Choose the shop, please!</div>
            )}
          </>
        )}
      </ShopsContainer>
    </Section>
  );
};

export default Shop;
