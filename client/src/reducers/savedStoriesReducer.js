export default function savedStoriesReducer(state = [], action) {
  switch (action.type) {
    case "ADD_STORY":
      return [...state, action.stories];
    case 'UPDATE_USER_STORIES':
      console.log("i'm being updated");
      debugger;
      return [...state, action.stories];
    default:
      return state;
  }
}
