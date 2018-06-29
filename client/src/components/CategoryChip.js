import React from 'react';
import Chip from '@material-ui/core/Chip';

const CategoryChip = (props) => {
  return (
    <Chip id={props.id}
    label={props.name}
    onDelete={() => props.handleDelete()}
    onClick={() => props.handleClick(props.id)} />
  )
}

export default CategoryChip;
