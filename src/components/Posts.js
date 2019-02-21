import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Redux libraries
import { connect } from 'react-redux';

// Actions
import { fetchPosts } from '../actions/postActions';

/**
* Posts
*/
class Posts extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    // We'll show posts in postItems
    const postItems = this.props.posts.map(post => (
      <div key ={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
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

// Component's properties types
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired
};

// Get (map) items from state from redux to props of the Posts component
// state.posts name comes from rootReducer's postReducer
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
