import React from 'react'

export const AppContext = React.createContext()

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '/',
            setPage: this.setPage,
            tasks: [],
            addTask: this.addTask,
            removeTask: this.removeTask,
            showModal: false,
            closeModal: this.closeModal,
            openModal: this.openModal,
            modalType: ''
        }
    }
    setPage = page => {
        this.setState({ page })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    openModal = type => {
        this.setState({
            showModal: true,
            modalType: type
        })
    }

    addTask = (content, date, important, type) => {
        const task = {
            id: this.state.tasks.length,
            content,
            date,
            important,
            active: true,
            type
        }
        this.closeModal()
        this.setState({ tasks: [...this.state.tasks, task] })
    }

    removeTask = id => {
        console.log(id)
        let tasks = [...this.state.tasks]
        tasks = tasks.filter(task => task.id !== id)
        this.setState({ tasks })
    }

    render() {
        return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>
    }
}
