import React, {Component} from 'react';


export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}







// export default class ColorBox extends Component {

//   state = {
//     todos: [

//     ]
//   }

//   render() {
//     return (
//       <div className="color-box" style={{opacity: null /*replace null with the value*/}}>
//         {/* your conditional code here! */}
//       </div>
//     )
//   }

// }
