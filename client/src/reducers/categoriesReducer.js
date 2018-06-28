export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case "SUGGEST_FAVORITE_CATEGORIES":
      return action.categories;
    case "FETCH_ALL_CATEGORIES":
      return action.categories;
    default:
      return state;
  }
}
