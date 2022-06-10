import React, { Component } from "react";
import Post from "../Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: false,
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => this.setState({ posts: data, error: false }));
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch() {
    this.setState({
      posts: [],
      error: true,
    });
  }

  render() {
    const post = new Post();
    return (
      <div>
        <i>
          <u>Posts </u>
        </i>
        {this.state.posts.length ? (
          this.state.posts.map((item) => {
            post.id = item.id;
            post.title = item.title;
            post.body = item.body;
            return (
              <div key={item.id}>
                <b>Id:</b>
                <span> {post.id}</span>
                <br></br>
                <b>Title:</b>
                <span> {post.title}</span>
                <br></br>
                <b>Body:</b>
                <span> {post.body}</span>
                <hr></hr>
              </div>
            );
          })
        ) : (
          <h1>No posts fetched</h1>
        )}
      </div>
    );
  }
}

export default Posts;
