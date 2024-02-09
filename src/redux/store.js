import { combineReducers, createStore,} from 'redux';
import usersReducer from './user/usersReducer';

const rootReducer = combineReducers({
  user: usersReducer,
});

const store = createStore(
  rootReducer
);

export default store;