import { Button, Modal } from 'antd'
import '../css/Page.css'
import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentCrew } from '../components/cardContent/CardContentCrew'
import GetCrews from '../mockedData/dataCrew.tsx'
import { ThemeContext } from '../theme/ThemeContext.tsx'
import { useContext, useState } from 'react'
import { FormCrew } from '../components/forms/FormCrew.tsx'
import { CrewDTO } from '../dtos/CrewDTO.tsx'
import GetCrewmen from '../mockedData/dataCrewman.tsx'

function Crew() {
  const theme = useContext(ThemeContext)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [sendDataForm, setSendDataForm] = useState(false)
  const [crewSelected, setCrewSelected] = useState('')

  const [formData, setFormData] = useState<CrewDTO>()

  const handleOpenModal = (operation: string) => {
    if (operation === 'Edit' && crewSelected === '') return

    setModalTitle(`${operation} a Crew`)
    setSendDataForm(() => {
      return operation === 'Edit' ? true : false
    })
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setCrewSelected('')
    setIsModalOpen(false)
  }

  const handleCardClick = (crew: CrewDTO) => {
    setCrewSelected(crew.id)
    setFormData(crew)
  }

  const handleDeleteCrew = () => {
    const crewId = crewSelected
    setCrewSelected('')
    return crewId
  }

  const cardsCrew = GetCrews().map(item => {
    return (
      <CardContentCrew
        key={item.id}
        id={item.id}
        name={item.name}
        crewmen={item.crewmen}
        onClick={() => handleCardClick(item)}
      />
    )
  })

  const crewmenDB = GetCrewmen().map(item => item.name);
  console.log('Checking the render');

  return (
    <div style={theme.layoutContentPage as React.CSSProperties}>
      <NavbarContentPages entityType="crew" />

      <main style={theme.containerContentPage as React.CSSProperties}>
        <div style={theme.divContent as React.CSSProperties}>{cardsCrew}</div>

        <ButtonsManageResource
          handleClick={handleOpenModal}
          handleClickDelete={handleDeleteCrew}
        />

        <Modal
          title={modalTitle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ textAlign: 'center' }}
        >
          {sendDataForm ? ( <FormCrew crew={formData} crewmenDB={crewmenDB} /> ) : ( <FormCrew crewmenDB={crewmenDB} /> )}
        </Modal>
      </main>

      <Footer />
    </div>
  )
}

export { Crew }
