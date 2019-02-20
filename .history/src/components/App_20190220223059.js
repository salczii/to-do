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
            <select name="type">
              <option selected>dom</option>
              <option>praca</option>
              <option>szkola</option>
              <option>hobby</option>
              <option>rodzina</option>
            </select>
          </form>

        </div>
      </div>
    );
  }
}

export default App;
