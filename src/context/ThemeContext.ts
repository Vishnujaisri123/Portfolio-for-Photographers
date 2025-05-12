import { createContext } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});