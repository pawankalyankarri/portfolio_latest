import { useTheme } from '../hooks/useTheme'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-card hover:bg-border transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l1.414 1.414a2 2 0 002.828 0l2.828-2.828a2 2 0 00-2.828-2.828l-1.414 1.414a1 1 0 01-1.414-1.414l1.414-1.414a2 2 0 10-2.828 2.828l1.414 1.414a1 1 0 01-1.414 1.414zm2.828-10.828a2 2 0 012.828 0l2.828 2.828a2 2 0 11-2.828 2.828L13.172 5.07a1 1 0 111.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  )
}
