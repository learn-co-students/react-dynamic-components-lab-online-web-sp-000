import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={this.props.opacity}>
        {/* your conditional code here! */}
      </div>
    )
  }

}

