import React, { Component } from 'react';

export default class Comment extends React.Component {
    render() {
    return <p className="comment">{ this.props.commentText }</p>
    }

}
