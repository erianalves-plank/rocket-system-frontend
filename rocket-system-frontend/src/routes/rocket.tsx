import { useContext } from 'react'
import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContent } from '../components/cardContent/CardContent.tsx'
import { ThemeContext } from '../theme/ThemeContext.tsx'

import data from '../mockedData/dataRocketPage.tsx'

const Rocket = () => {
  const theme = useContext(ThemeContext);
  
  const cardsRocket = data.map(item => {
    return <CardContent key={item.id} id={item.id} name={item.name} />
  })

  return (
    <div
      style={theme.layoutContentPage as React.CSSProperties}
    >
      <NavbarContentPages />

      <main style={theme.containerContentPage as React.CSSProperties}>

        <div style={theme.divContent as React.CSSProperties}>
          {cardsRocket}
        </div>

        <ButtonsManageResource />

      </main>
      <Footer />
    </div>
  )
}

export { Rocket }
