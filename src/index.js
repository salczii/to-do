import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));