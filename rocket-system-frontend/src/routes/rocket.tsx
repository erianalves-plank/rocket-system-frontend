import { useContext, useEffect, useState } from 'react';
import { ButtonsManageResource } from '../components/ButtonsManageResource';
import { Footer } from '../components/Footer';
import { NavbarContentPages } from '../components/NavbarContentPages';
import { CardContent } from '../components/cardContent/CardContent.tsx';
import { ThemeContext } from '../theme/ThemeContext.tsx';

import { Modal } from 'antd';
import { FormRocket } from '../components/forms/FormRocket.tsx';
import { RocketDTO } from '../dtos/RocketDTO.tsx';
import { useRocket } from '../hooks/useRocket.tsx';

const Rocket = () => {
  const theme = useContext(ThemeContext);

  /* const formRef = useRef<typeof Form>(null); */

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [sendDataForm, setSendDataForm] = useState(false);
  const [rocketSelected, setRocketSelected] = useState('');
  const { rockets, fetchRockets, createRocket, updateRocket, deleteRocket } = useRocket();
  const [formData, setFormData] = useState<RocketDTO>();


  useEffect(() => {
    fetchRockets();
  }, []);

  useEffect(() => {
    console.log('-> ', rockets);
  }, [rockets]);

  const handleOpenModal = (operation: string) => {
    if (operation === 'Edit' && rocketSelected === '') return;

    setModalTitle(`${operation} a Rocket`);
    setSendDataForm(() => {
      return operation === 'Edit' ? true : false;
    });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setRocketSelected('');
    setIsModalOpen(false);
  };

  const handleCardClick = (rocket: RocketDTO) => {
    setRocketSelected(rocket.id);
    setFormData(rocket);
    console.log(`Card with ID ${rocket.id} clicked`);
  };

  const handleDeleteRocket = () => {
    const rocketId = rocketSelected;
    setRocketSelected('');
    deleteRocket(rocketId);
    return rocketId;
  };

  const handleCreateRocket = (rocket: Partial<RocketDTO>) => {
    createRocket(rocket);
    setIsModalOpen(false);
  };

  const handleUpdateRocket = (rocket: Partial<RocketDTO>) => {
    const rocketId = rocketSelected;
    updateRocket(rocketId, rocket);
    setIsModalOpen(false);
  };

  return (
    <div style={theme.layoutContentPage as React.CSSProperties}>
      <NavbarContentPages entityType="rocket" />

      <main style={theme.containerContentPage as React.CSSProperties}>
        <div style={theme.divContent as React.CSSProperties}>
          {rockets.map(item => {
            return (
              <CardContent
                key={item.id}
                id={item.id}
                name={item.name}
                onClick={() => handleCardClick(item)}
              />
            );
          })}
        </div>

        <ButtonsManageResource
          handleClick={handleOpenModal}
          handleClickDelete={handleDeleteRocket}
        />


        <Modal
          title={modalTitle}
          open={isModalOpen}
          footer={null}
          onCancel={handleCancel}
          style={{ textAlign: 'center' }}
        >
          {sendDataForm ? (
            <FormRocket
              rocket={formData}
              handleOperationRocket={handleUpdateRocket}
            />
          ) : (
            <FormRocket
              handleOperationRocket={handleCreateRocket}
            />
          )}
        </Modal>

      </main>
      <Footer />
    </div>
  );
};

export { Rocket };
