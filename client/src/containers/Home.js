import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchStories } from '../actions/stories';
import { fetchUser, createUser } from '../actions/users';
import StoryCard from './StoryCard';
import Grid from '@material-ui/core/Grid';
import HoverCard from '../components/HoverCard';
import Button from '@material-ui/core/Button';
import LoggedIn from '../components/LoggedIn';

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
    let username;
    // username is value produced by form input, which is handled on change.
    // When is the state mapped to props? Does it happen on change as well?
    username = this.state.username;
    this.props.createUser(username);
  }

  handleClick = () => {
    this.setState({
      username: '',
    });
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  fetchUser = (username) => {
    this.props.fetchUser('username');
  }

  render() {
    const storyCards = this.props.stories.map((story, idx) => <StoryCard key={idx} story={story} />);

    const logIn = () => {
      if (!this.props.username) {
        return ([
          <h3 key="heading">Enter your username: </h3>,
          <form
            key="login"
            onSubmit={(event) => this.handleSubmit(event)}>
              <input
                type="text"
                name="user[username]"
                onChange={(event) => this.handleChange(event)} />
              <input type="submit" />
          </form>
        ]);
      } else {
        return null;
      }
    }

    return ([
      <div>
        { logIn() || <LoggedIn username={this.props.username} handleClick={() => this.handleClick} /> }
      </div>,
      <div className="homepage">
        <h1>U.S. Top Headlines</h1>
        <Grid container className="story-grid" spacing={8}>
          {storyCards}
        </Grid>
      </div>,
      <div>
        <Button onClick={() => this.fetchUser("username")}>fetchUser</Button>
      </div>
    ])
  }
};

// click events must be wrapped in arrow functions so that they only trigger as callbacks and don't get invoked on page load.

function mapDispatchToProps(dispatch) {
  // bindActionCreators({fetchStories: fetchStories, fetchUser: fetchUser, dispatch});
  // why don't we need this?
}

function mapStateToProps(state) {
  return {username: state.username, stories: state.stories}
}

export default connect(mapStateToProps, {fetchStories, fetchUser, createUser})(Home);
