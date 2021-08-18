/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext, useCallback } from 'react';

interface ThemeProps {
  mode: string;
}

interface ThemeContextResult {
  isLightTheme: string;
  toggleLightTheme: () => void;
}

const ThemeContext = createContext<ThemeContextResult>({
  isLightTheme: 'light',
  toggleLightTheme: () => {},
});

const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [isLightTheme, setIsLightTheme] = useState<string>(
    localStorage.getItem('isLightTheme') === 'true' ||
      window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark',
  );

  const value: ThemeContextResult = {
    isLightTheme,
    toggleLightTheme: useCallback(
      () =>
        isLightTheme === 'light'
          ? setIsLightTheme('dark')
          : setIsLightTheme('light'),
      [isLightTheme],
    ),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };
export type { ThemeProps };
export default ThemeContext;
