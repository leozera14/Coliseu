import { createContext, useState } from "react";

export const ThemeContext = createContext({} as any);

export const ThemeProvider: any = (props: any) => {
  const { children } = props;

  const [dark, setDark] = useState(true);

  const changeThemeMode = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        changeThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
