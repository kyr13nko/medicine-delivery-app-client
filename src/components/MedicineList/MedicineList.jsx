import MedicineItem from 'components/MedicineItem/MedicineItem';
import { List, Wrapper } from './MedicineList.styled';

const MedicineList = ({ pharmacy }) => {
  const medicinesArr = pharmacy.medicines.map(medicine => medicine._id);

  return (
    <Wrapper>
      <h3>{pharmacy.name}</h3>
      <List>
        {medicinesArr.map(medicine => (
          <MedicineItem key={medicine._id} medicine={medicine} />
        ))}
      </List>
    </Wrapper>
  );
};

export default MedicineList;
