import React from 'react'
import { withAppContext } from './withAppContext'
import Task from './Task'
import SearchBar from './Layout/Toolbar/SearchBar'

const importantTasks = ({ context: { tasks } }) => {

    let importantTasks = <p>brak important zadań</p>

    console.log(tasks)

    if (tasks) {
        importantTasks = tasks
            .filter(task => task.important === true)
            .map(task => <Task
                key={task.id + task.type}
                task={task}
                color={task.color} />
            )
    }

    return (
        <section>
            <div className="tasks_Wrapper--element">
                <SearchBar />
                <h1> important Tasks</h1>
                {importantTasks}
            </div>
        </section>
    )
}

export default withAppContext(importantTasks)