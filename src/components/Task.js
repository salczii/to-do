import React from 'react'

import TaskElement from '../styled-components/TaskElement'
import RemoveButton from '../styled-components/RemoveButton'
import TrashIcon from '../styled-components/TrashIcon'
import AlarmIcon from '../styled-components/AlarmIcon';

const Task = ({ task, remove, color }) => {

    return (
        <TaskElement important={task.important.toString()} color={color}>
            <p>{task.content}</p>
            <p>{task.date}</p>
            <p>{task.type}</p>
            <AlarmIcon important={task.important.toString()} />
            <RemoveButton onClick={() => remove(task.id)}><TrashIcon important={task.important.toString()} /></RemoveButton>
        </TaskElement>
    )
}

export default Task
