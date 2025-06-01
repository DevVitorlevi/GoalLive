import { type ReactNode, createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { darkTheme } from '../styles/dark';
import { lightTheme } from '../styles/light';

interface ThemeContextProps {
    toggleTheme: () => void;
    currentTheme: 'dark' | 'light';
}

const ThemeContext = createContext({} as ThemeContextProps);

export const useTheme = () => useContext(ThemeContext);

interface ProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ProviderProps) {
    const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('dark');

    const toggleTheme = () => {
        setCurrentTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const themeObject = currentTheme === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ toggleTheme, currentTheme }}>
            <StyledProvider theme={themeObject}>
                {children}
            </StyledProvider>
        </ThemeContext.Provider>
    );
}
