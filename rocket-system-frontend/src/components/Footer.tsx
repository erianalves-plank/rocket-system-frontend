import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer style={theme.footer}>
      <p> © 2023 All Mining Rocket, Inc.</p>
    </footer>
  );
};

export { Footer };
