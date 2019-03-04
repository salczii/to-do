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
            showSpinner: false,
            getTasks: this.getTasks,
            darkTheme: false,
            setTheme: this.setTheme
        }
    }

    setPage = page => {
        this.setState({ page })
    }

    setTheme = () => {
        this.setState(prevState => ({
            darkTheme: !prevState.darkTheme
        }));
    };

    getTasks = tasks => {
        this.setState({ tasks })
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
