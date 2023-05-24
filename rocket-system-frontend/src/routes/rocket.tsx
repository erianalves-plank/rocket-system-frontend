import { useContext, useState } from 'react'
import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContent } from '../components/cardContent/CardContent.tsx'
import { ThemeContext } from '../theme/ThemeContext.tsx'

import data from '../mockedData/dataRocketPage.tsx'
import { Modal } from 'antd'
import { FormRocket } from '../components/forms/FormRocket.tsx'
import { RocketDTO } from '../dtos/RocketDTO.tsx'

const Rocket = () => {
  const theme = useContext(ThemeContext)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('');
  const [sendDataForm, setSendDataForm] = useState(false);
  const [rocketSelected, setRocketSelected] = useState('');
  
  const [formData, setFormData] = useState<RocketDTO>({id: '123', name: 'Agostinho'});

  const handleOpenModal = (operation: string) => {
    setModalTitle(`${operation} a Rocket`);
    setSendDataForm(() => {
      return operation === 'Edit' ? true : false;
    })
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const handleCardClick = (id: string) => {
    setRocketSelected(id);
    console.log(`Card with ID ${id} clicked`);
  };

  const handleDeleteRocket = () => {
    const rocketId = rocketSelected;
    setRocketSelected('');
    return rocketId;
  }
  

  const cardsRocket = data.map(item => {
    return <CardContent key={item.id} id={item.id} name={item.name} onClick={() => handleCardClick(item.id)}/>
  })

  return (
    <div
      style={theme.layoutContentPage as React.CSSProperties} >
      <NavbarContentPages entityType='rocket' />

      <main style={theme.containerContentPage as React.CSSProperties}>

        <div style={theme.divContent as React.CSSProperties}>
          {cardsRocket}
        </div>

        <ButtonsManageResource handleClick={handleOpenModal} handleClickDelete={handleDeleteRocket} />

        <Modal
          title={modalTitle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ textAlign: 'center' }} >

          {/* <FormRocket {sendDataForm && rocket={formData}} /> */}
          {sendDataForm ? <FormRocket rocket={formData}/> : <FormRocket/>}
        </Modal>

      </main>
      <Footer />
    </div>
  )
}

export { Rocket }
