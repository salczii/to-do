import React from 'react';
import Task from './Task';
import SearchBar from '../components/Layout/Toolbar/SearchBar'
import Axios from 'axios';

const colors = {
    home: 'lightblue',
    school: 'lightgreen',
    work: 'lightgray',
    hobby: 'lightyellow',
    others: 'darkgray'
}

class TaskList extends React.Component {

    state = {
        error: false
    }

    componentDidMount() {
        Axios.get('https://todo-18fae.firebaseio.com/tasks.json')
            .then(response => {
                if (response.data) {
                    const tasks = Object.keys(response.data)
                        .map(task => response.data[task])
                    this.props.getTasks(tasks)
                }
            })
            .catch(error => this.setState({ error: true }))
    }

    componentDidUpdate(prevProps, prevState) {
        Axios.get('https://todo-18fae.firebaseio.com/tasks.json')
            .then(response => {
                if (response.data) {
                    const tasks = Object.keys(response.data)
                        .map(task => response.data[task])
                    this.props.getTasks(tasks)
                }
            })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.tasks.length !== nextProps.tasks.length)
        if (this.props.tasks.length !== nextProps.tasks.length) {
            return true
        } else {
            return false
        }
    }



    render() {
        const { tasks } = this.props;
        let homeTasks = null
        let schoolTasks = null
        let workTasks = null
        let hobbyTasks = null
        let others = null

        if (tasks) {
            // tasks.filter(task => console.log(task.active === 'others'))
            homeTasks = tasks
                .filter(task => task.type === 'home')
                .map(task => (
                    <Task
                        key={task.id + task.type}
                        task={task}
                        color={colors[task.type]} />
                ))
            schoolTasks = tasks
                .filter(task => task.type === 'school')
                .map(task => (
                    <Task
                        key={task.id + task.type}
                        task={task}
                        color={colors[task.type]} />
                ))
            workTasks = tasks
                .filter(task => task.type === 'work')
                .map(task => (
                    <Task
                        key={task.id + task.type}
                        task={task}
                        color={colors[task.type]} />
                ))
            hobbyTasks = tasks
                .filter(task => task.type === 'hobby')
                .map(task => (
                    <Task
                        key={task.id + task.type}
                        task={task}
                        color={colors[task.type]} />
                ))

            others = tasks
                .filter(task => task.type === 'others')
                .map(task => (
                    <Task
                        key={task.id + task.type}
                        task={task}
                        color={colors[task.type]} />
                ))
        }



        return (
            <section className='tasks_Wrapper'>
                <SearchBar />
                <div className="tasks_Wrapper--element">
                    <h1>Home tasks</h1>
                    {homeTasks}
                </div>
                <div className="tasks_Wrapper--element">
                    <h1>School tasks</h1>
                    {schoolTasks}
                </div>
                <div className="tasks_Wrapper--element">
                    <h1>Work tasks</h1>
                    {workTasks}
                </div>
                <div className="tasks_Wrapper--element">
                    <h1>hobby tasks</h1>
                    {hobbyTasks}
                </div>
                <div className="tasks_Wrapper--element">
                    <h1>other tasks</h1>
                    {others}
                </div>
            </section>
        )
    }
}

export default TaskList
