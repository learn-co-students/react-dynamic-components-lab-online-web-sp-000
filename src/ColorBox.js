import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newOpacity = this.props.opacity * 10;
    if (newOpacity >= 2) {
      return (
        <div className="color-box" style={{opacity:this.props.opacity}}>
          <ColorBox opacity={(newOpacity - 1) / 10} />
        </div>
      )
    } else {return null}
  }

}

