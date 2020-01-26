import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* your conditional code here! */}
        {/*if the opacity is greater than or equal to 0.2*/}
          {/*render another ColorBox, pass opacity to child, reduct opacity by 0.1*/}
          {/*otherwise, do NOT render another ColorBox and the return should be null*/}
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }

}

