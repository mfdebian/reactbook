// Redux libraries
import { combineReducers } from 'redux';

// Post reducer
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer
});
