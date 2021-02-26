import TYPES from '../types/userTypes';

function tasksReducer(state = {}, action) {
  switch (action.type) {
    case TYPES.ADD_USER:
      return {
        ...state,
        user: action.body,
      };
    case TYPES.SET_USERAUTH:
      return {
        ...state,
        auth: action.body,
      };
    default:
      return state;
  }
}

export default tasksReducer;
