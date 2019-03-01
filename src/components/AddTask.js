import React from 'react';
import Modal from './UI/Modal';
import Button from '../styled-components/Button';
import Form from './UI/Form'
import LoginPage from './LoginPage';
import { AppContext } from './AppProvider';

const AddTask = ({ type }) => {

    let component = null

    switch (type) {
        case 'task':
            component = <Form />
            break;
        case 'login':
            component = <LoginPage />
    }

    console.log(component)

    return (
        <div className='admin-section'>
            <AppContext.Consumer>
                {({ openModal }) => <Button task onClick={() => openModal('task')}>CREATE TASK</Button>}
            </AppContext.Consumer>
            <AppContext.Consumer>
                {({ openModal }) => <Button login onClick={() => openModal('login')}>SIGN IN</Button>}
            </AppContext.Consumer>
            <Modal>
                {component}
            </Modal>

        </div>
    )
}

export default AddTask
