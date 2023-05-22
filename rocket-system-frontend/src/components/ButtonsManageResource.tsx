import { useContext, useState } from 'react'
import { Button, Modal } from 'antd'
import { ThemeContext } from '../theme/ThemeContext'
import { CustomForm } from './Form'

function ButtonsManageResource() {
  const theme = useContext(ThemeContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const style = {
    marginTop: theme.divBtn.marginTop,
  }

  return (
    <div style={style}>
      <Button
        style={theme.btn}
        size="large"
        onClick={showModal}
      >
        Add
      </Button>
      <Button
        style={theme.btn}
        size="large"
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
        title="Register New Rocket"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ textAlign: 'center' }}
      >
        <CustomForm />
      </Modal>
    </div>
  )
}

export { ButtonsManageResource }
