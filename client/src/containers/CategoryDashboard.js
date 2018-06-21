// <CategoryDashboard /> will be a stateful class component.
// <CategoryButton /> will be a child, stateless functional/presentation component.
// Pass in the button click handler events as props to <CategoryButton />

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
