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
      const category = action.category;
      debugger;
      return Object.assign({}, state, { category: action.categoryStories });
    default:
      return state;
  }
}
