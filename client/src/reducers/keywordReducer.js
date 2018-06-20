export default function keywordReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_BY_KEYWORD':
      return action.searchedStories;
    default:
      return state;
  }
}
