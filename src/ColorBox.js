import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {

    const opacityValue = this.props.opacity

    if(opacityValue >= 0.2) { // If the value of opacity is less than or equal to 0.2
      return ( // We create a div with the opacity value set equal to our variable, then create a ColorBox component with the opacity set to our variable minus 0.1
        <div className="color-box" style={{opacity: opacityValue}}>
           <ColorBox opacity={opacityValue - 0.1} />
        </div>
      )} else {
        return null
      }
  }

}

