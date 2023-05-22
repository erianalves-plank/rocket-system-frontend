import { ThemeContext } from '../theme/ThemeContext';
import { useContext } from 'react'


const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <header style={theme.hero as React.CSSProperties}>
      <h2>Northeast Newest Station</h2>
    </header>
  )
}

export { Header }
