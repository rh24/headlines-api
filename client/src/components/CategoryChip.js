import React from 'react';
import Chip from '@material-ui/core/Chip';

const CategoryChip = (props) => {
  const handleDelete = () => {
    console.log('bye')
  };

  return (
    <Chip key={props.key}
    label={props.name}
    onDelete={() => handleDelete()} />
  )
}

export default CategoryChip;
