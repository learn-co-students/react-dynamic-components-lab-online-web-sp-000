import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opacity = this.props.opacity
    const newVal = parseFloat(opacity) - 0.1
    console.log('New Val', newVal)
    return (opacity <= .2) ? null : (
        <div className="color-box" style={{opacity: opacity}}>
          <ColorBox opacity={newVal}/>
        </div>
    )
  }
}

