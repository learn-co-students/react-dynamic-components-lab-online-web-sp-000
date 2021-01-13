//your code here
import React from 'react'
// imports React, {Component} from 'react'

class Comment extends React.Component {
    // exports class so it can be used in other files
    render() {
        return (
            <div className ="comment">
                {this.props.commentText}
                {/* the single prop that's used in the component, which is passed in src/BlogPost.js */}
                {/* only one <div> in this render method, and the <div> has a class name attribute called "comment" */}
            </div>
        )
    }
}
export default Comment