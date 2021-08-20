import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Breed = () => {
  const { breedInfo } = useSelector((state: RootState) => state.breed);
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
      {breedInfo.map((breed) => (
        <option key={breed.id} value={breed.name} />
      ))}
    </datalist>
  );
};

export default Breed;
