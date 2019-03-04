import React from 'react'
import { withAppContext } from './withAppContext'
import Task from './Task'

const DoneTasks = ({ context: { tasks } }) => {

    let doneTasks = <p>brak aktywnych zadań</p>

    if (tasks) {
        doneTasks = tasks
            .filter(task => task.active === true)
            .map(task => <Task
                key={task.id + task.type}
                task={task} />
            )
    }

    return (
        <section>
            <h1>Done Tasks</h1>
            {doneTasks}
        </section>
    )
}

export default withAppContext(DoneTasks)