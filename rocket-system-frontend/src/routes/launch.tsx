import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentLaunch } from '../components/cardContent/CardContentLaunch'
import { ThemeContext } from '../theme/ThemeContext.tsx'
import React, { useContext, useState } from 'react'
import GetLaunchs from '../mockedData/dataLaunch.tsx'
import { LaunchDTO } from '../dtos/LaunchDTO.tsx'
import { Modal } from 'antd'
import { FormLaunch } from '../components/forms/FormLaunch.tsx'

const Launch = () => {

  const theme = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('');
  const [sendDataForm, setSendDataForm] = useState(false);
  const [launchSelected, setLaunchSelected] = useState('');

  const [formData, setFormData] = useState<LaunchDTO>();

  const handleOpenModal = (operation: string) => {

    if (operation === 'Edit' && launchSelected === '')
      return;

    setModalTitle(`${operation} a Launch`);
    setSendDataForm(() => {
      return operation === 'Edit' ? true : false;
    })
    setIsModalOpen(true);
  }

  const handleOk = () => {
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setLaunchSelected('');
    setIsModalOpen(false);
  }

  const handleCardClick = (launch: LaunchDTO) => {
    setLaunchSelected(launch.id);
    setFormData(launch);
    console.log(`Card with ID ${launch.id} clicked`);
  };

  const handleDeleteLaunch = () => {
    const launchId = launchSelected;
    setLaunchSelected('');
    return launchId;
  }

  const cardsLaunch = GetLaunchs().map(item => {
    return <CardContentLaunch key={item.id} id={item.id} launchCode={item.launchCode} date={item.date} success={item.success} rocket={item.rocket} crew={item.crew} onClick={() => handleCardClick(item)} />
  })

  return (
    <div
      style={theme.layoutContentPage as React.CSSProperties}
    >
      <NavbarContentPages entityType='launch'/>
      <main style={theme.containerContentPage as React.CSSProperties} >

        <div style={theme.divContent as React.CSSProperties}>
          {cardsLaunch}
        </div>
        <ButtonsManageResource handleClick={handleOpenModal} handleClickDelete={handleDeleteLaunch} />

        <Modal
          title={modalTitle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ textAlign: 'center' }} >

          {sendDataForm ? <FormLaunch  launch={formData} /> : <FormLaunch  />}
        </Modal>
      </main>
      <Footer />
    </div>
  )
}

export { Launch }
