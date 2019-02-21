import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => {

    let tasksMap = tasks.map(task => (
        <Task
            key={task.id}
            task={task} />
    ))

    return (
        <div className='task_Wrapper'>
            {tasksMap}
        </div>
    )
}

export default TaskList
