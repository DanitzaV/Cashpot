import React, { Component } from 'react';
import Login from './Login';
import './App.css';
import LOGO from './LOGO.png'

class Splash extends Component {
  constructor() {
    super();
    this.state = {
      timePassed: false
    }
  }
  render() {

    setTimeout(() => this.setState({ timePassed: true }), 5000);

    return (
      <div>
        {!this.state.timePassed ? (
          <div className="container-fluid" id="courtainContainer">
            <div className="row">
              <div className="col-6 offset-3 text-center">
                <img src={LOGO} className="img-fluid App-logo-ini" alt="logo" />
              </div>
            </div>
            <div className="row">
              <div className="col-6 offset-2">
                <h1 className="splashTitle">PINCASH</h1>
              </div>
            </div>
          </div>
        ) : (<Login></Login>)
        }
      </div>
    )
  }
}
export default Splash;