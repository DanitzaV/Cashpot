import React, { Component } from 'react';

class PrintReclamo extends Component {
    render() {
      return (
        <div>
          {this.props.items.map(item => (
            <div key={item.id}>{item.text}</div> 
          ))}
        </div>
      );
    }
  }
  
  export default PrintReclamo;