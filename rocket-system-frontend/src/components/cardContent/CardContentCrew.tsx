import React, { useContext } from 'react';
import { CrewmanDTO } from '../../dtos/CrewmanDTO';
import { ThemeContext } from '../../theme/ThemeContext';
import { useTranslation } from 'react-i18next';

export interface DataCrew {
  id: string;
  name: string;
  crewmen: CrewmanDTO[];
  onClick: () => void;
}

const CardContentCrew: React.FC<DataCrew> = ({ id, name, crewmen, onClick }) => {
  const theme = useContext(ThemeContext);
  const [t] = useTranslation();

  const handleClick = () => {
    onClick();
  };

  const crewmenSection = crewmen.map((item) => {
    const crewmanInfo = (
      <React.Fragment key={item.id}>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>{t('name')}:</strong> {item.name}
        </p>
        <p style={{ margin: '0 0 15px 0', paddingLeft: '4px' }}>
          <strong>{t('patent')}:</strong> {item.patent}
        </p>
      </React.Fragment>
    );
    return crewmanInfo;
  });

  return (
    <div
      style={theme.flexItemCrew as React.CSSProperties}
      onClick={handleClick}
      data-cy={`card-content-crew-${id}`}
    >
      <h3 style={theme.flexItemTitle}>{t('technical information')}</h3>
      <div>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>{t('name')}:</strong> {name}
        </p>
      </div>
      <div>
        <h4 style={theme.flexItemSub_Title}>{t('crewmen')}</h4>

        <div>{crewmenSection}</div>
      </div>
    </div>
  );
};

export { CardContentCrew };
