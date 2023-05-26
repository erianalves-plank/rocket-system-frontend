import { ButtonsManageResource } from '../components/ButtonsManageResource'
import { Footer } from '../components/Footer'
import { NavbarContentPages } from '../components/NavbarContentPages'
import { CardContentLaunch } from '../components/cardContent/CardContentLaunch'
import { ThemeContext } from '../theme/ThemeContext.tsx'
import React, { useContext, useEffect, useState } from 'react'
import GetLaunchs from '../mockedData/dataLaunch.tsx'
import { LaunchDTO } from '../dtos/LaunchDTO.tsx'
import { Modal } from 'antd'
import { FormLaunch } from '../components/forms/FormLaunch.tsx'
import { API_BASE_URL, getCrews, getRockets } from '../api/api.ts'
import axios from 'axios'

const Launch = () => {
  const theme = useContext(ThemeContext)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')
  const [sendDataForm, setSendDataForm] = useState(false)
  const [launchSelected, setLaunchSelected] = useState('')
  const [launches, setLaunches] = useState<LaunchDTO[]>([])

  const [formData, setFormData] = useState<LaunchDTO>()

  const fetchLaunches = async () => {
    const data = await axios.get<LaunchDTO[]>(API_BASE_URL + `launch`);
    const launchesList = data.data;
    setLaunches(launchesList);
  }

  const postLaunch = async (launch: Partial<LaunchDTO>, rocketName: string, crewName: string) => {
    const rocketsList = await getRockets();
    const crewsList = await getCrews();


    const rocketId = (rocketsList.find(rocket => rocket['name'] === rocketName))?.id;
    const crewId = (crewsList.find(crew => crew['name'] === crewName))?.id;

    const launchPost = {
      launchCode: launch.launchCode,
      date: launch.date,
      success: launch.success,
      rocketId: rocketId,
      crewId: crewId
    }

    const response = await axios.post(API_BASE_URL + 'launch', launchPost);
    fetchLaunches();
    console.log('About the post operation ', response);
  }

  const updateLaunch = async (id: string, launch: Partial<LaunchDTO>, rocketName: string, crewName: string) => {

    const rocketsList = await getRockets();
    const crewsList = await getCrews();


    const rocketId = (rocketsList.find(rocket => rocket['name'] === rocketName))?.id;
    const crewId = (crewsList.find(crew => crew['name'] === crewName))?.id;

    const launchUpdate = {
      launchCode: launch.launchCode,
      date: launch.date,
      success: launch.success,
      rocketId: rocketId,
      crewId: crewId
    }

    const response = await axios.put(API_BASE_URL + `launch/${id}`, launchUpdate);
    fetchLaunches();
    console.log('About the put operation ', response);
  }

  const deleteLaunch = async (id: string) => {
    await axios.delete<void>(API_BASE_URL + `launch/${id}`);
    fetchLaunches();
  }

  useEffect(() => {
    fetchLaunches();
  }, []);

  useEffect(() => {
    console.log('-> ', launches);
  }, [launches]);

  const handleOpenModal = (operation: string) => {
    if (operation === 'Edit' && launchSelected === '') return

    setModalTitle(`${operation} a Launch`)
    setSendDataForm(() => {
      return operation === 'Edit' ? true : false
    })
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setLaunchSelected('')
    setIsModalOpen(false)
  }

  const handleCardClick = (launch: LaunchDTO) => {
    setLaunchSelected(launch.id)
    setFormData(launch)
    console.log(`Card with ID ${launch.id} clicked`)
  }

  const handleDeleteLaunch = () => {
    const launchId = launchSelected
    deleteLaunch(launchId);
    setLaunchSelected('')
    return launchId
  }

  const handleCreateLaunch = (launch: Partial<LaunchDTO>, rocketName: string, crewName: string) => {
    postLaunch(launch, rocketName, crewName);
    setIsModalOpen(false);
  }

  const handleUpdateLaunch = (launch: Partial<LaunchDTO>, rocketName: string, crewName: string) => {
    const launchId = launchSelected
    updateLaunch(launchId, launch, rocketName, crewName);
    setIsModalOpen(false);
  }

  return (
    <div style={theme.layoutContentPage as React.CSSProperties}>
      <NavbarContentPages entityType="launch" />
      <main style={theme.containerContentPage as React.CSSProperties}>
        <div style={theme.divContent as React.CSSProperties}>
          {
            launches.map(item => {
              return (
                <CardContentLaunch
                  key={item.id}
                  id={item.id}
                  launchCode={item.launchCode}
                  date={item.date}
                  success={item.success}
                  rocket={item.rocket}
                  crew={item.crew}
                  onClick={() => handleCardClick(item)}
                />
              )
            })}
        </div>
        <ButtonsManageResource
          handleClick={handleOpenModal}
          handleClickDelete={handleDeleteLaunch}
        />

        <Modal
          title={modalTitle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ textAlign: 'center' }}
        >
          {sendDataForm ? <FormLaunch launch={formData} handleOperationLaunch={handleUpdateLaunch} /> : <FormLaunch handleOperationLaunch={handleCreateLaunch} />}
        </Modal>
      </main>
      <Footer />
    </div>
  )
}

export { Launch }

/* 
{ "launchCode": "DFG0111", "date": "01/07/98", "success": false, "rocketId": "4812562d-5e10-4015-aa03-dea4fd8090e0", "crewId": "8654c293-a5b5-4148-86b8-f979e4055144"} */