import React from 'react';
import { connect } from 'react-redux';
import { fetchByKeyword } from '../actions/keywords';
import StoryCard from '../components/StoryCard';
import Grid from '@material-ui/core/Grid';
import HoverCard from '../components/HoverCard';


class KeywordDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      searchedStories: []
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchByKeyword(this.state.text);
    this.setState({
      text: '',
      // searchedStories: [],
    })
  }

  render() {
    // debugger;
    // const stories = this.props.searchedStories.map((story, idx) => <StoryCard key={idx} story={story} />);
    // const renderStories = (stories) => {
    //   if (!!stories) {
    //     return <h1>Results:</h1>
    //   } else {
    //     return <h1>No results found.</h1>
    //   }
    // }
    return (
      <div className="location-dashboard">
        <h1>Search Top Headlines</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            placeholder="Keyword..."
            onChange={(event) => this.handleChange(event)} />
          <input
            type="submit" />
        </form><br />
        <Grid container spacing={8}>
          {this.props.searchedStories}
        </Grid>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {
  // debugger;
  return {text: state.text, searchedStories: state.storiesReducer.searchedStories}
}

export default connect(mapStateToProps, {fetchByKeyword})(KeywordDashboard);
