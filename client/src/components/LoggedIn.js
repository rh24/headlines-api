import React from 'react';
import Button from '@material-ui/core/Button';

const LoggedIn = (props) => {
  // debugger;
  return ([
    <p>Logged in as {props.username}.</p>,
    <Button onClick={() => this.handleClick()}>
      Switch Account
    </Button>
  ]);
}

export default LoggedIn;