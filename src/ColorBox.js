import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
      const newValue = this.props.opacity
      return newValue < .2 ? null:(
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity = {this.props.opacity - .1} />
        </div>
      )
    }

}
