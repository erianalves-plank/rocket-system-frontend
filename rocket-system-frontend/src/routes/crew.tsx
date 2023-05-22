import { Button } from 'antd'
import '../css/Page.css'
import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentCrew } from '../components/cardContent/CardContentCrew'
import GetCrews from '../mockedData/dataCrew.tsx'
import { ThemeContext } from '../theme/ThemeContext.tsx'
import { useContext } from 'react'

function Crew() {

  const theme = useContext(ThemeContext);

  const cardsCrew = GetCrews().map(item => {
    return <CardContentCrew key={item.id} id={item.id} name={item.name} crewmen={item.crewmen} />
  })

  return (
    <div
      style={theme.layoutContentPage as React.CSSProperties}
    >
      <NavbarContentPages />

      <main style={theme.containerContentPage as React.CSSProperties}>
        
        <div style={theme.divContent as React.CSSProperties}>
          {cardsCrew}
        </div>

        <ButtonsManageResource />

      </main>

      <Footer />

    </div>
  )
}

export { Crew }
