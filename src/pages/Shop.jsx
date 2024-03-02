import PharmacyList from 'components/PharmacyList/PharmacyList';
import { useDispatch, useSelector } from 'react-redux';
import { selectPharmacies } from '../redux/pharmacySelectors';
import { useEffect } from 'react';
import { fetchPharmacy } from '../redux/pharmacyOperations';

const Shop = () => {
  const dispatch = useDispatch();
  const pharmacies = useSelector(selectPharmacies);

  useEffect(() => {
    dispatch(fetchPharmacy());
  }, [dispatch]);

  console.log('pharmacies', pharmacies);
  return (
    <>
      <PharmacyList pharmacies={pharmacies} />
    </>
  );
};

export default Shop;
