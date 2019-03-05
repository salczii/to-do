import React from 'react'
import axios from '../../axios'
import Spinner from './Spinner'
import errorHandler from '../ErrorHandler'
import FormWrapper from '../../styled-components/FormWrapper'

class CreateTask extends React.Component {

    getCurrentDate = () => {
        let currentDate = new Date().toISOString().slice(0, 10);
        return currentDate
    }

    state = {
        inputTaskValue: '',
        inputDateValue: this.getCurrentDate(),
        checkedImportantValue: false,
        selectType: 'others',
        loading: false
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
        this.setState({ selectType: e.target.value })
    }

    sendTaskHandler = () => {
        // this.props.close()
        this.setState({ loading: true })
        const task = {
            content: this.state.inputTaskValue,
            date: this.state.inputDateValue,
            important: this.state.checkedImportantValue,
            type: this.state.selectType,
            id: this.state.inputTaskValue,
            active: true
        }
        axios.post('/tasks.json', task)
            .then(response => {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                        inputTaskValue: '',
                        inputDateValue: this.getCurrentDate(),
                        checkedImportantValue: false,
                        selectTtype: 'others',
                    })
                }, 500);
                !this.props.error && this.props.close()
            })
            .catch(error => {
                this.setState({ loading: false })
            });
        this.props.addTask(task)
    }

    render() {
        const maxDate = parseInt(this.getCurrentDate().slice(0, 4)) + 2 + this.getCurrentDate().slice(4, 10);
        const { inputTaskValue, inputDateValue, checkedImportantValue, selectType, loading } = this.state

        let formPage = (
            <FormWrapper>
                <form onSubmit={this.sendTaskHandler}>
                    < input
                        onChange={this.onInputTextChange}
                        value={inputTaskValue}
                        placeholder='add task'
                        type='text' />
                    <label htmlFor="important">is important?</label>
                    <input
                        type="checkbox"
                        checked={checkedImportantValue}
                        onChange={this.onImportantChange}
                        id='important'
                    />
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id='date'
                        value={inputDateValue}
                        min={this.getCurrentDate()}
                        max={maxDate}
                        onChange={e => this.setState({ inputDateValue: e.target.value })}
                    />

                    <select onChange={this.onSelectChange} value={selectType}>
                        <option value="home">home</option>
                        <option value="work">work</option>
                        <option value="hobby">hobby</option>
                        <option value="school">school</option>
                        <option value="others">others</option>
                    </select>
                    <button onClick={this.sendTaskHandler}>add task</button>
                </form>
            </FormWrapper>
        )
        if (loading) {
            formPage = <Spinner />
        }

        return (
            <>
                {formPage}
            </>
        )
    }
}

export default errorHandler(CreateTask, axios)
