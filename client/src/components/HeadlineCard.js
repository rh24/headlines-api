import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import HeartButton from './HeartButton';

const HeadlineCard = (props) => {
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

  const openHeadline = (story) => {
    function openInNewTab(url) {
      let win = window.open(url, '_blank');
      win.focus();
    }

    openInNewTab(story.url);
  }

  return (
    <Grid item style={styles.listItem}>
      <Card
        onClick={() => openHeadline(props.story)}>
        <h3>{props.story.title}</h3>
        <HeartButton style={styles.heart} handleSave={(event) => props.handleSave(event)}/>
      </Card>
    </Grid>
  )
}
// only render HeartButton on hover? I'm undecided about that.
// justify doesn't seem to change alignment of component.

export default HeadlineCard;
