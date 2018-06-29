import React from 'react';
import Chip from '@material-ui/core/Chip';

const CategoryChip = (props) => {
  const { username, id } = props.user;
  // props.id is the category's id as indicated in Rails API. This is passed down from the `const categoryChips` in the `<CategoryNav />` parent component.

  return (
    <Chip id={props.key}
    label={props.name}
    user={props.user}
    onDelete={() => props.handleDelete()}
    onClick={() => props.handleClick(props.user, props.id)} />
  )
}

export default CategoryChip;
