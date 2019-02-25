import React, { Component } from 'react';
import Modal from './UI/Modal';
import LoginBtn from './UI/LoginBtn';
import Button from '../styled-components/Button';

export class AddTask extends Component {

    getCurrentDate = () => {
        let currentDate = new Date().toISOString().slice(0, 10);
        return currentDate
    }

    state = {
        inputTaskValue: '',
        inputDateValue: this.getCurrentDate(),
        checkedImportantValue: false,
        selectActiveValue: 'others',
        showModal: false
    }

    addTaskHandler = () => {
        const add = this.props.add(this.state.inputTaskValue, this.state.inputDateValue, this.state.checkedImportantValue, this.state.selectActiveValue)
        if (add) {
            this.setState({
                inputTaskValue: '',
                checkedImportantValue: false,
                inputDateValue: this.getCurrentDate(),
                selectActiveValue: 'others'
            })
        }
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.addTaskHandler();
    }

    onInputTextChange = e => {
        this.setState({ inputTaskValue: e.target.value })
    }

    onImportantChange = e => {
        this.setState(prevState => ({
            checkedImportantValue: !prevState.checkedImportantValue
        }));
    }

    onSelectChange = e => {
        this.setState({ selectActiveValue: e.target.value })
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

        const maxDate = parseInt(this.getCurrentDate().slice(0, 4)) + 2 + this.getCurrentDate().slice(4, 10);

        return (
            <div className='admin-section'>
                <Button task onClick={this.createTaskHandler}>CREATE TASK</Button>
                <LoginBtn />
                <Modal showModal={this.state.showModal} modalClosed={this.closeModalHandler}>
                    <form onSubmit={this.onFormSubmit}>
                        <input
                            onChange={this.onInputTextChange}
                            value={this.state.inputTaskValue}
                            placeholder='add task'
                            type='text' />
                        <label htmlFor="important">is important?</label>
                        <input
                            type="checkbox"
                            checked={this.state.checkedImportantValue}
                            onChange={this.onImportantChange}
                            id='important'
                        />
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id='date'
                            value={this.state.inputDateValue}
                            min={this.getCurrentDate()}
                            max={maxDate}
                            onChange={e => this.setState({ inputDateValue: e.target.value })}
                        />

                        <select onChange={this.onSelectChange} value={this.state.selectActiveValue}>
                            <option value="home">home</option>
                            <option value="work">work</option>
                            <option value="hobby">hobby</option>
                            <option value="school">school</option>
                            <option value="others">others</option>
                        </select>
                    </form>
                    <button onClick={() => this.addTaskHandler()}>add task</button>
                </Modal>
            </div>
        )
    }
}

export default AddTask
