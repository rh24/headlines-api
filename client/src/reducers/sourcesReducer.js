export default function sourcesReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_SOURCES':
      return action.sources;
    default:
      return state;
  }
}
