import { ADD_FIREBASE_ID } from './firebaseActions';

const initialState = {
  firebaseIDs: [],
};

const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIREBASE_ID:
      return {
        ...state,
        firebaseIDs: [...state.firebaseIDs, action.payload],
      };
    default:
      return state;
  }
};

export default firebaseReducer;
