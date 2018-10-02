
import  React,{ Component } from 'react';
import data from './dataCajeros.json';
var request = require("request");

export default class Map extends Component {

    // For conciseness simply included all parameters in the querystring directly
  
    constructor(props) {
      super(props);
      this.state = {
        url: 'https://image.maps.api.here.com/mia/1.6/mapview?',
        points: data.places,
      }
      this.getPOIList = this.getPOIList.bind(this)
    }
    componentWillMount(){
    // console.log(data.places)
    // let  apiCajeros =  data.filter(e =>{
    //   console.log(e)
      // if(e.latitude && e.longitude != null) {
      //   console.log(e)
        // this.setState({ points: [...this.state.points, data.places]})
        // console.log(this.state.points) ---
      // }
    //  } )
    //  console.log(apiCajeros)
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // Access-Control-Allow-Origin: *
              fetch(`https://places.demo.api.here.com/places/v1/discover/explore?at=${position.coords.latitude}%2C${position.coords.longitude}&cat=atm-bank-exchange&app_id=FEvccZMTuKIuT1WwAa1S&app_code=FhLrXpED1CV2tBJ-qymxcQ`)
              .then(res => res.json()).then(result => console.log(result.results.items))
            },
            
          );
        }

      //   var options = { method: 'GET',
      //   url: 'https://api.us.apiconnect.ibmcloud.com/portal-api-developers-desarrollo/sandbox/info-banco/cajeros',
      //   headers: 
      //    { accept: 'application/json',
      //      'x-ibm-client-id': 'c27444ee-de0f-4cf3-a856-334d66fd8eba' } };
    
      // request(options, function (error, response, body) {
      //   if (error) return console.error('Failed: %s', error.message);
        
      //   console.log( body);
      // });
    }
  

    // // Helper function to format list of points
    // getPOIList() {
       
    //   if (this.state.points.length > 0) {
    //     let param = '&poi=';
    //     for (var poi in this.state.points) {
    //       param += poi.latitude + ',' + poi.longitude;
    //     }
    //     return param;
    //   }
  
    //   return '';
    // }
    getPOIList() {
      //  console.log(this.state.points)
      if (this.state.points.length > 0) {
        let param = 'poi=';
        for (let i = 0; i < this.state.points.length; i++) {
        if(this.state.points[i].latitude && this.state.points[i].longitude != null) {
          param += this.state.points[i].latitude + '%2C' + this.state.points[i].longitude + '%2C';
        } 
        }
        console.log(param)
        return param;
      }
  
      return '';
    }
  
    // Render method builds the URL dynamically to fetch the image from the
    // HERE Map Image API
  
    render() {
     
      return (
        <img
          src={ this.state.url 
            
            + 'c=' + this.props.lat 
            + '%20%2C'+ this.props.lg
            + '&z=20'+ '&w=500&h=500&f=2'
            + '&' + this.getPOIList()
            + '&app_id=' + this.props.app_id
            + '&app_code=' + this.props.app_code
            
            }
          alt="Todo Map"/>
      );
    }
  }