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
          <input value={/>
        </div>
      </div>
        );
      }
    }
    
    export default App;
