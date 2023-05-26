import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';

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

  const handleClick = () => {
    onClick();
  };

  return (
    <div
      style={theme.flexItemCrew as React.CSSProperties}
      onClick={handleClick}
    >
      <h3 style={theme.flexItemTitle}>Details</h3>
      <div>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Name:</strong> {name}
        </p>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Patent:</strong> {patent}
        </p>
      </div>
    </div>
  );
};

export { CardContentCrewman };
