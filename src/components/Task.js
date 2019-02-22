import React from 'react'

import styled, {css} from 'styled-components';

const ControlTaskElement = styled.div`
    display: flex;
    justify-content: center;
    ${props=>props.important && css`
    color: red;
    `}
`

const Task = ({ task, remove }) => {

    return (
        <ControlTaskElement important={task.important}>
            <p>{task.content}</p>
            <p>{task.date}</p>
            <p>{task.type}</p>
            <button onClick={() => remove(task.id)}>-</button>
        </ControlTaskElement>
    )
}

export default Task
