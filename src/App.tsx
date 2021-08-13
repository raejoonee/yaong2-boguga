import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import DarkMode from './components/DarkMode';
import ColorContext, { ThemeProps } from './contexts/theme';

const GlobalStyle = createGlobalStyle<ThemeProps>`
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => (props.mode ? '#f2f2f2' : '#333')};
    color: ${(props) => (props.mode ? '#333' : '#f2f2f2')};
  }
`;

function App() {
  const { isLightTheme } = useContext(ColorContext);

  return (
    <>
      <GlobalStyle mode={isLightTheme} />
      <DarkMode />
    </>
  );
}

export default App;
