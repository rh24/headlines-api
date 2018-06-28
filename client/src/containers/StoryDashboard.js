// <StoryDashboard /> will be a stateful class component.
// <StoryCard /> will be a child, stateless functional/presentation component.
import React from 'react';
import { fetchUser, fetchUserStories } from '../actions/users';
import { connect } from 'react-redux';
import StoryCard from './StoryCard';
import Grid from '@material-ui/core/Grid';
import HoverCard from '../components/HoverCard';

class StoryDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      savedStories: []
      // the above is fetched from my localhost API.
    }
  }

  componentDidMount() {
    // debugger;
    this.props.fetchUserStories(this.props.user);
  }

  render() {
    const savedStories = this.props.savedStories.map((story, idx) => <StoryCard key={idx} story={story} />);
    // render log in if no user state.

    return (
      <div className="story-dashboard">
        <h1>Saved Stories</h1>
        {savedStories}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {}

function mapStateToProps(state) {
  return {savedStories: state.savedStories, user: state.user}
}

export default connect(mapStateToProps, {fetchUser, fetchUserStories})(StoryDashboard);
