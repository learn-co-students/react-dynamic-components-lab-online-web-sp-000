import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const boxOpacity = this.props.opacity
    return (
      <div className="color-box" style={{opacity: boxOpacity}}>
        {boxOpacity >= 0.2 ? <ColorBox opacity={boxOpacity-0.1}/> : null}
      </div>
    )
  }

}

