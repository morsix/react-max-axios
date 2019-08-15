import React, { Component } from 'react';
import axiosInstance from '../../axios';

import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedpostId: null,
        error: false
    }

    componentDidMount() {
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
                this.setState({
                    error: true
                })
            });
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }

    render() {

        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                ></Post>
            })
        }


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Blog;