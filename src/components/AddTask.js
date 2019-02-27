import React, { Component } from 'react';
import Modal from './UI/Modal';
import LoginBtn from './UI/LoginBtn';
import Button from '../styled-components/Button';
import Form from './UI/Form'
class AddTask extends Component {
    state = {
        showModal: false
    }

    createTaskHandler = () => {
        this.setState({
            showModal: true
        })
    }

    closeModalHandler = () => {
        this.setState({
            showModal: false
        })
    }

    render() {

        return (
            <div className='admin-section'>
                <Button task onClick={this.createTaskHandler}>CREATE TASK</Button>
                <LoginBtn />
                <Modal showModal={this.state.showModal} modalClosed={this.closeModalHandler}>
                    <Form
                        add={this.props.add}
                        closeModal={this.closeModalHandler} />
                </Modal>
            </div>
        )
    }
}

export default AddTask
