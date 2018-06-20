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
    } else {
      alert('please enter a valid keyword search.');
    }
    this.setState({
      text: '',
      searchedStories: [],
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   this.setState({
  //     text: '',
  //     searchedStories: [],
  //     searchComplete: true
  //   })
  // }

  render() {
    const { text, searchedStories, searchComplete } = this.props;
    const stories = this.props.searchedStories.map((story, idx) => <StoryCard key={idx} story={story} />);
    let keyword = this.props.text;

    // if (stories.length != 0) {
    //   heading = Results;
    // } else if (stories.length === 0 && this.props.searchComplete === true) {
    //   heading = <h1>No results found.</h1>;
    // } // how to get this working?

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
        <h1>{stories.length !== 0 ? `Results for ${keyword}:` : 'No results found'}</h1><br />
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
// is state only mapped to props after the component remounts?

export default connect(mapStateToProps, {fetchByKeyword})(KeywordDashboard);
