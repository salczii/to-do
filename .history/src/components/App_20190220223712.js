import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout'

class App extends Component {
  state = {
    inputValue: '',
  }

  onFormSubmit = () => {

  }

  render() {
    return (
      <div className="App">
        <Layout>
        </Layout>
        <div className="section">
          <form onSubmit={this.onFormSubmit}>
            <input
              onChamge={this.onInputChange}
              value={this.state.inputValue}
              placeholder='write some text here...'
              type='text' />
            <button>type of task</button>
          </form>

        </div>
      </div>
    );
  }
}

export default App;
