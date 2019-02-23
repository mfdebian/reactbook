import { FETCH_POSTS } from '../actions/types';

const initialState = {
  // items represents the posts and item represents a single post
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch(action.type) {

    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state;
  }
}
