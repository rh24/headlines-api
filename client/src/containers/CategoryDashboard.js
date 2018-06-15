// <CategoryDashboard /> will be a stateful class component.
// <CategoryCard /> will be a child, stateless functional/presentation component.

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
