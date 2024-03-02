import PharmacyItem from 'components/PharmacyItem/PharmacyItem';

const PharmacyList = ({ pharmacies }) => {
  return (
    <>
      {pharmacies.map(pharmacy => (
        <PharmacyItem key={pharmacy._id} pharmacy={pharmacy} />
      ))}
    </>
  );
};

export default PharmacyList;
