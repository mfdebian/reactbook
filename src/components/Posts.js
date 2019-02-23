import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux libraries
import { connect } from 'react-redux';

// Actions
import { fetchPosts, deletePost } from '../actions/postActions';

/**
* Posts
*/
class Posts extends Component { // eslint-disable-line react/prefer-stateless-function

  // Get posts when component is initiated
  componentWillMount() {
    this.props.fetchPosts();
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  };

  // Delete post handler
  handleDeletePost = deletePostId => {
    const { deletePost } = this.props;
    deletePost(deletePostId);
  };

  render() {
    // We'll show posts in postItems
    const postItems = this.props.posts.map(post => (
      <div key ={post.id}>
        <p>{post.body}</p>
        <button
          type="submit"
          onClick = {() => this.handleDeletePost(post.id)}
        > Delete post </button>
      </div>

    ));

    return (
      <div>
        <h1> Posts </h1>
        { postItems }
        <br />
      </div>
    );
  }

}

// Component's properties types
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
};

// Get (map) items from state from redux to props of the Posts component
// state.posts name comes from rootReducer's postReducer
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);
