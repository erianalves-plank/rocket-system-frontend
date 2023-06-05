import { Button } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

export interface ChildComponentProps {
  handleClick: (operation: string) => void;
  handleClickDelete: () => void;
}

const ButtonsManageResource: React.FC<ChildComponentProps> = ({
  handleClick,
  handleClickDelete,
}) => {
  const theme = useContext(ThemeContext);

  const handleClickAddButton = () => {
    handleClick('Add');
  };
  const handleClickEditButton = () => {
    handleClick('Edit');
  };
  const handleClickDeleteButton = () => {
    console.log(handleClickDelete());
  };

  return (
    <div style={theme.divBtn}>
      <Button style={theme.btn} size="large" onClick={handleClickAddButton} data-cy={`button-add-rocket`}>
        Add
      </Button>

      <Button style={theme.btn} size="large" onClick={handleClickEditButton} data-cy={`button-edit-rocket`}>
        Edit
      </Button>

      <Button
        style={theme.btn}
        size="large"
        onClick={handleClickDeleteButton}
        danger
        data-cy={`button-delete-rocket`}>
        Delete
      </Button>
    </div>
  );
};

export { ButtonsManageResource };
