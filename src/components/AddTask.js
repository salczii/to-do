import React from 'react';
import Modal from './UI/Modal';
import Button from '../styled-components/Button';
import Form from './UI/Form'
import { AppContext } from './AppProvider';

const AddTask = () => {
    return (
        <div className='admin-section'>
            <AppContext.Consumer>
                {({ openModal }) => <Button task onClick={openModal}>CREATE TASK</Button>}
            </AppContext.Consumer>
            <Button login>SIGN IN</Button>
            <Modal>
                <Form />
            </Modal>
        </div>
    )
}

export default AddTask
