import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../theme/ThemeContext.tsx'
import { Key, useContext } from 'react'
import { Header } from '../components/Header'
import { CardMainPage } from '../components/CardMainPage'
import { Footer } from '../components/Footer'
import data from '../mockedData/dataMainPage.tsx'

const Root = () => {
  const cardsMainPage = data.map(item => {
    return (
      <CardMainPage
        key={item.id}
        id={item.id}
        name={item.name}
        img={item.img}
        description={item.description}
        redirect={item.redirect}
      />
    )
  })
  const theme = useContext(ThemeContext)

  const outerDivStyle = {
    background: theme.colors.primary,
    minHeight: theme.layout.minHeight,
    display: theme.layout.display,
    flexDirection: theme.layout.flexDirection,
  }

  return (
    <div style={outerDivStyle}>
      <Navbar />
      <Header />
      <main className="container" style={{ flex: 1 }}>
        {cardsMainPage}
      </main>
      <Footer />
    </div>
  )
}

export { Root }
