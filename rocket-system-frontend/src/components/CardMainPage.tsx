import { Link } from 'react-router-dom';
import '../css/index.css';
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import { useTranslation } from 'react-i18next';

export interface DataMainPage {
  id: number;
  name: string;
  img: string;
  description: string;
  redirect: string;
}

const CardMainPage: React.FC<DataMainPage> = ({
  id,
  name,
  img,
  description,
  redirect,
}) => {
  const theme = useContext(ThemeContext);
  const [t] = useTranslation();
  const words = description.split(' ');
  const translatedWords = words.map(word => t(word));
  const translatedDescription = translatedWords.join(' ');

  return (
    <div style={theme.flexItem as React.CSSProperties} data-cy={`card-main-page-${id}`}>
      <h2 data-cy='card-main-page-title'> {t(name)}</h2>
      <img data-cy='card-main-page-image' src={img} alt="" style={theme.imgFrontPage} />
      <p data-cy='card-main-page-paragraph'>
      {translatedDescription}
        <Link data-cy='link-tag' to={redirect}> {t('check')} {t('more')}</Link>
      </p>
    </div>
  );
};

export { CardMainPage };
