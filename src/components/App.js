import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import TaskList from './TaskList';
import AddTask from './AddTask';

class App extends Component {
  state = {
    tasks: []
  }

  addTask = (content, date, important, type) => {
    const task = {
      id: this.state.tasks.length,
      content,
      date,
      important,
      active: true,
      type
    }
    this.setState({ tasks: [...this.state.tasks, task] })
    return true
  }

  removeTask = id => {
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({ tasks })
  }

  render() {
    return (
      <div className="App">
        <Layout>
        </Layout>
        <AddTask add={this.addTask} />
        <div className="section">
          <TaskList
            tasks={this.state.tasks}
            remove={this.removeTask} />
        </div>
      </div>
    );
  }
}

export default App;
