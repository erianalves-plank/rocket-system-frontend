import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentCrewman } from '../components/cardContent/CardContentCrewman'
import { ThemeContext } from '../theme/ThemeContext.tsx'
import { useContext } from 'react'

const Crewman = () => {

  const theme = useContext(ThemeContext);

  return (
    <div
      style={theme.layoutContentPage as React.CSSProperties}
    >
      <NavbarContentPages entityType='crewman'/>
      <main style={theme.containerContentPage as React.CSSProperties}>

        <div style={theme.divContent as React.CSSProperties}>
          <CardContentCrewman />
          <CardContentCrewman />
          <CardContentCrewman />
        </div>
        <ButtonsManageResource entityType='crewman' />
      </main>
      <Footer />
    </div>
  )
}

export { Crewman }
