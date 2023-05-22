import { NavbarContentPages } from '../components/NavbarContentPages'
import { Footer } from '../components/Footer'
import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { CardContent } from '../components/cardContent/CardContent.tsx'
import '../css/Page.css'
import data from '../mockedData/dataRocketPage.tsx'
import { Button } from 'antd'
import { useState } from 'react'
import { ThemeContext } from '../theme/ThemeContext.tsx'
import { useContext } from 'react'


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
      <main className="container-rocket-page" style={{ flex: 1 }}>

        <div id="rocket-div">{/* showContent &&  */cardsRocket}</div>
        <ButtonsManageResource />
      </main>
      <Footer />
    </div>
  )
}

export { Rocket }
