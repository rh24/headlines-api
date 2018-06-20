import { combineReducers } from 'redux';
import storiesReducer from './storiesReducer';
import keywordReducer from './keywordReducer';
import sourcesReducer from './sourcesReducer';

const rootReducer = combineReducers({
  stories: storiesReducer,
  searchedStories: keywordReducer,
  sources: sourcesReducer
})

export default rootReducer;
