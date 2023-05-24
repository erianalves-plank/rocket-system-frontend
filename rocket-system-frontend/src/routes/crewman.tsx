import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentCrewman } from '../components/cardContent/CardContentCrewman'
import { ThemeContext } from '../theme/ThemeContext.tsx'
import { useContext, useEffect, useState } from 'react'
import GetCremwen from '../mockedData/dataCrewman.tsx'
import { Modal } from 'antd'
import { FormCrewman } from '../components/forms/FormCrewman.tsx'
import { CrewmanDTO } from '../dtos/CrewmanDTO.tsx'


const Crewman = () => {

  const theme = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('');
  const [sendDataForm, setSendDataForm] = useState(false);
  const [crewmanSelected, setCrewmanSelected] = useState('');

  const [formData, setFormData] = useState<CrewmanDTO>();

  const handleOpenModal = (operation: string) => {
    console.log('crewman inside open ', crewmanSelected);
    if (operation === 'Edit' && crewmanSelected === '')
      return;
    setModalTitle(`${operation} a Crewman`);
    setSendDataForm(() => {
      return operation === 'Edit' ? true : false;
    })
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    console.log('Fueee');
    setCrewmanSelected('');
    console.log('crewman inside cancel ', crewmanSelected);
    setIsModalOpen(false);
  }

  const handleCardClick = (crewman: CrewmanDTO) => {
    setCrewmanSelected(crewman.id);
    setFormData(crewman);
    console.log(`Card with ID ${crewman.id} clicked`);
  };

  const handleDeleteCrewman = () => {
    const crewmanId = crewmanSelected;
    setCrewmanSelected('');
    return crewmanId;
  }

  const cardsCrewmen = GetCremwen().map(item => {
    return <CardContentCrewman key={item.id} id={item.id} name={item.name} patent={item.patent} onClick={() => handleCardClick(item)} />
  })

  return (
    <div
      style={theme.layoutContentPage as React.CSSProperties}
    >
      <NavbarContentPages entityType='crewman' />
      <main style={theme.containerContentPage as React.CSSProperties}>

        <div style={theme.divContent as React.CSSProperties}>
          {cardsCrewmen}
        </div>
        <ButtonsManageResource handleClick={handleOpenModal} handleClickDelete={handleDeleteCrewman} />

        <Modal
          title={modalTitle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ textAlign: 'center' }} >

          {sendDataForm ? <FormCrewman crewman={formData} /> : <FormCrewman />}
        </Modal>

      </main>
      <Footer />
    </div>
  )
}

export { Crewman }
