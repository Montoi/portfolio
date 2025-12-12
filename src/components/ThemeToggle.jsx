import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="btn glass"
            style={{
                padding: '0.6rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer'
            }}
            aria-label="Toggle Theme"
        >
            {theme === 'dark' ? (
                <Sun size={20} className="text-accent" />
            ) : (
                <Moon size={20} className="text-accent" />
            )}
        </button>
    );
};

export default ThemeToggle;
