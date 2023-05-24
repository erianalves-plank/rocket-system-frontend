
import React, { useContext } from 'react'
import { CrewmanDTO } from "../../dtos/CrewmanDTO"
import { ThemeContext } from "../../theme/ThemeContext"

export interface DataCrew {
  id: string
  name: string
  crewmen: CrewmanDTO[]
  onClick: () => void
}

const CardContentCrew: React.FC<DataCrew> = ({ name, crewmen, onClick }) => {


  const theme = useContext(ThemeContext)


  const handleClick = () => {
    onClick();
  }

  const crewmenSection = crewmen.map(item => {
    const crewmanInfo =
      <React.Fragment key={item.id}>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Name:</strong> {item.name}
        </p>
        <p style={{ margin: '0 0 15px 0', paddingLeft: '4px' }}>
          <strong>Patent:</strong> {item.patent}
        </p>

      </React.Fragment>
    return crewmanInfo;
  })


  return (
    <div style={theme.flexItemCrew as React.CSSProperties} onClick={handleClick}>
      <h3
        style={theme.flexItemTitle}
      >
        Details
      </h3>
      <div>
        <p style={{ margin: 0, paddingLeft: '4px' }}>
          <strong>Name:</strong> {name}
        </p>
      </div>
      <div>
        <h4 style={theme.flexItemSub_Title}>
          Crewmen
        </h4>

        <div>
          {crewmenSection}
        </div>
      </div>
    </div>
  )
}

export { CardContentCrew }
