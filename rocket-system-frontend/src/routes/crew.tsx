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
import { useTranslation } from 'react-i18next';

function Crew() {
  const theme = useContext(ThemeContext);
  const [t] = useTranslation();


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [sendDataForm, setSendDataForm] = useState(false);
  const [crewSelected, setCrewSelected] = useState('');
  const { crews, crewmenDB, fetchCrews, createCrew, updateCrew, deleteCrew } =
    useCrew();
  const [changedCrew, setChangedCrew] = useState<boolean>(false);

  const [formData, setFormData] = useState<CrewDTO>();

  useEffect(() => {
    fetchCrews();
  }, [changedCrew]);

  useEffect(() => {
    console.log('-> ', crews);
  }, [crews]);

  const handleOpenModal = (operation: string) => {
    if (operation === 'Edit' && crewSelected === '') return;

    const titleModal = t(operation) + ' ' + t('crew');
    setModalTitle(titleModal);

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

  const handleDeleteCrew = async () => {
    const crewId = crewSelected;
    await deleteCrew(crewSelected);
    setChangedCrew(!changedCrew);
    setCrewSelected('');
    return crewId;
  };
  const handleCreateCrew = async (crew: Partial<CrewDTO>, crewmenNames: string[]) => {
    await createCrew(crew, crewmenNames);
    setChangedCrew(!changedCrew);
    setIsModalOpen(false);
  };

  const handleUpdateCrew = async (crew: Partial<CrewDTO>, crewmenNames: string[]) => {
    const crewId = crewSelected;
    await updateCrew(crewId, crew, crewmenNames);
    setChangedCrew(!changedCrew);
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
