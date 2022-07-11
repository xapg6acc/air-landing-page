import { createContext, useContext, useState, useMemo, ReactNode } from 'react';

import { Button, useTheme, createTheme, ThemeProvider } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export interface ThemeProps {
  readonly children: ReactNode;
}

export const ToggleColorMode = ({ children }: ThemeProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const ThemeButton = () => {
  const theme = useTheme();

  // const toggleTheme = () => {};
  // const currentTheme = theme === 'ua' ? 'ua' : 'eng';
  const colorMode = useContext(ColorModeContext);

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={colorMode.toggleColorMode}
      sx={{ ':hover': { borderColor: 'blue' } }}
    >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </Button>
  );
};
