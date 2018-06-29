export default function categoryStoriesReducer(state = {
  business: [],
  entertainment: [],
  general: [],
  health: [],
  science: [],
  sports: [],
  technology: []
}, action) {
  switch (action.type) {
    case "FETCH_CATEGORY_STORIES":
      // debugger;
      for (let category in state) {
        if (category === action.category) {
          state[`${action.category}`] = action.categoryStories;
        }
      }

      return { ...state };
    default:
      return state;
  }
}
