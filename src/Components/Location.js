import React, { Component } from 'react';

import Map from './Mapa';
// This class definition is a React.Component so that we
// can use it in multiple places for the app.

export default class Location extends Component {

  // The constructor takes properties defined as element attributes
  // defined in JSX along with an initial default value for state.

  constructor(props) {
    super(props);
    this.state = {
      value: '0,0', // Null Island
      error: null,
      data: []
    }
  }

  // When the component is rendered to the DOM for the first time
  // such as at page load we call the Geolocation API to determine
  // a latitude and longitude for the browser
 

  componentDidMount() {
    if (navigator.geolocation) {
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          
          this.setState({
            value: [ {lat: position.coords.latitude ,lg: position.coords.longitude}],
            error: null,
          });
        },
        (error) => this.setState(
          {error: error.message}
        )
      );
    }
  }

// Respond to user input with event callback
  
changeLocation(evt) {
    this.setState({
        value: evt.target.value,
      }
    )
  }


  // The JSX definition for how to render this component on the page.  
  // In this case, it's a simple input field for new todo items.

  render() {
    
    // fetch(`https://places.demo.api.here.com/places/v1/discover/explore?at=${this.state.value[0].lat}%2C${this.state.value[0].lg}&cat=atm-bank-exchange&app_id=FEvccZMTuKIuT1WwAa1S&app_code=FhLrXpED1CV2tBJ-qymxcQ`)
    // .then(res => res.json()).then(result => console.log(result))
    return (
        <div>
          
        <Map app_id="FEvccZMTuKIuT1WwAa1S" app_code="FhLrXpED1CV2tBJ-qymxcQ"  lat={this.state.value[0].lat} lg={this.state.value[0].lg}/>
            <input
              className="new-todo"
              value={ this.state.value }
              onChange={ evt => this.changeLocation(evt) }
              />
        </div>
       
    );
  }
}
