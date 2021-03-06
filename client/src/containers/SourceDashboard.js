import React from 'react';
import { connect } from 'react-redux';
import { fetchSources } from '../actions/sources';
import SourceCard from '../components/SourceCard';
import Grid from '@material-ui/core/Grid';
import HoverCard from '../components/HoverCard';

class SourceDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: [],
    }
  }

  componentDidMount() {
    this.props.fetchSources();
  }

  render() {
    const sources = this.props.sources.map((source, idx) => <SourceCard key={idx} source={source} />);

    return (
      <Grid container spacing={8}>
        {sources}
      </Grid>
    )
  }
}

function mapDispatchToProps(dispatch) {

}

function mapStateToProps(state) {
  return {sources: state.sources};
}

export default connect(mapStateToProps, {fetchSources})(SourceDashboard);
