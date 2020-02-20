import React, { Component } from 'react';

import Posts from '../Blog/Posts/Posts';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import { Route,NavLink, Switch, Redirect } from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent'
// import NewPost from './NewPost/NewPost'
const asyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})
class Blog extends Component {
    
   state = {
       auth: true
   }
    
    render () {
        
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to='/posts/' 
                            exact
                            activeClassName='my-active'
                            activeStyle={{color: '#fa923f', textDecoration:'underline'}}>Posts</NavLink></li>
                            
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
                { this.state.auth ? <Route path='/new-post' component={ asyncNewPost } /> : null }
                <Route path='/posts' component={Posts} />
                <Route render={() => <h1>page not found</h1>} />
                {/* <Redirect from='/' to='/posts' /> */}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;