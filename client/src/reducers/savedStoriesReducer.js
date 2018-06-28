export default function savedStoriesReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_USER_STORIES":
      return action.savedStories;
    case "ADD_STORY":
      return [...state, action.stories];
    case "REMOVE_STORY":
      const stories = state.filter((story, idx) => story.id !== action.story.id)
      return [...stories];
    case 'UPDATE_USER_STORIES':
      console.log("i'm being updated");
      // debugger;
      return [...state, action.stories];
    default:
      return state;
  }
}
