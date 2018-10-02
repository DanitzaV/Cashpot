import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyB3CthvMNlvq5eb_JoKsil6RrZ82NXXEO4",
  authDomain: "cashpot-68a8c.firebaseapp.com"
})

class Login extends Component {

  state = { isSignedIn: false };

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
          <div class="container-fluid">
            <div class="row">
              <div class="col-6 offset-3 text-center">
                <div>
                  <img class="mt-5" alt="foto" src={firebase.auth().currentUser.photoURL} />
                  <h1 class="mt-3">Bienvenida a la aplicación {firebase.auth().currentUser.displayName} </h1>
                  <button type="button" class="btn btn-success" onClick={this.logOut}>Salir</button>
                </div>
              </div>
            </div>
          </div>) : (
            <div className="container-fluid">
              <div class="row">
                <div class="col-6 offset-3 text-center">
                  <div class="container-fluid pt-5">
                    <StyledFirebaseAuth
                      uiConfig={this.uiConfig}
                      firebaseAuth={firebase.auth()} />
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Login;