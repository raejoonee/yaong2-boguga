import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ThemeProvider } from './contexts/theme';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
