import React from 'react';
import Chip from '@material-ui/core/Chip';

const CategoryChip = (props) => {
  return (
    <Chip key={props.key}
    label={props.name} />
  )
}

export default CategoryChip;
