import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchStories } from '../actions/stories';
import StoryCard from '../components/StoryCard';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: []
    }
  }

  handleClick() {
    // event.preventDefault();
    console.log('hi')
    // debugger;
    openInNewTab(this.props.story.url)
  }

  componentDidMount() {
    this.props.fetchStories();
    // debugger;
  }

  render() {
    const storyCards = this.props.stories.map((story, idx) => <StoryCard key={idx} story={story} handleClick={this.handleClick.bind(this)} />)
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

function openInNewTab(url) {
  let win = window.open(url, '_blank');
  win.focus();
}

function mapDispatchToProps(dispatch) {
  // bindActionCreators({fetchStories: fetchStories, dispatch});
  // why don't we need this?
}

function mapStateToProps(state) {
  return {stories: state.stories}
}

export default connect(mapStateToProps, {fetchStories})(Home);
