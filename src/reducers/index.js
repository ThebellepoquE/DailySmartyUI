import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import posts from './posts-reducer';

const rootReducer = combineReducers({
  form,
  posts,
  // Add your reducers here
});

export default rootReducer;