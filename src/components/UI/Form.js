import React from 'react'
import { AppContext } from '../AppProvider';


class Form extends React.Component {

    getCurrentDate = () => {
        let currentDate = new Date().toISOString().slice(0, 10);
        return currentDate
    }

    state = {
        inputTaskValue: '',
        inputDateValue: this.getCurrentDate(),
        checkedImportantValue: false,
        selectActiveValue: 'others',
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

    render() {

        const { inputTaskValue, inputDateValue, checkedImportantValue, selectActiveValue } = this.state

        const maxDate = parseInt(this.getCurrentDate().slice(0, 4)) + 2 + this.getCurrentDate().slice(4, 10);

        return (
            <>
                <form>
                    < input
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
                <AppContext.Consumer>
                    {({ addTask }) => <button onClick={() => addTask(inputTaskValue, inputDateValue, checkedImportantValue, selectActiveValue)}>add task</button>}
                </AppContext.Consumer>

            </>
        )
    }
}

export default Form
