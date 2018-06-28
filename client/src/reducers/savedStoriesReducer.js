export default function savedStoriesReducer(state = [], action) {
  switch (action.type) {
    case "ADD_STORY":
      return [...state, action.stories];
    default:
      return state;
  }
}
