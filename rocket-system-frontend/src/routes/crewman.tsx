import { Modal } from 'antd';
import { useContext, useEffect, useState, useTransition } from 'react';
import { ButtonsManageResource } from '../components/ButtonsManageResource';
import { Footer } from '../components/Footer';
import { NavbarContentPages } from '../components/NavbarContentPages';
import { CardContentCrewman } from '../components/cardContent/CardContentCrewman';
import { FormCrewman } from '../components/forms/FormCrewman.tsx';
import { CrewmanDTO } from '../dtos/CrewmanDTO.tsx';
import { ThemeContext } from '../theme/ThemeContext.tsx';
import { useCrewman } from '../hooks/useCrewman.tsx';
import { useTranslation } from 'react-i18next';

const Crewman = () => {
  const theme = useContext(ThemeContext);
  const [t] = useTranslation();


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [sendDataForm, setSendDataForm] = useState(false);
  const [crewmanSelected, setCrewmanSelected] = useState('');
  const { crewmen, fetchCrewmen, createCrewman, updateCrewman, deleteCrewman } =
    useCrewman();
  const [formData, setFormData] = useState<CrewmanDTO>();
  const [changedCrewman, setChangedCrewman] = useState<boolean>(false);

  useEffect(() => {
    fetchCrewmen();
  }, [changedCrewman]);

  useEffect(() => {
    console.log('-> ', crewmen);
  }, [crewmen]);

  const handleOpenModal = (operation: string) => {
    if (operation === 'Edit' && crewmanSelected === '') return;

    const titleModal = t(operation) + ' ' + t('crewman');
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
    setCrewmanSelected('');
    setIsModalOpen(false);
  };

  const handleCardClick = (crewman: CrewmanDTO) => {
    setCrewmanSelected(crewman.id);
    setFormData(crewman);
  };

  const handleDeleteCrewman = async () => {
    const crewmanId = crewmanSelected;
    await deleteCrewman(crewmanId);
    setChangedCrewman(!changedCrewman);
    setCrewmanSelected('');
    return crewmanId;
  };

  const handleCreateCrewman = async (crewman: Partial<CrewmanDTO>) => {
    await createCrewman(crewman);
    setChangedCrewman(!changedCrewman);
    setIsModalOpen(false);
  };

  const handleUpdateCrewman = async (crewman: Partial<CrewmanDTO>) => {
    const crewmanId = crewmanSelected;
    await updateCrewman(crewmanId, crewman);
    setChangedCrewman(!changedCrewman);
    setIsModalOpen(false);
  };

  return (
    <div style={theme.layoutContentPage as React.CSSProperties}>
      <NavbarContentPages entityType="crewman" />
      <main style={theme.containerContentPage as React.CSSProperties}>
        <div style={theme.divContent as React.CSSProperties}>
          {crewmen.map((item) => {
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
