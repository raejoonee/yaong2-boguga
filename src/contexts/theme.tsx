import React, { useState, createContext, useCallback } from 'react';

interface ThemeProps {
  mode: boolean;
}

interface ThemeContextResult {
  isLightTheme: boolean;
  toggleIsLightTheme: () => void;
}

const ThemeContext = createContext<ThemeContextResult>({
  isLightTheme: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleIsLightTheme: () => {},
});

const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [isLightTheme, setisLightTheme] = useState<boolean>(
    localStorage.getItem('isLightTheme') === 'true' ||
      window.matchMedia('(prefers-color-scheme: light)').matches,
  );

  const value: ThemeContextResult = {
    isLightTheme,
    toggleIsLightTheme: useCallback(() => {
      setisLightTheme(!isLightTheme);
    }, [isLightTheme]),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export type { ThemeProps };
export { ThemeProvider };

export default ThemeContext;
