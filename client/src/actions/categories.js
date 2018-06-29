const apiKey = '7b48baa7e48541b9af219e981533d442';

export function fetchSavedCategories(userId) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/users/${userId}`)
      .then(resp => resp.json())
      .then(user => dispatch({ type: 'FETCH_USER_CATEGORIES', savedCategories: user.categories }));
  };
}

export function fetchCategoryStories(user, category) {
  return (dispatch) => {
    return fetch(`https://newsapi.org/v2/top-headlines?category=${category.name}&pageSize=50&country=us&apiKey=${apiKey}`)
      .then(resp => resp.json())
      .then(json => json.articles)
      .then(stories => dispatch({ type: 'FETCH_CATEGORY_STORIES', category: category.name, categoryStories: stories, user: user }))
  }
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

export function saveCategory(user, category) {
  // e.g. arguments:
  // user = {id: 1, username: "rebe", stories: Array(2), categories: Array(0)}
  // categoryName = "1"
  // debugger;
  // This method needs to POST to categories that belong to a specific user.
  // user_category data needs to be created in the controller
  const args = {
    method: 'POST',
    mode: 'cors',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      category_id: category.id,
      user_id: user.id
    })
  };

  return (dispatch) => {
    // I was going to post to user_categories because I've already seeded the db with all the categories my app will ever have. `/users/:id` will show which categories users have saved based on the relatinoship it has with the join model data. However, I can't access the current user's id in my user_categories controller.
    return fetch(`http://localhost:3001/users/${user.id}/user_categories`, args)
      .then(resp => resp.json())
      .catch(error => console.log(error))
      .then(data => dispatch({ type: 'SAVE_CATEGORY', category: category }))
  };
}

// fetch stories from each category from News API.
