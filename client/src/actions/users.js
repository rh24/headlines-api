import fetch from 'isomorphic-fetch';

export function fetchUserStories(userId) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/users/${userId}`)
      .then(resp => resp.json())
      .then(userArray => userArray.find((user) => user.id === userId))
      .then(user => dispatch({ type: 'FETCH_USER_STORIES', stories: user.stories }))
  }
}

export function createUser(username) {
  const args = {
    method: 'POST',
    mode: 'cors',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: username})
  };

  return (dispatch) => {
    return fetch(`http://localhost:3001/users/`, args)
      .then(resp => resp.json())
      .catch(error => console.log(error))
      .then(user => dispatch({ type: 'SUGGEST_CATEGORIES', user: user }))
  }
}
