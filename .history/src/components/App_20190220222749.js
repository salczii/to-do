import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/Layout'

class App extends Component {
  state = {
    inputValue: '',
  }
  render() {
    return (
      <div className="App">
        <Layout>
        </Layout>
        <div className="section">
          <form>
            <input
              value={this.state.inputValue}
              placeholder='write some text here...'
              type='text' />
          </form>

        </div>
      </div>
    );
  }
}

export default App;
