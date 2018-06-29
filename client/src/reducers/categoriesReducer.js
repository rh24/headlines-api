export default function categoriesReducer(state = {
  categories: [],
  savedCategories: [],
}, action) {
  switch (action.type) {
    case "FETCH_ALL_CATEGORIES":
      return Object.assign({}, state, {categories: action.categories});
    case "FETCH_USER_CATEGORIES":
      return Object.assign({}, state, {savedCategories: action.savedCategories});

      // anything can be passed in from the action object, but when accessing the state, the returned data displays in components as `state.categories` due to how it's set up in the rootReducer. If you want to access the keys in the state object after mapping state to props, it must be like so: `state.categories.categories`.
    case "SAVE_CATEGORY":
      return Object.assign({}, state, {savedCategories: [...state.savedCategories, action.category]});
    default:
      return state;
  }
}

// where should the "FETCH_CATEGORY_STORIES" action go?
