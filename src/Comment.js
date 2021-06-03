//your code here
import React, { Component } from 'react';
 
export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
         {this.props.commentText}
        {/* <Comment articleText={"Dear Reader: Bjarne Stroustrup has the perfect lecture oration."}/> */}
        
      </div>
    )
  }
}