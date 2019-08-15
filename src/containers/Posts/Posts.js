import React, { Component } from 'react';
import axiosInstance from '../../axios';
import {Route} from 'react-router-dom';
import './Posts.css';

import Post from './../../components/Post/Post';
import FullPost from './../FullPost/FullPost';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props);
        axiosInstance.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Cele'
                    }
                });
                this.setState({
                    posts: updatedPosts
                })
            })
            .catch(err => {
                console.log(err);
                // this.setState({
                //     error: true
                // })
            });
    }

    postSelectedHandler = (id) => {
       this.props.history.push({
           pathname: '/posts/' + id
       });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                // <Link to={'posts/' + post.id} key={post.id}>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                ></Post>
                // </Link>
                )
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} ></Route>
            </div>
        )
    }
}

export default Posts;