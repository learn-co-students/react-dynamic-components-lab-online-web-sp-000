import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let o = this.props.opacity;

    return (
     
      <div className="color-box" style={{opacity: o}}>
      
        {
          o < 0.2 ? null :  <ColorBox opacity={o = o - 0.1} /> 
           }           
      </div>     
    )    
  }
}

