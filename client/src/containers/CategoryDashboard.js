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
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    prevProps.categoryStories !== this.props.categoryStories;
  }

  handleClick = (user, category) => {
    console.log('Category object:', category, 'User:', user.username)
    // fetch News API category and map dispatch to props
    // then persist the clicked category to user categories, POST to Rails API.
    // https://stackoverflow.com/questions/22773920/can-promises-have-multiple-arguments-to-onfulfilled
    let promise = new Promise((resolve, reject) => resolve([user, category]));
    promise.then(([user, category]) => {
      return this.props.fetchCategoryStories(user, category)
    }).then((actionDispatch) => {
        this.props.saveCategory(actionDispatch.user, actionDispatch.category)
      });
  }

  handleDelete = () => {
    console.log('bye');
  }

  handleSave = (event) => {
    event.stopPropagation();
    console.log('save me!')
  }

  render() {
    const { categories, categoryStories, user, savedCategories } = this.props;
    // debugger;

    const categoryCards = Object.keys(categoryStories).map((categoryName, idx) => {
      return <CategoryCard key={idx} name={categoryName} stories={categoryStories[`${categoryName}`]} user={user} openHeadline={this.openHeadline} handleSave={(event) => this.handleSave(event)}/>
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

function openInNewTab(url) {
  let win = window.open(url, '_blank');
  win.focus();
}

function mapStateToProps(state) {
  // debugger;
  return {categories: state.categories.categories, savedCategories: state.categories.savedCategories, user: state.user, categoryStories: state.categoryStories};
}

function mapDispatchToProps(dispatch) {}

// When a category card is "liked", the category will be saved/ POST to the User's information. This will persist to my local API.

// When a category card is clicked, the dashboard will render story cards for that specific topic.

export default connect(mapStateToProps, {fetchAllCategories, fetchCategoryStories, saveCategory})(CategoryDashboard);
