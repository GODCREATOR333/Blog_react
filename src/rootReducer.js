// rootReducer.js

import { combineReducers } from 'redux';
import firebaseReducer from './firebaseReducer'; // Import your firebase reducer

const rootReducer = combineReducers({
  firebaseIDs: firebaseReducer, // Assuming firebaseIDs is managed by firebaseReducer
  // Add more reducers here if you have them
});

export default rootReducer;
