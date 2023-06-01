import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';

export interface DataRocket {
  id: string;
  name: string;
  onClick: () => void;
}
const CardContent: React.FC<DataRocket> = ({ id, name, onClick }) => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    onClick();
  };

  return (
    <div
      style={theme.flexItemCrew as React.CSSProperties}
      onClick={handleClick} data-cy={`card-content-rocket-${id}`}
    >
      <h4 style={theme.flexItemTitle}>Technical Information</h4>
      <div style={{ paddingLeft: '15px' }}>
        <p>
          <strong>Name:</strong> {name}
        </p>
      </div>
    </div>
  );
};

export { CardContent };
