import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchTopStories } from '../actions/stories';
import { createUser, fetchUserStories, fetchUser, resetUser } from '../actions/users';
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
    // If I'm mapping all of my state to props and using redux to manage my state, is having a state object in my component redundant?
  }

  componentDidMount() {
    this.props.fetchTopStories();
  }

  componentDidUpdate(prevProps, prevState) {
    prevProps.username !== this.props.username
    this.props.fetchTopStories();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // username is value produced by form input, which is handled on change.
    // When is the state mapped to props? Does it happen on change as well?
    let username = this.state.username;

    // I put the below fetch request within my submit handler in the Home component because the fetch happens asynchronously. However, I have to dispatch my fetchUser action creator in order to set user state.

    fetch('http://localhost:3001/users')
      .then(resp => resp.json())
      .then(users => users.find((user, idx) => user.username === username))
      .then(user => {
        if (!user) {
          return this.props.createUser(username);
        } else {
          return this.props.fetchUser(username);
        }
      });
  }

  handleClick = () => {
    this.props.resetUser();
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    const storyCards = this.props.stories.map((story, idx) => <StoryCard key={idx} story={story} username={this.props.username} userId={this.props.userId} />);

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
        return (
          <LoggedIn username={this.props.username} handleClick={this.props.resetUser}/>
        );
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
  return {username: state.user.username, userId: state.user.id, stories: state.stories}
}
// I want to pass in the entire user object, but I hit errors.

export default connect(mapStateToProps, {fetchTopStories, fetchUserStories, createUser, fetchUser, resetUser})(Home);
