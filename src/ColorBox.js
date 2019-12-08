import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    // console.log(this.props.opacity)
    
    if (this.props.opacity >= 0.2) {
      // console.log(this.props.opacity);
      // console.log('wtf is going on?')
      console.log(this.props.opacity - 0.1);
      return ( 
        <div className="color-box" style={{opacity: this.props.opacity}}>
          {/* {this.props.opacity - 0.1} */}
          <ColorBox opacity={this.props.opacity - 0.1} />
          {/* fuck */}
        </div>
      )
    } else {
      // console.log('i eval to null')
      return null;
    }
    // return (

    //   <div className="color-box" style={{opacity: 2}}>
    //     {if (this.props.opacity >= .2) {<ColorBox opacity={this.props.opacity - .1}/>}
    //     else {

    //     }}
        
    //   </div>
    // )
  }

}
