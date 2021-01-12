
import React, { Component } from 'react'
import BlogPost from './BlogPost'

export default class Comment extends 
    React.Component {
        render() {
            return (
                <div>
                    <BlogPost className= {
                        "comment"
                    }/>
                </div>
            )
        }
    }
