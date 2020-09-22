import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './Signup.css'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
        document.getElementById('root')
)