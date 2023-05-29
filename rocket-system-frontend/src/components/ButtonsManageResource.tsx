import { Button } from 'antd';
import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';

interface ChildComponentProps {
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
      <Button style={theme.btn} size="large" onClick={handleClickAddButton}>
        Add
      </Button>

      <Button style={theme.btn} size="large" onClick={handleClickEditButton}>
        Edit
      </Button>

      <Button
        style={theme.btn}
        size="large"
        onClick={handleClickDeleteButton}
        danger
      >
        Delete
      </Button>
    </div>
  );
};

export { ButtonsManageResource };
