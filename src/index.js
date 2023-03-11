import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { 
    BrowserRouter
} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './fontawesome';
import AppContainer from './containers/layouts/AppContainer';
import reportWebVitals from './reportWebVitals';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppContainer/> 
    </BrowserRouter>
);

reportWebVitals();
