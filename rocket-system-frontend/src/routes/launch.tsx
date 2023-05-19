import { Button, Card } from 'antd'
import '../Page.css'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { CardContentLaunch } from '../components/cardContent/CardContentLaunch'
import { ButtonsMangaResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'

const { Header } = Layout

const Launch = () => {
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
          <CardContentLaunch />
        </div>
        <ButtonsMangaResource />
      </main>
      <Footer />
    </div>
  )
}

export { Launch }
