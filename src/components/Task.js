import React from 'react'

import TaskElement from '../styled-components/TaskElement'
import RemoveButton from '../styled-components/RemoveButton'

const Task = ({ task, remove, color }) => {

    return (
        <TaskElement important={task.important} color={color}>
            <p>{task.content}</p>
            <p>{task.date}</p>
            <p>{task.type}</p>
            <RemoveButton onClick={() => remove(task.id)}>-</RemoveButton>
        </TaskElement>
    )
}

export default Task
