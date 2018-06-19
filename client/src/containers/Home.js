import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchStories } from '../actions/stories';
import StoryCard from '../components/StoryCard';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: []
    }
  }

  // handleClick = (event) => {
  //   event.preventDefault();
  //   this.props.fetchStories();
  // }
  // onClick={(event) => this.handleClick(event)}

  componentDidMount() {
    this.props.fetchStories();
    // debugger;
  }

  render() {
    const storyCards = this.props.stories.map((story, idx) => <StoryCard key={idx} story={story} />)
    return (
      <div className="homepage">
        <h1>This is my Homepage.</h1>
        <h4>Insert fetched stories from NewsAPI in grid card layout</h4>
        {storyCards}
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
