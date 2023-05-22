import { Button } from 'antd'
import '../css/Page.css'
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
      <NavbarContentPages />
      <main className="container-rocket-page" style={{ flex: 1 }}>

        <div id="rocket-div">
          <CardContentCrewman />
          <CardContentCrewman />
          <CardContentCrewman />
        </div>
        <ButtonsManageResource />
      </main>
      <Footer />
    </div>
  )
}

export { Crewman }
