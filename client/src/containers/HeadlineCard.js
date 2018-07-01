import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import HeartButton from '../components/HeartButton';
import TrashButton from '../components/TrashButton';
import { saveStory, removeStory } from '../actions/stories';
import { connect } from 'react-redux';

class HeadlineCard extends React.Component {
  constructor(props) {
    super(props);
  }

  openHeadline = (story) => {
    function openInNewTab(url) {
      let win = window.open(url, '_blank');
      win.focus();
    }

    openInNewTab(story.url);
  };

  // Saves an article to user.stories
  handleSave = (event, story = null) => {
    event.stopPropagation();
    console.log('save me!')
    const { user } = this.props;

    this.props.saveStory(user.username, user.id, story);
  }

  // Removes a story from user.stories
  handleRemove = (event, story = null) => {
    event.stopPropagation();
    console.log('bye story')
    this.props.removeStory(story.id, this.props.user.id);
    this.setState({
      saved: false,
    })
  }

  render() {
    const { story } = this.props;

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
        paddingLeft: '5px'
      },
      heart: {
        justify: 'flex-end',
        hoverColor: 'red'
      }
    };

    const renderIcon = () => {
      if (this.props.savedStories.find((savedStory) => savedStory.title === story.title)) {
        return (
          <TrashButton handleRemove={(event) => this.handleRemove(event, story)} />
        );
      }

      return (
        <HeartButton style={styles.heart} handleSave={(event) => this.handleSave(event, story)} />
      );
    };

    return (
      <Grid item style={styles.listItem}>
        <Card
          onClick={() => this.openHeadline(story)}>
          <h3>{story.title}</h3>
          { renderIcon() }
        </Card>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return ({user: state.user})
}

function mapDispatchToProps(dispatch) {}

// justify doesn't seem to change alignment of component.

// When a headline is 'hearted', the story will be persisted to my user.stories.
// When a headline is 'trashed', the story will be DELETE'd from user.stories.

export default connect(null, {saveStory, removeStory})(HeadlineCard);
