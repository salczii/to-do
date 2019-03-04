import React from 'react'
import { withAppContext } from './withAppContext'
import Task from './Task'

const importantTasks = ({ context: { tasks } }) => {

    let importantTasks = <p>brak important zadań</p>

    if (tasks) {
        importantTasks = tasks
            .filter(task => task.important === true)
            .map(task => <Task
                key={task.id + task.type}
                task={task} />
            )
    }

    return (
        <section>
            <h1>important Tasks</h1>
            {importantTasks}
        </section>
    )
}

export default withAppContext(importantTasks)