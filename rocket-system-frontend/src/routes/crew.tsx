import { Modal } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { ButtonsManageResource } from '../components/ButtonsManageResource';
import { Footer } from '../components/Footer';
import { NavbarContentPages } from '../components/NavbarContentPages';
import { CardContentCrew } from '../components/cardContent/CardContentCrew';
import { FormCrew } from '../components/forms/FormCrew.tsx';
import '../css/Page.css';
import { CrewDTO } from '../dtos/CrewDTO.tsx';
import { useCrew } from '../hooks/useCrew.tsx';
import { ThemeContext } from '../theme/ThemeContext.tsx';

function Crew() {
  const theme = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [sendDataForm, setSendDataForm] = useState(false);
  const [crewSelected, setCrewSelected] = useState('');
  const { crews, crewmenDB, fetchCrews, createCrew, updateCrew, deleteCrew } =
    useCrew();

  const [formData, setFormData] = useState<CrewDTO>();

  useEffect(() => {
    fetchCrews();
  }, [fetchCrews]);

  useEffect(() => {
    console.log('-> ', crews);
  }, [crews]);

  const handleOpenModal = (operation: string) => {
    if (operation === 'Edit' && crewSelected === '') return;

    setModalTitle(`${operation} a Crew`);
    setSendDataForm(() => {
      return operation === 'Edit' ? true : false;
    });
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setCrewSelected('');
    setIsModalOpen(false);
  };

  const handleCardClick = (crew: CrewDTO) => {
    setCrewSelected(crew.id);
    setFormData(crew);
  };

  const handleDeleteCrew = () => {
    const crewId = crewSelected;
    deleteCrew(crewSelected);
    setCrewSelected('');
    return crewId;
  };
  const handleCreateCrew = (crew: Partial<CrewDTO>, crewmenNames: string[]) => {
    createCrew(crew, crewmenNames);
    setIsModalOpen(false);
  };

  const handleUpdateCrew = (crew: Partial<CrewDTO>, crewmenNames: string[]) => {
    const crewId = crewSelected;
    updateCrew(crewId, crew, crewmenNames);
    setIsModalOpen(false);
  };

  console.log('Checking the render');

  return (
    <div style={theme.layoutContentPage as React.CSSProperties}>
      <NavbarContentPages entityType="crew" />

      <main style={theme.containerContentPage as React.CSSProperties}>
        <div style={theme.divContent as React.CSSProperties}>
          {crews.map((item) => {
            return (
              <CardContentCrew
                key={item.id}
                id={item.id}
                name={item.name}
                crewmen={item.crewmen}
                onClick={() => handleCardClick(item)}
              />
            );
          })}
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
          {sendDataForm ? (
            <FormCrew
              crew={formData}
              crewmenDB={crewmenDB}
              handleOperationCrew={handleUpdateCrew}
            />
          ) : (
            <FormCrew
              crewmenDB={crewmenDB}
              handleOperationCrew={handleCreateCrew}
            />
          )}
        </Modal>
      </main>

      <Footer />
    </div>
  );
}

export { Crew };
