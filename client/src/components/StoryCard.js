// StoryCard is basically a headlines card but styled to be bigger than a <HeadlinesCard />, which is a child of the <LocationCard /> component.
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StoryCard = (props) => {
  return (
    <Grid container className="story-cards" spacing={8}>
      <Grid item xs={12}>
        <Card>
          {props.story.urlToImage}
          {props.story.title}
        </Card>
      </Grid>
    </Grid>
  )
}

export default StoryCard;
