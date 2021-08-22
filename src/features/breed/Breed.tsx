import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Breed = () => {
  const breeds = useSelector((state: RootState) => state.breed.breeds);
  const convertUppercase = (str: string) => {
    const splited = str.toLowerCase().split(' ');
    const converted: string[] = [];
    splited.forEach((e) => {
      converted.push(e.charAt(0).toUpperCase() + e.substring(1));
    });
    return converted.join(' ');
  };
  return (
    <datalist id="cat-list">
      {breeds.map((breed) => (
        <option key={breed} value={convertUppercase(breed)} />
      ))}
    </datalist>
  );
};

export default Breed;
