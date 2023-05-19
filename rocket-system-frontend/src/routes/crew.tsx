import { Button } from 'antd'
import '../Page.css'
import { ButtonsMangaResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentCrew } from '../components/cardContent/CardContentCrew'

function Crew() {
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
          <CardContentCrew />
        </div>
        <ButtonsMangaResource />
      </main>
      <Footer />
    </div>
  )
}

export { Crew }
