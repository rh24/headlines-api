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
      previousText: '',
      text: '',
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
      previousText: this.state.text,
      text: '',
    })
  }

  render() {
    const { text, searchedStories, searchComplete } = this.props;
    const stories = this.props.searchedStories.map((story, idx) => <StoryCard key={idx} story={story} />);
    let keyword = this.state.previousText;

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
  return {text: state.text, searchedStories: state.searchedStories, searchComplete: state.searchComplete}
}

// is state only mapped to props after the component remounts?
// State is mapped to props after constructor fires but before the component did mount.

export default connect(mapStateToProps, {fetchByKeyword})(KeywordDashboard);
