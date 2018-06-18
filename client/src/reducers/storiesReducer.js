export default function fetch(state = [], action) {
  switch (action.type) {
    case 'FETCH_STORIES':
      return action.stories;
    default:
      return state;
  }
}
