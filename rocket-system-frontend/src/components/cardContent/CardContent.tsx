import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';
import { useTranslation } from 'react-i18next';

export interface DataRocket {
  id: string;
  name: string;
  onClick: () => void;
}
const CardContent: React.FC<DataRocket> = ({ id, name, onClick }) => {
  const theme = useContext(ThemeContext);
  const [t] = useTranslation();

  const handleClick = () => {
    onClick();
  };

  return (
    <div
      style={theme.flexItemCrew as React.CSSProperties}
      onClick={handleClick} data-cy={`card-content-rocket-${id}`}
    >
      <h4 style={theme.flexItemTitle}>{t('technical information')}</h4>
      <div style={{ paddingLeft: '15px' }}>
        <p>
          <strong>{t('name')}:</strong> {name}
        </p>
      </div>
    </div>
  );
};

export { CardContent };
