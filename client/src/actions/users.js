import fetch from 'isomorphic-fetch';

export function fetchUser(username) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/users/`)
      .then(resp => resp.json())
      .then(json => json.filter((user, idx) => user.username === username))
      .then(user => {
        if (user.length !== 0) {
          return dispatch({ type: 'FETCH_USER_STORIES', user });
        } else {
          return "no match.";
        }
      })
  }
}

export function fetchUserStories(userId) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/users/${userId}`)
      .then(resp => resp.json())
      .then(user => dispatch({ type: 'FETCH_USER_STORIES', stories: user.stories })
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
    // debugger;
    return fetch(`http://localhost:3001/users/`, args)
      .then(resp => resp.json())
      .catch(error => console.log(error))
      .then(json => json.find((user, idx) => user.username === username))
      .then(user => dispatch({ type: 'SUGGEST_CATEGORIES', user }))
  }
}
