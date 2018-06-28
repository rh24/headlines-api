export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_ALL_CATEGORIES":
      return action.categories;
    default:
      return state;
  }
}
