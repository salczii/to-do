import React from 'react'

const Task = ({ task, remove }) => {
    return (
        <div>
            <p>{task.content}</p>
            <p>{task.date}</p>
            <p>{task.type}</p>
            <button onClick={() => remove(task.id)}>-</button>
        </div>
    )
}

export default Task
