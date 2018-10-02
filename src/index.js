import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Splash from './Splash';

ReactDOM.render(<App/> , document.getElementById('root'));
ReactDOM.render(<Splash/> , document.getElementById('login'));
registerServiceWorker();