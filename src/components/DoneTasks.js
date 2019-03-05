import React from 'react'
import { withAppContext } from './withAppContext'
import Task from './Task'
import SearchBar from './Layout/Toolbar/SearchBar'

const DoneTasks = ({ context: { tasks } }) => {

    let doneTasks = <p>brak aktywnych zadań</p>

    if (tasks) {
        doneTasks = tasks
            .filter(task => task.active === true)
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
                <h1>Done Tasks</h1>
                {doneTasks}
            </div>
        </section>

    )
}

export default withAppContext(DoneTasks)