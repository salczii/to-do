import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

class TaskManagment extends React.Component {

    state = {
        tasks: [
            {
                id: 0,
                conten: 'ssasasas',
                date: '2019-01-01',
                important: false,
                active: true,
                type: 'home'
            },
            {
                id: 1,
                conten: 'ssasasas',
                date: '2019-01-01',
                important: true,
                active: true,
                type: 'school'
            },
            {
                id: 2,
                conten: 'ssasasas',
                date: '2019-01-01',
                important: true,
                active: true,
                type: 'school'
            },
            {
                id: 3,
                conten: 'ssasasas',
                date: '2019-01-01',
                important: false,
                active: true,
                type: 'home'
            },
            {
                id: 4,
                conten: 'ssasasas',
                date: '2019-01-01',
                important: false,
                active: true,
                type: 'home'
            },
            {
                id: 5,
                conten: 'ssasasas',
                date: '2019-01-01',
                important: true,
                active: true,
                type: 'hobby'
            },
            {
                id: 6,
                conten: 'ssasasas',
                date: '2019-01-01',
                important: true,
                active: true,
                type: 'home'
            },
            {
                id: 7,
                conten: 'ssasasas',
                date: '2019-01-01',
                important: false,
                active: true,
                type: 'others'
            },
            {
                id: 8,
                conten: 'ssasasas',
                date: '2019-01-01',
                important: true,
                active: true,
                type: 'work'
            },
            {
                id: 9,
                conten: 'ssasasas',
                date: '2019-01-01',
                important: false,
                active: true,
                type: 'work'
            }
        ]
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
        return true
    }

    removeTask = id => {
        let tasks = [...this.state.tasks]
        tasks = tasks.filter(task => task.id !== id)
        this.setState({ tasks })
    }

    render() {
        return (
            <>
                <AddTask add={this.addTask} />
                <div className="section">
                    {/* <SearchBar /> */}
                    <TaskList
                        tasks={this.state.tasks}
                        remove={this.removeTask} />
                </div>
            </>
        )
    }
}

export default TaskManagment

