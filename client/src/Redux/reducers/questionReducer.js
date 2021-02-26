import TYPES from '../types/questionTypes';

function tasksReducer(state = [], action) {
  switch (action.type) {
    case TYPES.SAVE_QUESTIUON:
      return [...action.body];
    default:
      return state;
  }
}

export default tasksReducer;
