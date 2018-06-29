import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const CategoryCardTitle = (props) => {
  debugger;
  return (
    <CardContent>
      <Typography>
        <h1>{props.name}</h1>
      </Typography>
    </CardContent>
  )
}

export default CategoryCardTitle;
