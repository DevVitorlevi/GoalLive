import { useTheme } from '../context/ThemeContext';
import {
    Button
} from '../styles/Button'

export function ThemeSwitcher() {
    const { toggleTheme, currentTheme } = useTheme();

    return (
        <Button onClick={toggleTheme}>
            {currentTheme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
        </Button>
    );
}
