// <CategoryDashboard /> will be a stateful class component.
// <CategoryButton /> will be a child, stateless functional/presentation component.
// Pass in the button click handler events as props to <CategoryButton />
import CategoryChip from '../components/CategoryChip';
import { fetchAllCategories } from '../actions/categories';
import { connect } from 'react-redux';

import React, { Component } from 'react';

class CategoryDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    const categories = this.props.categories.map((category, idx) => <CategoryChip key={idx} category={category} />);


    return (
      <div className="category-dashboard">
        {categories}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {categories: state.categories};
}

function mapDispatchToProps(dispatch) {}

// When a category card is "liked", the category will be saved/ POST to the User's information. This will persist to my local API.

// When a category card is clicked, the dashboard will render story cards for that specific topic.

export default connect(mapStateToProps, {fetchAllCategories})(CategoryDashboard);
