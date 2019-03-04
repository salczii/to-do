import React from 'react';
import TaskList from './TaskList';
import AdminSection from './AdminSection';
import { AppContext } from './AppProvider';

class TaskManagment extends React.Component {

    state = {
        showModal: false,
        modalType: ''
    }

    openModal = type => {
        this.setState({
            showModal: true,
            modalType: type
        })
    }

    closeModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        return (
            <><AdminSection
                show={this.state.showModal}
                open={this.openModal}
                close={this.closeModal}
                type={this.state.modalType} />
                <div className="section">
                    <AppContext.Consumer>
                        {({ tasks, getTasks }) => <TaskList tasks={tasks} getTasks={getTasks} />}
                    </AppContext.Consumer>
                </div>
            </>
        )
    }
}

export default TaskManagment

