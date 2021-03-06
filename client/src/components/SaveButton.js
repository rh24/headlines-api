import React, { Component } from 'react';
// import Coffee from 'mdi-material-ui/coffee';
import Button from '@material-ui/core/Button';

const SaveButton = (props) => {
  return (
    <div className="favorite">
      <Button onClick={(event) => props.handleSave(event)}>Save Story</Button>
    </div>
  )
}

export default SaveButton;
