import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/ThemeContext';

export interface DataRocket {
  id: string
  name: string
}
const CardContent: React.FC<DataRocket> = ({ name }) => {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme.flexItemCrew as React.CSSProperties}>

        <h3 style={theme.flexItemTitle}>Details</h3>
      <div>
        <p>Name: {name}</p>
      </div>
    </div>
  )
}

export { CardContent }
