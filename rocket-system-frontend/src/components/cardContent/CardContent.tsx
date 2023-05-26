import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';

export interface DataRocket {
  id: string;
  name: string;
  onClick: () => void;
}
const CardContent: React.FC<DataRocket> = ({ name, onClick }) => {
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
        <p>Name: {name}</p>
      </div>
    </div>
  );
};

export { CardContent };
