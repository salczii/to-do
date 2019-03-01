import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import { AppContext } from './AppProvider';

class TaskManagment extends React.Component {
    render() {
        return (
            <>
                <AppContext.Consumer>
                    {({ addTask, removeTask, openModal, closeModal, showModal }) => <AddTask
                        add={addTask}
                        remove={removeTask}
                        open={openModal}
                        close={closeModal}
                        show={showModal} />}
                </AppContext.Consumer>
                <div className="section">
                    <AppContext.Consumer>
                        {({ tasks, removeTask }) => <TaskList tasks={tasks} remove={removeTask} />}
                    </AppContext.Consumer>
                </div>
            </>
        )
    }
}

export default TaskManagment

