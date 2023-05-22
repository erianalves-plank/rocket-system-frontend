import { useContext, useState } from 'react'
import { Button, Modal } from 'antd'
import { ThemeContext } from '../theme/ThemeContext'
import { FormRocket } from './forms/FormRocket'
import { FormCrewman } from './forms/FormCrewman';
import { FormLaunch } from './forms/FormLaunch';
import { FormCrew } from './forms/FormCrew';

interface FormComponents {
  rocket: React.FC<object>;
  crewman: React.FC<object>;
  crew: React.FC<object>;
  launch: React.FC<object>;
}

const formComponents: FormComponents = {
  rocket: FormRocket,
  crewman: FormCrewman,
  crew: FormCrew,
  launch: FormLaunch,
};

interface PropsType {
  entityType: keyof FormComponents;
}
const ButtonsManageResource: React.FC<PropsType> = ({entityType}) => {
  const Component = formComponents[entityType];

  const theme = useContext(ThemeContext)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('');

  const showModal = (operation: string) => {
    setModalTitle(`${operation} a ${entityType}`);
    setIsModalOpen(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  }
  const style = {
    marginTop: theme.divBtn.marginTop,
  }


  return (
    <div style={style}>
      <Button
        style={theme.btn}
        size="large"
        onClick={() => showModal('Register')}
      >
        Add
      </Button>
      <Button
        style={theme.btn}
        size="large"
        onClick={() => showModal('Edit')}
      >
        Edit
      </Button>
      <Button
        style={theme.btn}

        size="large"
        danger
      >
        Delete
      </Button>

      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ textAlign: 'center' }}
      >
        <Component/>
      </Modal>
    </div>
  )
}

export { ButtonsManageResource }
