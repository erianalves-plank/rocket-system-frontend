import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentLaunch } from '../components/cardContent/CardContentLaunch'
import '../css/Page.css'
import { ThemeContext } from '../theme/ThemeContext.tsx'
import { useContext } from 'react'
import GetLaunchs from '../mockedData/dataLaunch.tsx'

const Launch = () => {

  const theme = useContext(ThemeContext);

  const cardsLaunch = GetLaunchs().map(item => {
    return <CardContentLaunch key={item.id} id={item.id} launchCode={item.launchCode} date={item.date} success={item.success} rocket={item.rocket.name} crew={item.crew} />
  })

  return (
    <div
      style={theme.layoutContentPage as React.CSSProperties}
    >
      <NavbarContentPages />
      <main className="container-rocket-page" style={{ flex: 1 }}>

        <div id="rocket-div">
          {cardsLaunch}
        </div>
        <ButtonsManageResource />
      </main>
      <Footer />
    </div>
  )
}

export { Launch }
