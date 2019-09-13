import React, { Component } from 'react';
export default class ColorBox extends Component {
  
  render() {
    //the passed opacity should be reduced by 0.1
    if (this.props.opacity >= 0.2) {
      const newOpacity = this.props.opacity - 0.1;
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newOpacity}/>
          {/*the opacity prop should be passed to the child*/}
        </div>
      )
    } else {
      return null;
    }
  }
  
}
