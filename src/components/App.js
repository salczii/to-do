import React, { Component } from 'react';
import Layout from './Layout/Layout';
import TaskManagment from './TaskManagment'

class App extends Component {

  render() {
    return (
      <div className='content'>
        <Layout>
          <TaskManagment />
        </Layout>
      </div>
    );
  }
}

export default App;
