import React from 'react';
import Card from '@material-ui/core/Card';

const HeadlineCard = (props) => {
  // const styles = {
  //   listItem
  // }
  return (
    <Card>
      <h1>{props.story.title}</h1>
    </Card>
  )
}

export default HeadlineCard;
