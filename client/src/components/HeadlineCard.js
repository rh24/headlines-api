import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import HearButton from './HeartButton';

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
      </Card>
    </Grid>
  )
}

export default HeadlineCard;
