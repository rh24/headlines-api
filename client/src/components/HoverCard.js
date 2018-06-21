import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import SaveButton from './SaveButton';


const styles = {
  card: {
    height: 400,
    width: 400,
    display: 'block'
  },
}

const HoverCard = (props) => {
  const { urlToImage, title, url, source, description, publishedAt, author, handleSave } = props.story;

  return (
    <Card style={styles.card}>
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
        <SaveButton story={props.story}/>
      </CardContent>
    </Card>
  )
}

export default HoverCard;
