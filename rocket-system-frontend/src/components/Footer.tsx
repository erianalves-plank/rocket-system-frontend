import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const theme = useContext(ThemeContext);

  const [t, i18n] = useTranslation();
  const { language, changeLanguage } = i18n;

  const handleChangeLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    changeLanguage(newLanguage);
  }



  return (
    <footer style={theme.footer}>
      <p> © 2023 All Mining Rocket, Inc.</p>
      <Button style={theme.btnLanguages} onClick={handleChangeLanguage}>PT</Button>
      <Button style={theme.btnLanguages} onClick={handleChangeLanguage}>EN</Button>
    </footer>
  );
};

export { Footer };
