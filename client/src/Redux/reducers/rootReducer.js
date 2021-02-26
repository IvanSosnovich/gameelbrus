import { combineReducers } from 'redux';
import userReducer from './userReduser';
import questionreducer from './questionReducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: userReducer,
  question: questionreducer,
});

export default rootReducer;
