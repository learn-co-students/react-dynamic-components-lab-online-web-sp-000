import React, { Component } from 'react';
// are we missing an import?
import Comment from './Comment.js';

export default class BlogPost extends Component {
    render() {

        const comments = [
          "When we speak we are afraid our words will not be heard or welcomed. But when we are silent, we are still afraid. So it is better to speak. - Audrey Lorde",
            "I am no longer accepting the things I cannot change. I am changing the things I cannot accept. - Angela Davis",
            "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway. It's easy to tell when a question is coming from a good place. Then listen some more. Sometimes people just want to feel heard. Here's to possibilities of friendship and connection and understanding. - Chimamanda Ngozi Adichie"
        ]

        return (
        <div id="blog-post" className="wrapper">
            Alright internet trolls<br/>
            Come at me<br/>
            I have been preparing<br/>
            My meme fortress is built<br/>
            I won't let you tilt me<br/>
            You only grew accustomed to the salt<br/>
            I was born in it<br/>
            <Comment commentText={comments[0]} />
            <Comment commentText={comments[1]} />
            <Comment commentText={comments[2]} />
        </div>
        );
    }
}
