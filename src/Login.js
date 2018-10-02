import React, { Component } from 'react';
import './App.css';
import logo2 from './logo2.png'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyB3CthvMNlvq5eb_JoKsil6RrZ82NXXEO4",
  authDomain: "cashpot-68a8c.firebaseapp.com"
})

class Login extends Component {

  state = { isSignedIn: false, };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    })
  }

  logOut = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (

          <div className="container-fluid">
            <div className="row">
              <div className="col-6 offset-3 text-center">
                <img className="profile mt-5" alt="foto" src={firebase.auth().currentUser.photoURL} />
                <h1 className="mt-3">Bienvenida a la aplicación {firebase.auth().currentUser.displayName} </h1>
                <button type="button" className="btn btn-success" onClick={this.logOut}>Salir</button>
              </div>
            </div>
          </div>) : (

            <div className="container-fluid">
              <div className="row">
                <div className="col-6 offset-3 text-center">
                  <img src={logo2} className="App-logo" alt="logo" />
                </div>
              </div>
              <div className="row">
                <div className="col-10 offset-1 text-center pt-5">
                <p>Elige tu método de inicio de sesión</p>
                <hr/>
                  <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()} />
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Login;