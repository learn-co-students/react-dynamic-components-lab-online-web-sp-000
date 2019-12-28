//your code here
import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

class Comment extends Component {

  render() {
    return (
      <div className="comment" style={{opacity: 2}}>
        {this.props.commentText}
      </div>
    )
  }
}

export default Comment
