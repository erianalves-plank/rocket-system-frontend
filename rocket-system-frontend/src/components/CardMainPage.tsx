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
  name,
  img,
  description,
  redirect,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme.flexItem as React.CSSProperties}>
      <h2>{name}</h2>
      <img src={img} alt="" style={theme.imgFrontPage} />
      <p>
        {description}
        <Link to={redirect}>Check More</Link>{' '}
      </p>
    </div>
  );
};

export { CardMainPage };
