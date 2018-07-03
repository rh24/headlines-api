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
import UnsaveButton from './UnsaveButton';


const styles = {
  card: {
    height: 400,
    width: 400,
    display: 'block'
  },
}

class HoverCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  upVote = (event) => {
    event.stopPropagation();
    this.setState({
      counter: this.state.counter + 1,
    })
    // set state has a functional form. look it up :)
  }

  render() {
    const { urlToImage, title, url, source, description, publishedAt, author } = this.props.story;
    // conditionally render save vs unsave
    const toggleSave = () => {
      if (this.props.saved) {
        return (
          <UnsaveButton handleRemove={(event) => this.props.handleRemove(event)} />
        );
      } else {
        return (
          <SaveButton story={this.props.story} handleSave={(event) => this.props.handleSave(event)} />
        )
      }
    };

    return (
      <Card style={styles.card}>
        <CardContent>
          <h2>{title}</h2>
          <p>{description}</p>
          { toggleSave() }
          <h1 onClick={this.upVote}>{this.state.counter}</h1>
        </CardContent>
      </Card>
    );
  }
}


export default HoverCard;
