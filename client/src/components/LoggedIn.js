import React from 'react';
import Button from '@material-ui/core/Button';

const LoggedIn = (props) => {
  // debugger;
  return ([
    <p>Logged in as <strong>{props.username}</strong>.</p>,
    <Button onClick={() => this.handleClick()}>
      Switch Account
    </Button>
  ]);
}

export default LoggedIn;
