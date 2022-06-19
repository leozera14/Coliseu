import { createContext, useMemo, useState } from "react";

interface ITheme {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext({} as ITheme);

export const ThemeProvider: any = (props: any) => {
  const { children } = props;

  const [dark, setDark] = useState(true);
  
  const themeProviderValue = useMemo(() => 
  ({
    dark,
    setDark
  }), [dark, setDark])

  return (
    <ThemeContext.Provider
      value={themeProviderValue}
    >
      {children}
    </ThemeContext.Provider>
  );
};
