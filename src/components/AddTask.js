import React, { Component } from 'react'

export class AddTask extends Component {

    getCurrentDate = () => {
        let currentDate = new Date().toISOString().slice(0, 10);
        return currentDate
    }

    state = {
        inputTaskValue: '',
        inputDateValue: this.getCurrentDate(),
        checkedImportantValue: false,
    }

    addTask = () => {
        console.log('add task')
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.addTask();
    }

    onInputTextChange = e => {
        this.setState({ inputTaskValue: e.target.value })
    }

    onImportantChange = e => {
        this.setState(prevState => ({
            checkedImportantValue: !prevState.checkedImportantValue
        }));
    }

    render() {

        const maxDate = parseInt(this.getCurrentDate().slice(0, 4)) + 2 + this.getCurrentDate().slice(4, 10);

        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        onChange={this.onInputTextChange}
                        value={this.state.inputTaskValue}
                        placeholder='add task'
                        type='text' />
                    <label htmlFor="important">is important?</label>
                    <input
                        type="checkbox"
                        checked={this.state.checked}
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
                </form>
                <button onClick={() => this.addTask()}>add task</button>
            </div>
        )
    }
}

export default AddTask
