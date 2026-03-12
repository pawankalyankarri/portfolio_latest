import { useTheme } from './hooks/useTheme'
import { ThemeToggle } from './components/ThemeToggle'
import { ScrollToTop } from './components/ScrollToTop'
import Home from './pages/Home'

function App() {
  const { mounted } = useTheme()

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <nav className="fixed top-0 right-0 z-50 p-4">
        <ThemeToggle />
      </nav>
      <Home />
      <ScrollToTop />
    </div>
  )
}

export default App
