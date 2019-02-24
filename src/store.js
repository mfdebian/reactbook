// Redux libraries
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// Firefox's devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// composeEnhancers will be used for multiple 'enhancers'
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export default store;
