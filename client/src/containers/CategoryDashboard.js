// <CategoryDashboard /> will be a stateful class component.
// <CategoryButton /> will be a child, stateless functional/presentation component.
// Pass in the button click handler events as props to <CategoryButton />
import CategoryChip from '../components/CategoryChip';
import CategoryNav from '../components/CategoryNav';
import { fetchAllCategories, fetchCategoryStories } from '../actions/categories';
// import { fetchUser } from '../actions/users';
import { connect } from 'react-redux';

import React, { Component } from 'react';

class CategoryDashboard extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   categories: [],
    // }
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  handleClick = (categoryName) => {
    console.log('Category:', categoryName)
    // fetch News API category and map dispatch to props
    this.props.fetchCategoryStories(categoryName)
  }

  handleDelete = () => {
    console.log('bye');
  }

  render() {
    return (
      <div className="category-dashboard">
        <CategoryNav
          categories={this.props.categories}
          handleClick={this.handleClick}
          handleDelete={this.handleDelete} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {categories: state.categories, user: state.user};
}

function mapDispatchToProps(dispatch) {}

// When a category card is "liked", the category will be saved/ POST to the User's information. This will persist to my local API.

// When a category card is clicked, the dashboard will render story cards for that specific topic.

export default connect(mapStateToProps, {fetchAllCategories, fetchCategoryStories})(CategoryDashboard);
