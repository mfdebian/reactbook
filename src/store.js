// Redux libraries
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// compose will be used for multiple 'enhancers'
// including the one for Firefox's Redux extension
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
