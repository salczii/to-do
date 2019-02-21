import React from 'react'

const Task = ({ task }) => {
    return (
        <div>
            <p>{task.content}</p>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
