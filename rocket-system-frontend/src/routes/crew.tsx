import { Modal } from 'antd'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { API_BASE_URL, getCrewmen } from '../api/api.ts'
import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentCrew } from '../components/cardContent/CardContentCrew'
import { FormCrew } from '../components/forms/FormCrew.tsx'
import '../css/Page.css'
import { CrewDTO } from '../dtos/CrewDTO.tsx'
import { ThemeContext } from '../theme/ThemeContext.tsx'

function Crew() {
  const theme = useContext(ThemeContext)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [sendDataForm, setSendDataForm] = useState(false)
  const [crewSelected, setCrewSelected] = useState('')
  const [crews, setCrews] = useState<CrewDTO[]>([])
  const [crewmenDB, setCrewmenDB] = useState<string[]>([]);

  const [formData, setFormData] = useState<CrewDTO>()

  const fetchCrews = async () => {
    const crewmen = await getCrewmen();
    const crewmenNames = crewmen.map(item => item.name);
    setCrewmenDB(crewmenNames);

    const data = await axios.get<CrewDTO[]>(API_BASE_URL + `crew`);
    const crewList = data.data;
    setCrews(crewList);
  }

  const postCrew = async (crew: Partial<CrewDTO>, crewmenNames: string[]) => {

    const crewmenList = await getCrewmen();

    const matchedValues = new Set(crewmenNames);
    const crewmenFiltered = crewmenList.filter(crewman => crewmenNames.includes(crewman['name']) && matchedValues.delete(crewman['name']));
    const crewmenIds = crewmenFiltered.map(crewman => crewman.id);

    const crewPost = {
      name: crew.name,
      crewmenIds: crewmenIds,
    }

    const response = await axios.post(API_BASE_URL + 'crew', crewPost);
    fetchCrews();
    console.log('About the post operation ', response);
  }

  const updateCrew = async (id: string, crew: Partial<CrewDTO>, crewmenNames: string[]) => {

    const crewmenList = await getCrewmen();

    const matchedValues = new Set(crewmenNames);
    const crewmenFiltered = crewmenList.filter(crewman => crewmenNames.includes(crewman['name']) && matchedValues.delete(crewman['name']));
    const crewmenIds = crewmenFiltered.map(crewman => crewman.id);

    const crewUpdate = {
      name: crew.name,
      crewmenIds: crewmenIds,
    }
    const response = await axios.put(API_BASE_URL + `crew/${id}`, crewUpdate);
    fetchCrews();
    console.log('About the put operation ', response);
  }

  const deleteCrew = async (id: string) => {
    await axios.delete<void>(API_BASE_URL + `crew/${id}`);
    fetchCrews();
  }

  useEffect(() => {
    fetchCrews();
  }, []);

  useEffect(() => {
    console.log('-> ', crews);
  }, [crews]);


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
    deleteCrew(crewSelected);
    setCrewSelected('')
    return crewId
  }
  const handleCreateCrew = (crew: Partial<CrewDTO>, crewmenNames: string[]) => {
    postCrew(crew, crewmenNames);
    setIsModalOpen(false);
  }

  const handleUpdateCrew = (crew: Partial<CrewDTO>, crewmenNames: string[]) => {
    const crewId = crewSelected
    updateCrew(crewId, crew, crewmenNames);
    setIsModalOpen(false);
  }

  console.log('Checking the render');

  return (
    <div style={theme.layoutContentPage as React.CSSProperties}>
      <NavbarContentPages entityType="crew" />

      <main style={theme.containerContentPage as React.CSSProperties}>
        <div style={theme.divContent as React.CSSProperties}>
          {
            crews.map(item => {
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
          }
        </div>

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
          {sendDataForm ? (<FormCrew crew={formData} crewmenDB={crewmenDB} handleOperationCrew={handleUpdateCrew} />) : (<FormCrew crewmenDB={crewmenDB} handleOperationCrew={handleCreateCrew} />)}
        </Modal>
      </main>

      <Footer />
    </div>
  )
}

export { Crew }
