import React, { Component } from 'react';
import Coffee from 'mdi-material-ui/coffee';

const SaveButton = (props) => {
  return (
    <div className="favorite">
      <Coffee onClick={props.handleSave()} />
    </div>
  )
}

export default SaveButton;
