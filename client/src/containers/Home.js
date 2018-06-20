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
      stories: []
    }
  }

  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const storyCards = this.props.stories.map((story, idx) => <StoryCard key={idx} story={story} />);

    return (
      <div className="homepage">
        <h1>This is my Homepage.</h1>
        <h4>Insert fetched stories from NewsAPI in grid card layout</h4>
        <Grid container className="story-grid" spacing={8}>
          {storyCards}
        </Grid>
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  // bindActionCreators({fetchStories: fetchStories, dispatch});
  // why don't we need this?
}

function mapStateToProps(state) {
  return {stories: state.stories}
}

export default connect(mapStateToProps, {fetchStories})(Home);
