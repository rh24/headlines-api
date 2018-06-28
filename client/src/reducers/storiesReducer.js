export default function storiesReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_TOP_STORIES':
      return action.stories;
    default:
      return state;
  }
}
