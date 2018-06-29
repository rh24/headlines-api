import React from 'react';
import IconButton from 'material-ui/IconButton';
import Heart from 'mui-icons/cmdi/heart';

const HeartButton = (props) => {
  return (
    <IconButton>
      <Heart onClick={(event) => props.handleSave(event)}/>
    </IconButton>
  )
}

export default HeartButton;
