export function fetchUser(username) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/users`)
      .then(resp => resp.json())
      .then(json => json.filter((user, idx) => user.username === username))
      .then(user => dispatch({ type: 'FETCH_USER_STORIES', user }))
  }
}

export function createUser(username) {
  const args = {
    method: 'POST'
  };

  return (dispatch) => {
    return fetch(`http://localhost:3000/users`, args)
      .then(resp => resp.json())
      // .then(json => json.filter((user, idx) => user.username === username))
      // .then(user =>)
  }
}
