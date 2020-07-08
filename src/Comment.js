import React,{ Component} from 'react'
// import Comment from './Comment.js'

export default class CommentComponent extends Component{
render(){
    return(
        <div className="comment"> 
        {this.props.commentText} //props from here are taken from BlogPost comment 
        </div>
  )
}



}