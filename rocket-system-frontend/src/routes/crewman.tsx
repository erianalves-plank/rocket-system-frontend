import { Button } from 'antd'
import '../css/Page.css'
import { ButtonsMangaResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentCrewman } from '../components/cardContent/CardContentCrewman'

const Crewman = () => {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <NavbarContentPages />
      <main className="container-rocket-page" style={{ flex: 1 }}>
        <Button className="btn" size="large" style={{ width: '200px' }}>
          Get Resource
        </Button>

        <div id="rocket-div">
          <CardContentCrewman />
          <CardContentCrewman />
          <CardContentCrewman />
        </div>
        <ButtonsMangaResource />
      </main>
      <Footer />
    </div>
  )
}

export { Crewman }
