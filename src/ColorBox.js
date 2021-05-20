import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newVal = parseFloat(this.props.opacity) - .1
    console.log('New Val', newVal)
    return (newVal <= .2) ? null : (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newVal}/>
        </div>
    )
  }
}

