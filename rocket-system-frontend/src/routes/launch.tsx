import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentLaunch } from '../components/cardContent/CardContentLaunch'
import { ThemeContext } from '../theme/ThemeContext.tsx'
import React, { useContext } from 'react'
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
      <main style={theme.containerContentPage as React.CSSProperties} >

        <div style={theme.divContent as React.CSSProperties}>
          {cardsLaunch}
        </div>
        <ButtonsManageResource />
      </main>
      <Footer />
    </div>
  )
}

export { Launch }
