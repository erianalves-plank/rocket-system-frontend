import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeContext';
 
const CardContentCrewman = () => {

  const theme = useContext(ThemeContext);

  return (
    <div
      style={theme.flexItemCrew as React.CSSProperties}
    >
      <h3
        style={theme.flexItemTitle}
      >
        Details
      </h3>
      <div>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Name:</strong> Riskaminiff
        </p>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Patent:</strong> Captain
        </p>
      </div>
    </div>
  )
}

export { CardContentCrewman }
