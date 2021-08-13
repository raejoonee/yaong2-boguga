import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { breedActions } from '../../store/breed';

const Section = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const SearchSection = () => {
  const dispatch = useDispatch();

  // use
  const loadBreedHandler = () => {
    dispatch(breedActions.method(payload));
  };
  return <Section />;
};

export default SearchSection;
