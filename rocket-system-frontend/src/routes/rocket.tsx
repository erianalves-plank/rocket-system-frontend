import { useContext, useState } from 'react'
import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContent } from '../components/cardContent/CardContent.tsx'
import { ThemeContext } from '../theme/ThemeContext.tsx'

import data from '../mockedData/dataRocketPage.tsx'
import { Modal } from 'antd'

const Rocket = () => {


  const theme = useContext(ThemeContext)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('');

  const handleOpenModal = (operation: string) => {

    setModalTitle(`${operation} a Rocket`);
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const cardsRocket = data.map(item => {
    return <CardContent key={item.id} id={item.id} name={item.name} />
  })

  return (
    <div
      style={theme.layoutContentPage as React.CSSProperties} >
      <NavbarContentPages entityType='rocket' />

      <main style={theme.containerContentPage as React.CSSProperties}>

        <div style={theme.divContent as React.CSSProperties}>
          {cardsRocket}
        </div>

        <ButtonsManageResource handleClick={() => handleOpenModal} />
        <Modal
          title={modalTitle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ textAlign: 'center' }} >

        </Modal>

      </main>
      <Footer />
    </div>
  )
}

export { Rocket }
