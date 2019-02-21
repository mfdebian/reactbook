import React, { Component } from 'react';

/**
 * Posts
 */
class Posts extends Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        // 'State' is a javascipt object containing our Posts array
        this.state = {
            posts: []
        }
    }

    // When component 'starts' (i.e mount) it'll fetch (GET) posts
    // TODO: Replace fake JSON posts for Firebase database Posts
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=> res.json())
            .then(data => this.setState({ posts: data }));
    }

  render() {
    // We'll show posts in postItems
    const postItems = this.state.posts.map(post => (
        <div key ={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>{post.userId}</p>
        </div>
    ));

    return (
      <div>
        <h1> Posts </h1>
        { postItems }
      </div>
    );
  }
}

// Posts.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default Posts;
