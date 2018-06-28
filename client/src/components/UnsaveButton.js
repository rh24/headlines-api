import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const UnsaveButton = (props) => {
  return (
    <div className="favorite">
      <Button onClick={(event) => props.handleRemove(event)}>Remove Story</Button>
    </div>
  )
}

export default UnsaveButton;
