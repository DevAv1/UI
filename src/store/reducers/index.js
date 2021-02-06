import { combineReducers} from 'redux';
import { users } from './users';

export const reducers = () => {
  return combineReducers({
    users
  })
}
