import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, remove }) => {

    let homeTasks = tasks
        .filter(task => task.type === 'home')
        .map(task => (
            <Task
                key={task.id}
                task={task}
                remove={remove}
                type={task.type} />
        ))
    let schoolTasks = tasks
        .filter(task => task.type === 'school')
        .map(task => (
            <Task
                key={task.id}
                task={task}
                remove={remove}
                type={task.type} />
        ))
    let workTasks = tasks
        .filter(task => task.type === 'work')
        .map(task => (
            <Task
                key={task.id}
                task={task}
                remove={remove}
                type={task.type} />
        ))
    let hobbyTasks = tasks
        .filter(task => task.type === 'hobby')
        .map(task => (
            <Task
                key={task.id}
                task={task}
                remove={remove}
                type={task.type} />
        ))

    let others = tasks
        .filter(task => task.type === 'others')
        .map(task => (
            <Task
                key={task.id}
                task={task}
                remove={remove}
                type={task.type} />
        ))

    return (
        <div className='task_Wrapper'>
            <div className="homeTask_Wrapper">
                {homeTasks}
            </div>
            <div className="schoolTask_Wrapper">
                {schoolTasks}
            </div>
            <div className="workTask_Wrapper">
                {workTasks}
            </div>
            <div className="hobbyTask_Wrapper">
                {hobbyTasks}
            </div>
            <div className="othersTask_Wrapper">
                {others}
            </div>
        </div>
    )
}

export default TaskList
