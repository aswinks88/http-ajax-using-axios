import React, { Component } from 'react';

import Posts from '../Blog/Posts/Posts';
import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route,NavLink, Switch } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
class Blog extends Component {
    
   
    
    render () {
        
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to='/' 
                            exact
                            activeClassName='my-active'
                            activeStyle={{color: '#fa923f', textDecoration:'underline'}}>Home</NavLink></li>
                            <li><NavLink to={{pathname: '/new-post', 
                            hash:'#submit', 
                            search: '?submit=true'}}> New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts/> */}
                {/* <Route path='/' exact render={()=><h1>Home</h1>}/>
                <Route path='/' render={()=><h1>Home 1</h1>}/> */}
                <Switch>
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' exact component={NewPost} />
                <Route path='/:id' component={FullPost}/>
                </Switch>
                
            </div>
        );
    }
}

export default Blog;