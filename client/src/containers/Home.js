import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchStories } from '../actions/stories';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  // handleClick = (event) => {
  //   event.preventDefault();
  //   this.props.fetchStories();
  // }
  // onClick={(event) => this.handleClick(event)}

  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    return (
      <div className="homepage">
        <h1>This is my Homepage.</h1>
        <h4>Insert fetched stories from NewsAPI in grid card layout</h4>
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  // bindActionCreators({fetchStories: fetchStories, dispatch});
}

function mapStateToProps(state) {
  return {stories: state.stories}
}

export default connect(mapStateToProps, {fetchStories})(Home);
