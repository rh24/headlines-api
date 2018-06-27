import fetch from 'isomorphic-fetch';

export function fetchUser(username) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/users/`)
      .then(resp => resp.json())
      .then(json => json.filter((user, idx) => user.username === username))
      .then(user => user === null ? createUser(username) : user)
      .then(user => dispatch({ type: 'FETCH_USER_STORIES', user }))
  }
}

export function createUser(username) {
  let cors = require('cors');
  const args = {
    method: 'POST',
    mode: 'cors',
    headers: {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Credentials':true,
    // 'Access-Control-Allow-Methods':'POST, GET',
    // 'Access-Control-Request-Method': 'POST',
    // 'Access-Control-Max-Age': 0,
    Accept: 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: username})
  };

  return (dispatch) => {
    return fetch(`http://localhost:3001/users/`, args)
      .then(resp => resp.json())
      .catch(error => console.log(error))
      .then(json => json.find((user, idx) => user.username === username))
      .then(user => console.log(user))
  }
}
