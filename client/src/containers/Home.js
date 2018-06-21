import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchStories } from '../actions/stories';
import StoryCard from './StoryCard';
import Grid from '@material-ui/core/Grid';
import HoverCard from '../components/HoverCard';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      stories: [],
    }
  }

  componentDidMount() {
    this.props.fetchStories();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    const storyCards = this.props.stories.map((story, idx) => <StoryCard key={idx} story={story} />);

    return ([
      <div>
        <h3>Enter your username: </h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>,
      <div className="homepage">
        <h1>U.S. Top Headlines</h1>
        <Grid container className="story-grid" spacing={8}>
          {storyCards}
        </Grid>
      </div>
    ])
  }
};

function mapDispatchToProps(dispatch) {
  // bindActionCreators({fetchStories: fetchStories, dispatch});
  // why don't we need this?
}

function mapStateToProps(state) {
  return {username: state.username, stories: state.stories}
}

export default connect(mapStateToProps, {fetchStories: fetchStories, saveStory: saveStory})(Home);
