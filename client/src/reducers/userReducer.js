export default function userReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_USER_STATE':
      return action.user;
    default:
      return state;
  }
}
