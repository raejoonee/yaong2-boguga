import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Datalist = () => {
  const breeds = useSelector((state: RootState) => state.breed.breeds);
  return (
    <datalist id="cat-list">
      {breeds.map((breed) => (
        <option key={breed} value={breed} />
      ))}
    </datalist>
  );
};

export default Datalist;
