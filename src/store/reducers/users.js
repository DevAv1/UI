import { GET_DATA } from '../actions/action-types';

const initialState = {
  data : []
}

export const users = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.users
      }
    default:
      return state;
  }
}
