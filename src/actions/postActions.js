// Database collections
import { postsRef } from '../config/firebase';


// Types of actions
import { FETCH_POSTS } from './types';

// Asynchronous call to GET posts
export const fetchPosts = () => async dispatch => {
  postsRef.on("value", snapshot => {
    let data = snapshot.val();
    let posts = [];
    for(var k in data) {

      let post = {
        id: k,
        body: data[k].body
      };
      posts.push(post)
    };

    dispatch({
      type: FETCH_POSTS,
      payload: posts
    })

  });
};

// Asynchronous call to POST posts
export const createPost = postData => async dispatch => {
  postsRef.push().set(postData);
};

export const deletePost = deletePostId => async dispatch => {
  postsRef.child(deletePostId).remove();
};
