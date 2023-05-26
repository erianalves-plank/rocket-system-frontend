import { ThemeContext } from '../theme/ThemeContext';
import { useContext } from 'react';

const Header = () => {
  const theme = useContext(ThemeContext);

  return <header style={theme.hero as React.CSSProperties}></header>;
};

export { Header };
