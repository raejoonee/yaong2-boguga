import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from './styles/GlobalStyle';
import ColorContext from './contexts/Theme';
import { RootState } from './store';
import { breedActions, BreedProps } from './features/breed/breedSlice';
import { loaderActions } from './features/loader/loaderSlice';
import api from './api/TheCatAPI';
import Title from './components/Title';
import Directive from './components/Directive';
import Search from './components/Search';
import Information from './features/information/Information';
import Gallery from './components/Gallery';
import DarkMode from './components/DarkMode';
import Loader from './features/loader/Loader';

function App() {
  const { isLightTheme } = useContext(ColorContext);
  const breeds = useSelector((state: RootState) => state.breed.breeds);
  const loaded = useSelector((state: RootState) => state.information.loaded);
  const { initialLoading } = useSelector((state: RootState) => state.loader);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!breeds.length) {
      api.getBreeds().then((data) => {
        data.forEach((breed: BreedProps) => {
          const payload = {
            breed: breed.name.toLowerCase(),
            id: breed.id,
          };
          dispatch(breedActions.push(payload));
        });
        dispatch(loaderActions.finishLoading());
      });
    }
  }, []);
  return (
    <>
      <GlobalStyle mode={isLightTheme} />
      {initialLoading || <Title />}
      {initialLoading || <Directive />}
      {initialLoading || <Search />}
      {loaded && <Information />}
      {loaded && <Gallery />}
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
