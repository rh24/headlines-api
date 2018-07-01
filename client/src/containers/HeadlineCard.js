import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import HeartButton from '../components/HeartButton';
import TrashButton from '../components/TrashButton';

class HeadlineCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: false,
    }
  }

  openHeadline = (story) => {
    function openInNewTab(url) {
      let win = window.open(url, '_blank');
      win.focus();
    }

    openInNewTab(story.url);
  };

  render() {
    const { story } = this.props;

    const styles = {
      list: {
        overflow: 'auto'
      },
      listItem: {
        maxHeigt: 200,
        // maxWidth: 600,
        paddingTop: '3px',
        paddingBottom: '3px',
        paddingRight: '5px',
        paddingLeft: '5px'
      },
      heart: {
        justify: 'flex-end',
        hoverColor: 'red'
      }
    };

    return (
      <Grid item style={styles.listItem}>
        <Card
          onClick={() => this.openHeadline(story)}>
          <h3>{story.title}</h3>
          <HeartButton style={styles.heart} handleSave={(event) => this.props.handleSave(event, story)}/>
        </Card>
      </Grid>
    );
  }
}

// justify doesn't seem to change alignment of component.

export default HeadlineCard;
