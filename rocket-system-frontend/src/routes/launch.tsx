import { Modal } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { ButtonsManageResource } from '../components/ButtonsManageResource';
import { Footer } from '../components/Footer';
import { NavbarContentPages } from '../components/NavbarContentPages';
import { CardContentLaunch } from '../components/cardContent/CardContentLaunch';
import { FormLaunch } from '../components/forms/FormLaunch.tsx';
import { LaunchDTO } from '../dtos/LaunchDTO.tsx';
import { useLaunch } from '../hooks/useLaunch.tsx';
import { ThemeContext } from '../theme/ThemeContext.tsx';

const Launch = () => {
  const theme = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [sendDataForm, setSendDataForm] = useState(false);
  const [launchSelected, setLaunchSelected] = useState('');
  const { launches, fetchLaunches, createLaunch, updateLaunch, deleteLaunch } =
    useLaunch();

  const [formData, setFormData] = useState<LaunchDTO>();

  useEffect(() => {
    fetchLaunches();
  }, [fetchLaunches]);

  useEffect(() => {
    console.log('-> ', launches);
  }, [launches]);

  const handleOpenModal = (operation: string) => {
    if (operation === 'Edit' && launchSelected === '') return;

    setModalTitle(`${operation} a Launch`);
    setSendDataForm(() => {
      return operation === 'Edit' ? true : false;
    });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setLaunchSelected('');
    setIsModalOpen(false);
  };

  const handleCardClick = (launch: LaunchDTO) => {
    setLaunchSelected(launch.id);
    setFormData(launch);
    console.log(`Card with ID ${launch.id} clicked`);
  };

  const handleDeleteLaunch = () => {
    const launchId = launchSelected;
    deleteLaunch(launchId);
    setLaunchSelected('');
    return launchId;
  };

  const handleCreateLaunch = (
    launch: Partial<LaunchDTO>,
    rocketName: string,
    crewName: string
  ) => {
    createLaunch(launch, rocketName, crewName);
    setIsModalOpen(false);
  };

  const handleUpdateLaunch = (
    launch: Partial<LaunchDTO>,
    rocketName: string,
    crewName: string
  ) => {
    const launchId = launchSelected;
    updateLaunch(launchId, launch, rocketName, crewName);
    setIsModalOpen(false);
  };

  return (
    <div style={theme.layoutContentPage as React.CSSProperties}>
      <NavbarContentPages entityType="launch" />
      <main style={theme.containerContentPage as React.CSSProperties}>
        <div style={theme.divContent as React.CSSProperties}>
          {launches.map((item) => {
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
            );
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
          footer={null}
          style={{ textAlign: 'center' }}
        >
          {sendDataForm ? (
            <FormLaunch
              launch={formData}
              handleOperationLaunch={handleUpdateLaunch}
            />
          ) : (
            <FormLaunch handleOperationLaunch={handleCreateLaunch} />
          )}
        </Modal>
      </main>
      <Footer />
    </div>
  );
};

export { Launch };

/* 
{ "launchCode": "DFG0111", "date": "01/07/98", "success": false, "rocketId": "4812562d-5e10-4015-aa03-dea4fd8090e0", "crewId": "8654c293-a5b5-4148-86b8-f979e4055144"} */
