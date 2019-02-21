import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import TaskList from './TaskList';
import AddTask from './AddTask';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        content: 'jakis tekst',
        important: true,
        type: 'home',
        date: '2019-09-09',
        active: true
      }
    ],
  }

  render() {
    return (
      <div className="App">
        <Layout>
        </Layout>
        <AddTask />
        <div className="section">
          <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
