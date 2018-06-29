// StoryCard is basically a headlines card but styled to be bigger than a <HeadlinesCard />, which is a child of the <LocationCard /> component.
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import HoverCard from '../components/HoverCard';
import SaveButton from '../components/SaveButton';
import { saveStory, removeStory } from '../actions/stories';
import { connect } from 'react-redux';

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
};

class StoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mousedOver: false,
    }
  }

  handleClick = () => {
    openInNewTab(this.props.story.url);
  }

  handleMouseOver = () => {
    this.setState({
      mousedOver: !this.state.mousedOver,
    });
  }

  // Use the below method to post to local API.
  handleSave = (event) => {
    event.stopPropagation();
    this.props.saveStory(this.props.username, this.props.userId, this.props.story);
  }

  handleRemove = (event) => {
    event.stopPropagation();
    this.props.removeStory(this.props.story.id, this.props.user.id);
  }

  render() {
    const { urlToImage, title, url, source, description, publishedAt, author } = this.props.story;

    const renderCard = () => {
      if (this.state.mousedOver) {
        return (
          <HoverCard
          story={this.props.story}
          handleSave={(event) => this.handleSave(event)}
          handleRemove={(event) => this.handleRemove(event)}
          saved={this.props.saved} />
        );
      } else {
        return ([
          <CardMedia
          style={styles.media}
          image="card-image"
          key="image">
            <img src={urlToImage} />
          </CardMedia>,
          <CardContent key="content">
            <Typography gutterBottom variant="headline" component="h2">
              {title}
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

function mapDispatchToProps(dispatch) {}

export default connect(null, {saveStory, removeStory})(StoryCard);
