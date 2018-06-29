import React from 'react';
import Chip from '@material-ui/core/Chip';

const CategoryChip = (props) => {
  const handleDelete = () => {
    console.log('bye')
  };

  return (
    <Chip id={props.id}
    label={props.name}
    onDelete={() => handleDelete()}
    onClick={() => props.handleClick()}/>
  )
}

export default CategoryChip;
