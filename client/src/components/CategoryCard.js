// <CategoryCard /> should have the name of the category lining the top of each card
// Children <HeadlineCard />.
import React from 'react';
import Card from '@material-ui/core/Card';
import HeadlineCard from './HeadlineCard';
import Grid from '@material-ui/core/Grid';
import CategoryCardTitle from './CategoryCardTitle';
import CardContent from '@material-ui/core/CardContent';

const CategoryCard = (props) => {
  const styles = {
    list: {
      overflow: 'auto'
    },
    listItem: {
      maxHeigt: 200,
      // maxWidth: 600,
      paddingTop: '3px',
      paddingBottom: '3px',
      paddingRight: '5px',
      paddingLeft: '5px',
      justify: 'center',
    }
  }

  const headlines = props.stories.map((story, idx) => <HeadlineCard key={idx} story={story} user={props.user} />);

  return (
    <div style={styles.listItem}>
      <Grid item>
        <Card
          style={styles.list}>
          <CardContent>
            <h1>{props.name}</h1>
          </CardContent>
          { headlines }
        </Card>
      </Grid>
    </div>
  )
}

export default CategoryCard;
