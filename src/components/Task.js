import React from 'react'

import TaskElement from '../styled-components/TaskElement'
import RemoveButton from '../styled-components/RemoveButton'
import TrashIcon from '../styled-components/TrashIcon'
import AlarmIcon from '../styled-components/AlarmIcon';
import { AppContext } from './AppProvider';

const Task = ({ task, color }) => {

    let content = null
    task.content.length > 20 ? content = task.content.slice(0, 20) + '...' : content = task.content

    return (
        <TaskElement important={task.important.toString()} color={color}>
            <p>{content}</p>
            <p>{task.date}</p>
            <p>{task.type}</p>
            <AlarmIcon important={task.important.toString()} />
            <AppContext.Consumer>
                {({ removeTask }) =>
                    <RemoveButton onClick={() => removeTask(task.id)}><TrashIcon important={task.important.toString()} /></RemoveButton>}
            </AppContext.Consumer>

        </TaskElement>
    )
}

export default Task
