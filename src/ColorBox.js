import React, { Component } from 'react';

class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {/* your conditional code here! */
          this.props.opacity < 0.2 ? null : <ColorBox opacity={this.props.opacity - 0.1} />
        }

      </div>
    )
  }

}

export default ColorBox;

