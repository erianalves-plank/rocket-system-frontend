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

  const style = {
    marginTop: theme.divBtn.marginTop,
  };

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
    <div style={style}>
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
