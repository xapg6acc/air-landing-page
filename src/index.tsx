import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './components/language/i18n';

import { ThemeProvider } from '@mui/material';
import { theme } from './configs/theme';
import { Root } from './pages/Root';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Root />
    </HashRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
