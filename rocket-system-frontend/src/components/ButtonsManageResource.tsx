import { useContext, useState } from 'react';
import '../index.css'
import '../Page.css'
import { Button, Modal } from 'antd';
import { ThemeContext } from '../ThemeContext';

function ButtonsMangaResource() {

    const theme = useContext(ThemeContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const style = {
        marginTop: theme.divBtn.marginTop,

    }

    return (
        <div style={style}>
            <Button className="btn" size='large' style={{ margin: 'auto 15px', width: '100px' }} onClick={showModal}>Add</Button>
            <Button className="btn" size='large' style={{ margin: 'auto 15px', width: '100px' }}>Edit</Button>
            <Button className="btn" size='large' danger style={{ margin: 'auto 15px', width: '100px'}}>Delete</Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}

export {
    ButtonsMangaResource
};