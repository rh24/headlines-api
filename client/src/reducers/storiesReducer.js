export default function fetch(state = [], action) {
  switch (action.type) {
    case 'FETCH_STORIES':
      return action.stories;
    case 'FETCH_BY_KEYWORD':
    // debugger;
      return action.searchedStories;
    default:
      return state;
  }
}
