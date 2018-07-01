import React from 'react';
import IconButton from 'material-ui/IconButton';
import Delete from 'mui-icons/cmdi/trash';

const TrashButton = (props) => {
  return (
    <IconButton>
      <Delete onClick={(event) => props.handleRemove(event)}/>
    </IconButton>
  )
}

export default TrashButton;
