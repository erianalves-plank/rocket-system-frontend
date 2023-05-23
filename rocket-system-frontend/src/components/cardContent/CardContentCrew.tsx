
import { ThemeContext } from "../../theme/ThemeContext"
import React, { useContext } from 'react'
import { DataCrewman } from "./CardContentCrewman"

export interface DataCrew {
  id: string
  name: string
  crewmen: DataCrewman[]
}

const CardContentCrew: React.FC<DataCrew> = ({ name, crewmen }) => {


  const theme = useContext(ThemeContext)

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
