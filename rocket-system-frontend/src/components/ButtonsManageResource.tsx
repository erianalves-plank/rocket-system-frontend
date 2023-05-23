import { useContext, useState } from 'react'
import { Button, Modal } from 'antd'
import { ThemeContext } from '../theme/ThemeContext'
import { FormRocket } from './forms/FormRocket'
import { FormCrewman } from './forms/FormCrewman';
import { FormLaunch } from './forms/FormLaunch';
import { FormCrew } from './forms/FormCrew';
import { DataRocket } from './cardContent/CardContent';
import { DataCrew } from './cardContent/CardContentCrew';
import { DataLaunch } from './cardContent/CardContentLaunch';
import { DataCrewman } from './cardContent/CardContentCrewman';

interface ChildComponentProps {
  handleClick: (operation: string) => void;
}


const ButtonsManageResource: React.FC<ChildComponentProps> = ({handleClick}) => {

   const [modalData, setModalData] = useState<DataRocket | DataCrew>(); 


  const theme = useContext(ThemeContext)

 
  
  const style = {
    marginTop: theme.divBtn.marginTop,
  }
  
  const handleClickAddButton = () => {
    handleClick('Add');
  }
  const handleClickEditButton = () => {
    handleClick('Edit');
  }
  
  return (
    <div style={style}>
      <Button
        style={theme.btn}
        size="large"
        onClick={handleClickAddButton}
        >
        Add
      </Button>
      <Button
        style={theme.btn}
        size="large"
        onClick={handleClickEditButton} >
        Edit
      </Button>
      <Button
        style={theme.btn}
        
        size="large"
        danger >
        Delete
      </Button>

    </div>
  )
}

export { ButtonsManageResource }
