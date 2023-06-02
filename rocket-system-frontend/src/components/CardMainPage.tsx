import { Link } from 'react-router-dom';
import '../css/index.css';
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

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

  return (
    <div style={theme.flexItem as React.CSSProperties} data-cy={`card-main-page-${id}`}>
      <h2 data-cy='card-main-page-title'> {name}</h2>
      <img data-cy='card-main-page-image' src={img} alt="" style={theme.imgFrontPage} />
      <p data-cy='card-main-page-paragraph'>
        {description}
        <Link data-cy='link-tag' to={redirect}>Check More</Link>
      </p>
    </div>
  );
};

export { CardMainPage };
