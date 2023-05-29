import { Modal } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { ButtonsManageResource } from '../components/ButtonsManageResource';
import { Footer } from '../components/Footer';
import { NavbarContentPages } from '../components/NavbarContentPages';
import { CardContentCrewman } from '../components/cardContent/CardContentCrewman';
import { FormCrewman } from '../components/forms/FormCrewman.tsx';
import { CrewmanDTO } from '../dtos/CrewmanDTO.tsx';
import { ThemeContext } from '../theme/ThemeContext.tsx';
import { useCrewman } from '../hooks/useCrewman.tsx';

const Crewman = () => {
  const theme = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [sendDataForm, setSendDataForm] = useState(false);
  const [crewmanSelected, setCrewmanSelected] = useState('');
  const { crewmen, fetchCrewmen, createCrewman, updateCrewman, deleteCrewman  } = useCrewman();
  const [formData, setFormData] = useState<CrewmanDTO>();



  useEffect(() => {
    fetchCrewmen();
  }, []);

  useEffect(() => {
    console.log('-> ', crewmen);
  }, [crewmen]);

  const handleOpenModal = (operation: string) => {
    if (operation === 'Edit' && crewmanSelected === '') return;
    setModalTitle(`${operation} a Crewman`);
    setSendDataForm(() => {
      return operation === 'Edit' ? true : false;
    });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setCrewmanSelected('');
    setIsModalOpen(false);
  };

  const handleCardClick = (crewman: CrewmanDTO) => {
    setCrewmanSelected(crewman.id);
    setFormData(crewman);
  };

  const handleDeleteCrewman = () => {
    const crewmanId = crewmanSelected;
    deleteCrewman(crewmanId);
    setCrewmanSelected('');
    return crewmanId;
  };

  const handleCreateCrewman = (crewman: Partial<CrewmanDTO>) => {
    createCrewman(crewman);
    setIsModalOpen(false);
  };

  const handleUpdateCrewman = (crewman: Partial<CrewmanDTO>) => {
    const crewmanId = crewmanSelected;
    updateCrewman(crewmanId, crewman);
    setIsModalOpen(false);
  };

  return (
    <div style={theme.layoutContentPage as React.CSSProperties}>
      <NavbarContentPages entityType="crewman" />
      <main style={theme.containerContentPage as React.CSSProperties}>
        <div style={theme.divContent as React.CSSProperties}>
          {crewmen.map(item => {
            return (
              <CardContentCrewman
                key={item.id}
                id={item.id}
                name={item.name}
                patent={item.patent}
                onClick={() => handleCardClick(item)}
              />
            );
          })}
        </div>
        <ButtonsManageResource
          handleClick={handleOpenModal}
          handleClickDelete={handleDeleteCrewman}
        />

        <Modal
          title={modalTitle}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{ textAlign: 'center' }}
        >
          {sendDataForm ? (
            <FormCrewman
              crewman={formData}
              handleOperationCrewman={handleUpdateCrewman}
            />
          ) : (
            <FormCrewman handleOperationCrewman={handleCreateCrewman} />
          )}
        </Modal>
      </main>
      <Footer />
    </div>
  );
};

export { Crewman };
