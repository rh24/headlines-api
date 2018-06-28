// <CategoryDashboard /> will be a stateful class component.
// <CategoryButton /> will be a child, stateless functional/presentation component.
// Pass in the button click handler events as props to <CategoryButton />
import Chip from '@material-ui/core/Chip';

import React, { Component } from 'react';

export default class CategoryDashboard extends Component {
  render() {
    return (
      <div className="category-dashboard">
        <h1>Favorite Categories</h1>
      </div>
    )
  }
}

// When a category card is "liked", the category will be saved/ POST to the User's information. This will persist to my local API.

// When a category card is clicked, the dashboard will render story cards for that specific topic.
