import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchStories } from '../actions/stories';
import StoryCard from './StoryCard';
import Grid from '@material-ui/core/Grid';
import HoverCard from '../components/HoverCard';
import Button from '@material-ui/core/Button';

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

  handleClick = () => {
    this.setState({
      username: '',
    })
  }

  render() {
    const storyCards = this.props.stories.map((story, idx) => <StoryCard key={idx} story={story} />);

    const logIn = () => {
      // Is there a way to do the below by mapping state to props?
      // Or is there some way I should intercept the username state value with a lifecycle method?
      // Is it best practice to map all state to props?
      if (this.state.username === '') {
        return ([
          <h3>Enter your username: </h3>,
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <input type="text" />
            <input type="submit" />
          </form>
        ])
      } else {
        return (
          <Button onClick={() => this.handleClick()}>
            Switch Account
          </Button>
        )
      }
    }

    return ([
      <div>
        { logIn() }
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

export default connect(mapStateToProps, {fetchStories})(Home);
