import { GET_DATA } from '../actions/action-types';
import { getUsersData } from '../services/mock.api';

export const getUsersAction = () => {
  return async (dispatch) => {
    try {
      const users = await getUsersData();
      dispatch({
        type: GET_DATA,
        users
      })
    } catch {

    }
  }
}