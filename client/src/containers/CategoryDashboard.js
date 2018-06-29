// <CategoryDashboard /> will be a stateful class component.
// <CategoryButton /> will be a child, stateless functional/presentation component.
// Pass in the button click handler events as props to <CategoryButton />
import CategoryChip from '../components/CategoryChip';
import CategoryNav from '../components/CategoryNav';
import { fetchAllCategories, fetchCategoryStories } from '../actions/categories';
// import { fetchUser } from '../actions/users';
import { connect } from 'react-redux';
import CategoryCard from '../components/CategoryCard';

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
    const { categoryStories } = this.props;
    // const categoryCards = Object.keys(this.props.categoryStories).map((categoryName, idx) => {
    //   return <CategoryCard key={idx} name={categoryName} stories={this.props.categoryStories[`${categoryName}`]} />
    // });

    // How can I give each <CategoryCard /> a key prop without an index from iterating over an array? Is it best practice to?
    const categoryCards = () => {
      for (let topic in categoryStories) {
        if (categoryStories[topic].length !== 0) {
          return <CategoryCard name={topic} stories={categoryStories[topic]} />
        }
      }
    };
    // debugger;

    return (
      <div className="category-dashboard">
        <CategoryNav
          categories={this.props.categories}
          handleClick={this.handleClick}
          handleDelete={this.handleDelete} />
        { categoryCards() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  // debugger;
  return {categories: state.categories, user: state.user, categoryStories: state.categoryStories};
}

function mapDispatchToProps(dispatch) {}

// When a category card is "liked", the category will be saved/ POST to the User's information. This will persist to my local API.

// When a category card is clicked, the dashboard will render story cards for that specific topic.

export default connect(mapStateToProps, {fetchAllCategories, fetchCategoryStories})(CategoryDashboard);
