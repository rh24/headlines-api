// <CategoryDashboard /> will be a stateful class component.
// <CategoryButton /> will be a child, stateless functional/presentation component.
// Pass in the button click handler events as props to <CategoryButton />
import CategoryChip from '../components/CategoryChip';
import CategoryNav from '../components/CategoryNav';
import { fetchAllCategories, fetchCategoryStories, saveCategory } from '../actions/categories';
// import { fetchUser }  from '../actions/users';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
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

  componentDidUpdate(prevProps, prevState) {
    prevProps.categoryStories !== this.props.categoryStories;
  }

  handleClick = (user, categoryName) => {
    console.log('Category:', categoryName, 'User:', user.username)
    // fetch News API category and map dispatch to props
    const fetchCategoryStories = new Promise((user, categoryName) => {
      this.props.fetchCategoryStories(categoryName)
    });

    fetchCategoryStories.then(() => this.props.saveCategory(user, categoryName));
  }

  handleDelete = () => {
    console.log('bye');
  }

  render() {
    const { categories, categoryStories, user, savedCategories } = this.props;

    const categoryCards = Object.keys(categoryStories).map((categoryName, idx) => {
      return <CategoryCard key={idx} name={categoryName} stories={categoryStories[`${categoryName}`]} user={user}/>
    });
    // Why does this not render repeats?
    // It also renders in reverse order if i start clicking from tech -> business
    // I'm guessing because it's being rendered in order of id?

    return (
      <div className="category-dashboard">
        <CategoryNav
          user={user}
          categories={categories}
          handleClick={this.handleClick}
          handleDelete={this.handleDelete} />
        <Grid container spacing={8}>
          { categoryCards }
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // debugger;
  return {categories: state.categories.categories, savedCategories: state.categories.savedCategories, user: state.user, categoryStories: state.categoryStories};
}

function mapDispatchToProps(dispatch) {}

// When a category card is "liked", the category will be saved/ POST to the User's information. This will persist to my local API.

// When a category card is clicked, the dashboard will render story cards for that specific topic.

export default connect(mapStateToProps, {fetchAllCategories, fetchCategoryStories, saveCategory})(CategoryDashboard);
