const MedicineItem = ({ medicine }) => {
  return (
    <li>
      <h3>{medicine.name}</h3>
      <p>{medicine.price}$</p>
    </li>
  );
};

export default MedicineItem;
