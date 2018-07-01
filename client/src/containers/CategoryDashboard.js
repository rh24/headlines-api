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
import { saveStory, removeStory } from '../actions/stories';

import React, { Component } from 'react';

class CategoryDashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    // const categoryStories
    // if (this.props.savedStories.find((story, idx) => story.title === this.props.)
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

  // Deletes a category from user.categories when a Category Chip is X'ed.
  handleDelete = () => {
    console.log('bye');
  }

  // Saves an article to user.stories
  handleSave = (event) => {
    event.stopPropagation();

  }

  // Removes a story from user.stories
  handleRemove = (event, story = null) => {
    event.stopPropagation();
    this.props.removeStory(story.id, this.props.user.id);
  }

  render() {
    const { categories, categoryStories, user, savedCategories } = this.props;
    // `categories` will hold all 7 category objects [{ id: 1, name: business }, ...]
    // `categoryStories` will hold the top 20 articles from each category upon user clicking the category chip.
    // `savedCategories` is an array that holds the categories the user clicks.


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
  return {categories: state.categories.categories, savedCategories: state.categories.savedCategories, user: state.user, categoryStories: state.categoryStories, savedStories: state.savedStories};
}

function mapDispatchToProps(dispatch) {}

// When a category chip is "liked"/clicked, the category will be saved/ POST to the User's information. This will persist to my local API.

// When it is X'ed, the category will send a DELETE request to my API.

// When a category card is clicked, the dashboard will render story cards for that specific topic.

// When a headline is 'hearted', the story will be persisted to my user.stories.
// When a headline is 'trashed', the story will be DELETE'd from user.stories.

export default connect(mapStateToProps, {fetchAllCategories, fetchCategoryStories, saveCategory, saveStory, removeStory})(CategoryDashboard);
