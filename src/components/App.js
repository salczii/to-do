import React, { Component } from 'react';
import Layout from './Layout/Layout';
import TaskManagment from './TaskManagment';
import ImportantTask from './ImportantTask';
import DoneTasks from './DoneTasks';
import Settings from './Settings';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='content'>
        <Layout>
          <Route path='/important' component={ImportantTask} />
          <Route path='/complete' component={DoneTasks} />
          <Route path='/settings' component={Settings} />
          <Route path='/' exact component={TaskManagment} />
        </Layout>
      </div>
    );
  }
}

export default App;
