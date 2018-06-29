import React from 'react';
import Chip from '@material-ui/core/Chip';

const CategoryChip = (props) => {
  const { username, id } = props.user;
  return (
    <Chip id={props.id}
    label={props.name}
    user={props.user}
    onDelete={() => props.handleDelete()}
    onClick={() => props.handleClick(props.user, props.name)} />
  )
}

export default CategoryChip;
