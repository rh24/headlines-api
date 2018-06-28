import fetch from 'isomorphic-fetch';

export function fetchUserStories(user) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/users/${user.id}`)
      .then(resp => resp.json())
      .then(userArray => userArray.find((user) => user.id === user.id))
      .then(user => {
        if (!!user) {
          dispatch({ type: 'FETCH_USER_STORIES', stories: user.stories })
        } else {
          alert('please, type in username in homepage');
        }
      });
  };
}

export function fetchUser(username) {
  return (dispatch) => {
    return fetch(`http://localhost:3001/users`)
      .then(resp => resp.json())
      .then(userArray => userArray.find((user) => user.username === username))
      .then(user => {
        // debugger;
        if (!!user) {
          dispatch({ type: 'SET_USER_STATE', user: user });
        } else {
          createUser(username);
        }
      });
  };
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
    // this debugger never hits if I call createUser(username) from my fetchUser(username) function. It DOES hit if I put my fetchUser function direction into my submit handler in the Home component.

    return fetch(`http://localhost:3001/users/`, args)
      .then(resp => resp.json())
      .catch(error => console.log(error))
      .then(user => dispatch({ type: 'SET_USER_STATE', user: user }));
  };
}

export function resetUser() {
  return (dispatch) => {
    dispatch({ type: 'RESET_USER_STATE', user: {} });
  }
}
