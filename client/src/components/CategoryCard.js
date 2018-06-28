// <CategoryCard /> should have the name of the category lining the top of each card
// Children <HeadlineCard />.
import React from 'react';
import Card from '@material-ui/core/Card';
import HeadlineCard from './HeadlineCard';

const CategoryCard = (props) => {
  const styles = {
    list: {
      overflow: 'auto'
    },
    listItem: {
      maxHeigt: 200,
      maxWidth: 600,
      paddingTop: '3px',
      paddingBottom: '3px',
      paddingRight: '5px',
      paddingLeft: '5px'
    }
  }

  return (
    <Card
      style={styles.list}>
    </Card>
  )
}
