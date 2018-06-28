import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchTopStories } from '../actions/stories';
import { createUser, fetchUserStories } from '../actions/users';
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
      loggedIn: false,
    }
  }

  componentDidMount() {
    this.props.fetchTopStories();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let username = this.state.username;
    // username is value produced by form input, which is handled on change.
    // When is the state mapped to props? Does it happen on change as well?
    fetch('http://localhost:3001/users')
      .then(resp => resp.json())
      .then(users => users.find((user, idx) => user.username === username))
      .then(user => {
        if (!user) {
          this.props.createUser(username);
        }
      });
    // Once they log in, if they are a new user, I will take them to the category dashboard to suggest favorite topics.

    // this.setState({
    //   username: userFound,
    //   loggedIn: true,
    // })
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

  render() {
    const storyCards = this.props.stories.map((story, idx) => <StoryCard key={idx} story={story} />);

    const logIn = () => {
      if (!this.state.loggedIn) {
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
        { logIn() }
      </div>,
      <div className="homepage">
        <h1>U.S. Top Headlines</h1>
        <Grid container className="story-grid" spacing={8}>
          {storyCards}
        </Grid>
      </div>,
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

export default connect(mapStateToProps, {fetchTopStories, fetchUserStories, createUser})(Home);
