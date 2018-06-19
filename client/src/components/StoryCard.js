// StoryCard is basically a headlines card but styled to be bigger than a <HeadlinesCard />, which is a child of the <LocationCard /> component.
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class StoryCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Grid container className="story-cards">
        Title: {this.props.story.title}
      </Grid>
    )
  }
}

export default StoryCard;
