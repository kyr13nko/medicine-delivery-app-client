import MedicineItem from 'components/MedicineItem/MedicineItem';

const MedicineList = ({ pharmacy }) => {
  const medicinesArr = pharmacy.medicines.map(medicine => medicine._id);

  return (
    <div>
      <h3>{pharmacy.name}</h3>
      <ul>
        {medicinesArr.map(medicine => (
          <MedicineItem key={medicine._id} medicine={medicine} />
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
