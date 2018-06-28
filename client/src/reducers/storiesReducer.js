export default function storiesReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TOP_STORIES':
      return action.stories;
    case 'FETCH_USER_STORIES':
      // console.log("i was properly fetched.");
      // debugger;
      return action.stories;
    case 'UPDATE_USER_STORIES':
      console.log("i'm being updated");
      debugger;
      return [...state, action.stories];
    default:
      return state;
  }
}
