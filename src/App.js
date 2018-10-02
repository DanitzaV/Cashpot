import React, { Component } from 'react';
import ModaApp from './Modal/Modal'
import FooterNav from './FooterNav/FooterNav'
import Reclamo from './Reclamo/Reclamo.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModaApp/>
        <FooterNav/>
        <Reclamo/>
      </div>
    );
  }
}

export default App;
