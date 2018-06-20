// StoryCard is basically a headlines card but styled to be bigger than a <HeadlinesCard />, which is a child of the <LocationCard /> component.
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 345,
    display: 'block'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  contentBackground: {
    color: 'white',
  },
  link: {

  }
};

const StoryCard = (props) => {
  const { classes } = props;
  // debugger;

  return (
    <Grid item>
      <Card
      style={styles.card}
      onClick={() => props.handleClick}>
        <CardMedia
        style={styles.media}
        image={props.story.urlToImage}>
          <img src={props.story.urlToImage} />
        </CardMedia>
        <CardContent
        style={styles.contentBackground}>
          <Typography gutterBottom variant="headline" component="h2">
            {props.story.title}
          </Typography>
          <Typography component="p">
            {props.story.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

// StoryCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(StoryCard);
