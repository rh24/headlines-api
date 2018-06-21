// <StoryDashboard /> will be a stateful class component.
// <StoryCard /> will be a child, stateless functional/presentation component.
import React from 'react';
import { fetchSavedStories } from '../actions/stories';
import { connect } from 'react-redux';
import StoryCard from './StoryCard';
import Grid from '@material-ui/core/Grid';
import HoverCard from '../components/HoverCard';

class StoryDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      savedStories: []
    }
  }

  render() {
    return (
      <div className="story-dashboard">
        <h1>Saved Stories</h1>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {}

function mapStateToProps(state) {
  return {savedStories: state.savedStories}
}

export default connect(mapStateToProps, {fetchSavedStories})(StoryDashboard);
