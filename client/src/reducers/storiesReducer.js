export default function fetch(state = [], action) {
  switch (action.type) {
    case 'FETCH_STORIES':
    // debugger;
    // console.log(action.stories)
      return action.stories;
    default:
      return state;
  }
}
