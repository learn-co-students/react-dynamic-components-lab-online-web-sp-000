import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      const opacity = this.props.opacity; 
      opacity < 0.2 ? null : (
          <div className="color-box" style={{opacity: this.props.opacity}}>
              {<ColorBox opacity={this.props.opacity - 0.1} />}
          </div>
        )
    )
  }

}

