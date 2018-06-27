export default function fetch(state = [], action) {
  switch (action.type) {
    case 'FETCH_STORIES':
      return action.stories;
    case 'FETCH_USER_STORIES':
      console.log("i was properly fetched.");
      return action.stories || "This user has no stories saved.";
    default:
      return state;
  }
}
