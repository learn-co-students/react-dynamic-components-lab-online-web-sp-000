// add Comment component here
import React from 'react'
export default function Comment(props){
    return (<div className="comment">
        {props.commentText}
    </div>)
}