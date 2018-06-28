import React from 'react';
import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';

const styles = {
  card: {
    height: 400,
    width: 400,
    display: 'block'
  },
  media: {
    height: 200,
    width: 200,
  },
  link: {

  }
};

const SourceCard = (props) => {
  // const { classes } = props;
  const { id, name, description, url, category, language, country } = props.source;

  return (
    <Grid item xs={12} sm={6}>
      <Card className={styles.card}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary"
            onClick={() => window.open(props.source.url, '_blank').focus()}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

// SourceCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default SourceCard;
