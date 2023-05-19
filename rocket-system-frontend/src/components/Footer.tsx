import { useContext } from 'react'
import '../css/index.css'
import { ThemeContext } from '../theme/ThemeContext'
function Footer() {
  const theme = useContext(ThemeContext)

  const styleFooter = {
    textAlign: theme.footer.textAlign,
    backgroundColor: theme.footer.backgroundColor,
    flexShrink: theme.footer.flexShrink,
    display: theme.layout.display,
    justifyContent: theme.footer.justifyContent,
    fontSize: theme.footer.fontSize,
  }

  return (
    <footer style={styleFooter}>
      <p> © 2023 All Mining Rocket, Inc.</p>
    </footer>
  )
}

export { Footer }
