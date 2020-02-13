import React, { Component } from 'react';

import Posts from '../Blog/Posts/Posts';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import axios from 'axios'
class Blog extends Component {
    
   
    
    render () {
        
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts/>
            </div>
        );
    }
}

export default Blog;