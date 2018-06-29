// this will fetch User's persisted categories. fetchAllCategories() will only trigger when a new user is created.

export function fetchSavedCategories(userId) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/users/${userId}`)
      .then(resp => resp.json())
      .then(user => dispatch({ type: 'FETCH_USER_CATEGORIES', savedCategories: user.categories }));
  };
}

// below will fetch to local API in order to make Material UI chips.

export function fetchAllCategories() {
  return (dispatch) => {
    return fetch('http://localhost:3001/categories')
      .then(resp => resp.json())
      .then(categories => {
        // debugger;
        dispatch({ type: 'FETCH_ALL_CATEGORIES', categories: categories })
      })
  }
}

export function saveCategory(userId, categoryId) {

}

// fetch stories from each category from News API.
