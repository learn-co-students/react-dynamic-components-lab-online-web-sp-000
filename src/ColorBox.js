import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let newOpacity = this.props.opacity
    return (
      <div className="color-box" style={{opacity: newOpacity /*replace null with the value*/}}>
        {/* your conditional code here! */
        newOpacity >= 0.2 ? <ColorBox opacity={newOpacity - 0.1}/>: null
        }
      </div>
    )
    
  }

}

