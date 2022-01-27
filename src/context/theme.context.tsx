import React, {createContext, useState} from 'react';
import {Appearance} from 'react-native';

interface ThemeContextInterface {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState: ThemeContextInterface = {
  dark: Appearance.getColorScheme() === 'dark',
};

export const ThemeContext = createContext<ThemeContextInterface>(defaultState);

export const ThemeContextProvider: React.FC = ({children}) => {
  const [dark, setDark] = useState<boolean>(defaultState.dark);
  const toggleDark = () => {
    setDark(!dark);
  };
  return (
    <ThemeContext.Provider value={{dark, toggleDark}}>
      {children}
    </ThemeContext.Provider>
  );
};
