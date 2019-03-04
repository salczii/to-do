import React from 'react';
import Modal from './UI/Modal';
import Button from '../styled-components/Button';
import CreateTask from './UI/CreateTask'
import LoginPage from './LoginPage';
import { AppContext } from './AppProvider';


const AdminSection = ({ show, open, close, type }) => {

    let component = null

    switch (type) {
        case 'task':
            component = <AppContext.Consumer>{({ addTask }) => <CreateTask close={close} addTask={addTask} open={open} />}</AppContext.Consumer>
            break;
        case 'login':
            component = <LoginPage open={open} />
            break;
        default: component = null
    }

    return (
        <div className='admin-section'>
            <Button task onClick={() => open('task')}>CREATE TASK</Button>
            <Button login onClick={() => open('login')}>SIGN IN</Button>
            <Modal show={show} close={close}>
                {component}
            </Modal>
        </div>
    )
}

export default AdminSection

