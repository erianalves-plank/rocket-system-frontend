import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';
import { useTranslation } from 'react-i18next';

export interface DataCrewman {
  id: string;
  name: string;
  patent: string;
  onClick: () => void;
}

const CardContentCrewman: React.FC<DataCrewman> = ({
  name,
  patent,
  onClick,
}) => {
  const theme = useContext(ThemeContext);
  const [t] = useTranslation();

  const handleClick = () => {
    onClick();
  };

  return (
    <div
      style={theme.flexItemCrew as React.CSSProperties}
      onClick={handleClick}
    >
      <h3 style={theme.flexItemTitle}>{t('technical information')}</h3>
      <div>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>{t('name')}:</strong> {name}
        </p>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>{t('patent')}:</strong> {patent}
        </p>
      </div>
    </div>
  );
};

export { CardContentCrewman };
