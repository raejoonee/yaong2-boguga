import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from '../contexts/Theme';

const GlobalStyle = createGlobalStyle<ThemeProps>`
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${(props) => (props.mode === 'light' ? '#ffffff' : '#333')};
    color: ${(props) => (props.mode === 'light' ? '#333' : '#f2f2f2')};
  }
`;

export default GlobalStyle;
