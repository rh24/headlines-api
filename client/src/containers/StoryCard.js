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
import HoverCard from '../components/HoverCard';

const styles = {
  contentBackground: {
    color: 'white',
  },
  card: {
    height: 400,
    width: 400,
    display: 'block'
  },
  media: {
    height: 200,
    width: 200,
  },
  link: {

  }
};

class StoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mousedOver: false,
    }
  }

  handleClick = () => {
    openInNewTab(this.props.story.url)
  }

  handleMouseOver = () => {
    this.setState({
      mousedOver: !this.state.mousedOver,
    })
  }

  render() {
    // const { classes } = this.props;
    const { urlToImage, title, url, source, description, publishedAt, author } = this.props.story;
    let card;

    const renderCard = () => {
      if (this.state.mousedOver) {
        return (
          <HoverCard story={this.props.story} />
        );
      } else {
        return ([
          <CardMedia
          style={styles.media}
          image={urlToImage}>
            <img src={urlToImage} />
          </CardMedia>,
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        ]);
      }
    };

    return (
      <Grid item>
        <Card
        style={styles.card}
        onClick={() => this.handleClick()}
        onMouseEnter={() => this.handleMouseOver()}
        onMouseLeave={() => this.handleMouseOver()}>
          { renderCard() }
        </Card>
      </Grid>
    );
  }
}

function openInNewTab(url) {
  let win = window.open(url, '_blank');
  win.focus();
}

// StoryCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(StoryCard);
