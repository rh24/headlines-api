import React from 'react';
import { connect } from 'react-redux';
import { fetchByKeyWord } from '../actions/keywords';
import StoryCard from '../components/StoryCard';
import Grid from '@material-ui/core/Grid';
import HoverCard from '../components/HoverCard';


class KeyWord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault;
    this.props.fetchByKeyWord();
  }

  render() {
    return (
      <div className="location-dashboard">
        <h1>Search Top Headlines</h1>
        <form onSubmit={() => this.handleSubmit()}>
          <input
            type="text"
            placeholder="Keyword..."
            onChange={(event) => this.handleChange(event)} />
          <input
            type="submit" />
        </form>
      </div>
    )
  }
}

export default KeyWord;
