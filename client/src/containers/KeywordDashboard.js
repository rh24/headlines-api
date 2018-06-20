import React from 'react';
import { connect } from 'react-redux';
import { fetchByKeyword } from '../actions/keywords';
import StoryCard from './StoryCard';
import Grid from '@material-ui/core/Grid';
import HoverCard from '../components/HoverCard';


class KeywordDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      searchedStories: [],
      searchComplete: false,
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.refs.searchTerm.value !== '') {
      this.props.fetchByKeyword(this.state.text);
      this.setState({
        text: '',
        searchedStories: [],
        searchComplete: true
      })
    } else {
      alert('please enter a valid keyword search.');
    }
  }

  render() {
    // debugger;
    const stories = this.props.searchedStories.map((story, idx) => <StoryCard key={idx} story={story} />);
    let heading;

    if (stories.length != 0) {
      heading = <h1>Results:</h1>;
    } else if (stories.length === 0 && this.props.searchComplete === true) {
      heading = <h1>No results found.</h1>;
    } // how to get this working?

    return (
      <div className="location-dashboard">
        <h1>Search Everything</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            ref="searchTerm"
            type="text"
            placeholder="Keyword..."
            value={this.state.text}
            onChange={(event) => this.handleChange(event)} />
          <input
            type="submit" />
        </form><br />
        {heading}<br />
        <Grid container spacing={8}>
          {stories}
        </Grid>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {
  // debugger;
  return {text: state.text, searchedStories: state.searchedStories, searchComplete: state.searchComplete}
}

export default connect(mapStateToProps, {fetchByKeyword})(KeywordDashboard);
