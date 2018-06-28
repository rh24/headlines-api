import { combineReducers } from 'redux';
import storiesReducer from './storiesReducer';
import keywordReducer from './keywordReducer';
import sourcesReducer from './sourcesReducer';
import categoriesReducer from './categoriesReducer';
import userReducer from './userReducer';
import savedStoriesReducer from './savedStoriesReducer';

const rootReducer = (state, action) => {
  if (action.type === 'RESET_USER_STATE') {
    state = undefined;
  }

  return appReducer(state, action);
}

const appReducer = combineReducers({
  user: userReducer,
  stories: storiesReducer,
  searchedStories: keywordReducer,
  savedStories: savedStoriesReducer,
  sources: sourcesReducer,
  categories: categoriesReducer
})

export default rootReducer;
