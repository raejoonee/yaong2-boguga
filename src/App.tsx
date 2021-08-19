import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import ColorContext from './contexts/Theme';
import GlobalStyle from './styles/GlobalStyle';
import { RootState } from './store';
import { breedActions, BreedProps } from './features/breed/breedSlice';
import { loaderActions } from './features/loader/loaderSlice';
import api from './api/TheCatAPI';
import Title from './components/Title';
import Directive from './components/Directive';
import SearchSection from './components/SearchSection';
import DarkMode from './components/DarkMode';
import Loader from './features/loader/Loader';

function App() {
  const { isLightTheme } = useContext(ColorContext);
  const initialLoading = useSelector(
    (state: RootState) => state.loader.initialLoading,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    api.getBreeds().then((data) => {
      data.forEach((breed: BreedProps) => {
        dispatch(breedActions.push(breed.name));
      });
      dispatch(loaderActions.finishLoading());
    });
  }, []);
  return (
    <>
      <GlobalStyle mode={isLightTheme} />
      {initialLoading || <Title />}
      {initialLoading || <Directive />}
      {initialLoading || <SearchSection />}
      <DarkMode />
      <Loader />
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          style: {
            background: '#db706c',
            color: '#f2f2f2',
            cursor: 'pointer',
          },
        }}
      />
    </>
  );
}

export default App;
