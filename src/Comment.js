//your code here
import React, { Component } from 'react';
import BlogPost from './BlogPost';

export default class Comment extends Component {

  render() {
    return (
      <div className="comment" style={{opacity: null /*replace null with the value*/}}>
        {this.props.commentText}
      </div>
    )
  }
}
