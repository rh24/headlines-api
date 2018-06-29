import React from 'react';
import Chip from '@material-ui/core/Chip';

const CategoryChip = (props) => {
  const { username, id } = props.user;
  // Passed down from parent component `<CategoryNav />`
  // props.category = {id: 1, name: "business"};

  return (
    <Chip
    id={props.id}
    label={props.category.name}
    user={props.user}
    onDelete={() => props.handleDelete()}
    onClick={() => props.handleClick(props.user, props.category)} />
  )
}

export default CategoryChip;
