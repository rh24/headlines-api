export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_ALL_CATEGORIES":
      return action.categories;
    case "FETCH_USER_CATEGORIES":
      return action.savedCategories;

      // anything can be paseed in from the action object, but when accessing the state, the returned data displays in components as `state.categories` due to how it's set up in the rootReducer.
      
    default:
      return state;
  }
}
