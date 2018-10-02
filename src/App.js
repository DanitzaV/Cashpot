import React, { Component } from 'react';
import ModaApp from './Modal/Modal'
import FooterNav from './FooterNav/FooterNav'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModaApp/>
        <FooterNav/>
      </div>
    );
  }
}

export default App;
