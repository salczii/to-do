import React from 'react';
import Task from './Task';
import SearchBar from '../components/Layout/Toolbar/SearchBar'

const colors = {
    home: 'lightblue',
    school: 'lightgreen',
    work: 'lightgray',
    hobby: 'lightyellow',
    others: 'darkgray'
}

const TaskList = ({ tasks, remove }) => {

    let homeTasks = tasks
        .filter(task => task.type === 'home')
        .map(task => (
            <Task
                key={task.id}
                task={task}
                remove={remove}
                color={colors[task.type]} />
        ))
    let schoolTasks = tasks
        .filter(task => task.type === 'school')
        .map(task => (
            <Task
                key={task.id}
                task={task}
                remove={remove}
                color={colors[task.type]} />
        ))
    let workTasks = tasks
        .filter(task => task.type === 'work')
        .map(task => (
            <Task
                key={task.id}
                task={task}
                remove={remove}
                color={colors[task.type]} />
        ))
    let hobbyTasks = tasks
        .filter(task => task.type === 'hobby')
        .map(task => (
            <Task
                key={task.id}
                task={task}
                remove={remove}
                color={colors[task.type]} />
        ))

    let others = tasks
        .filter(task => task.type === 'others')
        .map(task => (
            <Task
                key={task.id}
                task={task}
                remove={remove}
                color={colors[task.type]} />
        ))

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

export default TaskList
