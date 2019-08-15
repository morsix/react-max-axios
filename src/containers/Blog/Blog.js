import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect }from 'react-router-dom';

import './Blog.css';
import Posts from './../Posts/Posts';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923a',
                                    textDecoration: 'underline'
                                }}
                                >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}></Route> */}
                <Switch>
                    <Route path="/new-post" component={NewPost} ></Route>
                    <Route path="/posts" component={Posts} ></Route>
                    <Redirect from='/' to='/posts'></Redirect>
                    {/* <Route path="/" component={Posts} ></Route> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;