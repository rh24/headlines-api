import { combineReducers } from 'redux';
import storiesReducer from './storiesReducer';
import keywordReducer from './keywordReducer'

const rootReducer = combineReducers({
  stories: storiesReducer,
  searchedStories: keywordReducer
})

export default rootReducer;
