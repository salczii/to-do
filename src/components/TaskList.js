import React from 'react';
import Task from './Task';
import SearchBar from '../components/Layout/Toolbar/SearchBar'
import Axios from 'axios';
import Spinner from './UI/Spinner'

const colors = {
    home: 'lightblue',
    school: 'lightgreen',
    work: 'lightgray',
    hobby: 'lightyellow',
    others: 'darkgray'
}

class TaskList extends React.Component {

    state = {
        error: false,
        response: false
    }

    componentDidMount() {
        Axios.get('https://todo-18fae.firebaseio.com/tasks.json')
            .then(response => {
                if (response.data) {
                    const tasks = Object.keys(response.data)
                        .map((task, id) => {
                            console.log(response.data[task].type)
                            return {
                                ...response.data[task],
                                id: id,
                                color: colors[response.data[task].type]
                            }

                        })

                    this.props.getTasks(tasks)
                    this.setState({ response: true })
                }
            })
            .catch(error => this.setState({ error: true }))
    }

    componentDidUpdate(prevProps, prevState) {
        Axios.get('https://todo-18fae.firebaseio.com/tasks.json')
            .then(response => {
                if (response.data) {
                    const tasks = Object.keys(response.data)
                        .map((task, id) => {
                            return {
                                ...response.data[task],
                                id: id
                            }

                        })
                    // const fetchTasks = []
                    // for(let key in res.data){
                    //     fetchTasks.push({
                    //         ...response.data[key],
                    //         id: key
                    //     });
                    // }
                    this.props.getTasks(tasks)
                }
            })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.tasks.length !== nextProps.tasks.length || this.state.response !== nextState.response) {
            return true
        } else {
            return false
        }
    }



    render() {
        console.log('sasasas')
        const { tasks } = this.props;
        const { response } = this.state;
        let homeTasks = null
        let schoolTasks = null
        let workTasks = null
        let hobbyTasks = null
        let others = null

        homeTasks = tasks
            .filter(task => task.type === 'home')
            .map(task => (
                <Task
                    key={task.id + task.type}
                    task={task}
                    color={task.color} />
            ))
        schoolTasks = tasks
            .filter(task => task.type === 'school')
            .map(task => (
                <Task
                    key={task.id + task.type}
                    task={task}
                    color={task.color} />
            ))
        workTasks = tasks
            .filter(task => task.type === 'work')
            .map(task => (
                <Task
                    key={task.id + task.type}
                    task={task}
                    color={task.color} />
            ))
        hobbyTasks = tasks
            .filter(task => task.type === 'hobby')
            .map(task => (
                <Task
                    key={task.id + task.type}
                    task={task}
                    color={task.color} />
            ))

        others = tasks
            .filter(task => task.type === 'others')
            .map(task => (
                <Task
                    key={task.id + task.type}
                    task={task}
                    color={task.color}
                />
            ))

        let content = <Spinner />

        if (response) {
            content = (
                <>
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
                </>
            )
        }

        return (
            <section className='tasks_Wrapper'>
                <SearchBar />
                {content}
            </section>
        )
    }
}

export default TaskList
